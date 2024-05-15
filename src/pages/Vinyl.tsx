import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { CustomEase } from "gsap/all";
import { v4 } from "uuid";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);
CustomEase.create("cubic", "0.83, 0, 0.17, 1");

// make isAnimating work (not clickable when in action)
// See how to fix - when the five albums switch !!!




const Vinyl = () => {
  // const [isAnimating, setIsAnimating] = useState(false);
  const albumRefs = Array(5).fill(0).map(_ => React.createRef<HTMLDivElement>());
  const [clickTimes, setClickTimes] = useState(0);

  useEffect(() => {
    initializeAlbums()
  }, [])

  const initializeAlbums = (): void => {

    gsap.to(albumRefs.map(ref => ref.current), {
      y: (i) => -17 + 15 * i + "%",
      z: (i) => 15 * i,
      duration: 1,
      ease: 'cubic',
      stagger: -0.1,
      // onComplete: () => {
      //   albumRefs.forEach((ref, index) => {
      //     if (ref.current) {
      //       ref.current.style.zIndex = `${index}`;
      //     }
      //   });
      // }
    })
  };

  const handleAlbumClick = (event: React.MouseEvent<HTMLDivElement>) => {

    let target = event.target as HTMLDivElement | HTMLElement | null;
    while (target && !target.classList.contains('album')) {
      target = target.parentElement;
    }

    if (!target) {
      return;
    }

    // if (clickTimes !== 5) {
    //   setClickTimes(clickTimes + 1);
    // } else {
    //   setClickTimes(0);
    // }
    const lastAlbumRef = albumRefs.pop();

    if (lastAlbumRef && lastAlbumRef.current) {


      gsap.to(lastAlbumRef.current, {
        y: '+=150%',
        duration: 0.75,
        ease: 'cubic',
        onComplete: () => {
          if (lastAlbumRef.current) {
           
            lastAlbumRef.current.style.zIndex = '-1';
            albumRefs.unshift(lastAlbumRef);
            initializeAlbums();
          }

        }
      })
    }
  }



  return (
    <div className="relative w-[100vw] h-[89vh] overflow-hidden bg-red-400">
      <div onClick={handleAlbumClick} className="slider absolute top-[10vh] w-[100vw] h-[100vh] bg-purple-500">
        {albumRefs.map((ref, index) => (
          <div ref={ref} className="album" key={index}>
            <img className="w-[100%] h-[100%] object-cover" src={`/album${index}.jpg`} alt="Album Cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vinyl;