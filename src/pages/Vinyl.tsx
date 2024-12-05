import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect } from "react";
import { CustomEase } from "gsap/all";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);
CustomEase.create("cubic", "0.83, 0, 0.17, 1");

const Vinyl = () => {
  const albumRefs = Array(5)
    .fill(0)
    .map((_) => React.createRef<HTMLDivElement>());
  const navigate = useNavigate();

  useEffect(() => {
    initializeAlbums();
  }, []);

  const initializeAlbums = (): void => {
    gsap.to(
      albumRefs.map((ref) => ref.current),
      {
        // see how to change for small
        y: (i) => 15 + 15 * i,
        z: (i) => 15 * i, // change here the 15 with smaller number depending on the screen size !!
        duration: 1,
        ease: "cubic",
        stagger: -0.1,
      }
    );
  };

  const handleAlbumClick = (event: React.MouseEvent<HTMLDivElement>) => {
    let target = event.target as HTMLDivElement | HTMLElement | null;
    while (target && !target.classList.contains("album")) {
      target = target.parentElement;
    }

    if (!target) {
      return;
    }

    const lastAlbumRef = albumRefs.pop();

    if (lastAlbumRef && lastAlbumRef.current) {
      gsap.to(lastAlbumRef.current, {
        y: "+=150%",
        duration: 0.75,
        ease: "cubic",
        onComplete: () => {
          if (lastAlbumRef.current) {
            lastAlbumRef.current.style.zIndex = "-1";
            albumRefs.unshift(lastAlbumRef);
            albumRefs.forEach((ref, index) => {
              if (ref.current) {
                ref.current.style.zIndex = `${index}`;
              }
            });
            initializeAlbums();
          }
        },
      });
    }
  };

  const handleSpotifyIconClick = () => {
    const albums = Array.from(document.getElementsByClassName("album"));

    let maxZIndex = -1;
    let maxZIndexElement: Element | null = null;
    let albumToListen: number | string = 4;

    for (let i = 0; i < albums.length; i++) {
      const zIndex = window
        .getComputedStyle(albums[i])
        .getPropertyValue("z-index");

      if (parseInt(zIndex, 10) > maxZIndex) {
        maxZIndex = parseInt(zIndex, 10);
        maxZIndexElement = albums[i];
      }
    }

    if (maxZIndexElement) {
      albumToListen = parseInt(
        maxZIndexElement.getAttribute("data-custom-prop") || "4"
      );
    }
    navigate(`/hobbies/vinyl/${albumToListen}`);
  };

  return (
    <>
      <div className="relative w-full h-full overflow-hidden bg-red-400">
        <div
          onClick={handleAlbumClick}
          className="slider absolute  w-[100vw] h-[100vh] bg-purple-500"
        >
          {albumRefs.map((ref, index) => (
            <div
              ref={ref}
              className="album"
              key={v4()}
              data-custom-prop={index}
            >
              <img
                className="w-[100%] h-[100%] object-cover cursor-pointer"
                src={`/album${index}.jpg`}
                alt="Album Cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* <img onClick={handleSpotifyIconClick} className="top-0 right-0 w-24 h-24 absolute mt-80 mr-20 cursor-pointer" src="/spotify-logo.png" alt="Spotify Logo" /> */}
      <div
        className="absolute flex items-center w-72 min-w-80 h-56 bg-turntable p-3 pt-6 bottom-0 left-1/3 xl:left-auto xl:right-0 xl:top-1/3  mr-10 shadow-turntable"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleSpotifyIconClick}
      >
        <div className="text-center mb-40">
        <span className=" text-red-700 font-bold text-xl">DROP HERE</span>
        </div>
          
        <img
          src="/turntable-mat.png"
          className="w-44 h-44"
          alt="Vinyl Disc Spinning"
        />
        <img
          src="/Hobbies/tonearm1.png"
          className="h-36 mb-16 "
          alt="Tonearm"
        />
      </div>
    </>
  );
};

export default Vinyl;
