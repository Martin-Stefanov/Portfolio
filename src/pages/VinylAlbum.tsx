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
    <div className="overflow-y-hidden">
      {album &&
        <iframe
          className="absolute top-0 w-[28%] h-[89%] mt-24"
          src={`https://open.spotify.com/embed/album/${SPOTIFY_PLAYLISTS[parseInt(album)]}?utm_source=generator&theme=0`}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      }

        <img ref={vinylRef} src="/vinyl.png" className=" spinning-vinyl w-128 h-128 right-0 absolute mr-80 mt-28" alt="Vinyl Disc Spinning" />
    
    </div>
  )
};
export default VinylAlbum;