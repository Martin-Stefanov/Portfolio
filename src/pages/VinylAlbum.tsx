import { useParams } from "react-router-dom";
import { SPOTIFY_PLAYLISTS } from "../common/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const VinylAlbum = () => {
  const { album } = useParams();
  const vinylRef = useRef<HTMLImageElement | null>(null);
  const tonearmRef = useRef<HTMLImageElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://open.spotify.com") return;

      const data = event.data;
      if (data.payload.isPaused) {
        setPlaying(false);
      } else {
        setPlaying(true);
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    if (vinylRef.current) {
      if (playing) {
        gsap.to(vinylRef.current, {
          rotate: "+=360",
          repeat: -1,
          ease: "none",
          duration: 5,
        });
        gsap.to(tonearmRef.current, {
          rotate: "+19",
          transformOrigin: "50% 26%", 
          ease: "none",
          duration: 1,
        })
      } else {
        gsap.killTweensOf(vinylRef.current);
        gsap.to(tonearmRef.current, {
          rotate: "0",
          transformOrigin: "50% 26%",
          ease: "none",
          duration: 2, 
        })
      }
    }
  }, [playing]);

  return (
    <div className="flex flex-col items-center h-full overflow-hidden mt-10 sm:mt-0 sm:flex-row sm:justify-center">
      {album && (
        <iframe
          className="ml-4 sm:h-[38rem] sm:mr-6 lg:mr-16 lg:h-[89%] lg:w-[28%] lg:min-w-80"
          src={`https://open.spotify.com/embed/album/${
            SPOTIFY_PLAYLISTS[parseInt(album)]
          }?utm_source=generator&theme=0`}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      )}
      <div className="flex items-center bg-turntable  p-4 shadow-turntable">
      <img
        ref={vinylRef}
        src="/vinyl.png"
        className="w-44 h-44 md:w-72 md:h-72 lg:h-96 lg:w-96 xl:w-[36rem] xl:h-[36rem]"
        alt="Vinyl Disc Spinning"
      />
      <img
        ref={tonearmRef}
        src="/Hobbies/tonearm1.png"
        className="h-36 md:h-60 lg:h-72 xl:h-128 mb-9 md:mb-16 right-32"
        alt="Tonearm"
      />
      </div>
    </div>
  );
};
export default VinylAlbum;
