import { useParams } from "react-router-dom";
import { SPOTIFY_PLAYLISTS } from "../common/constants";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const VinylAlbum = () => {

  const { album } = useParams();
  const vinylRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    gsap.to(vinylRef.current, {
      rotate: "+=360",
      repeat: -1,
      ease: "none",
      duration: 5,
    })
  })

  return (
    <div className="flex flex-col items-center h-full overflow-hidden mt-10 sm:mt-0 sm:flex-row sm:justify-center">
      {album &&
        <iframe
          className="ml-4 sm:h-[38rem] sm:mr-6 md:mr-16 lg:h-[89%] lg:w-[28%] lg:min-w-80"
          src={`https://open.spotify.com/embed/album/${SPOTIFY_PLAYLISTS[parseInt(album)]}?utm_source=generator&theme=0`}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      }

        <img ref={vinylRef} src="/vinyl.png" className="w-44 h-44 sm:w-72 sm:h-72 md:h-96 md:w-96 lg:w-[36rem] lg:h-[36rem]" alt="Vinyl Disc Spinning" />
    
    </div>
  )
};
export default VinylAlbum;