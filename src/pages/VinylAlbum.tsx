import { useParams } from "react-router-dom";
import { SPOTIFY_PLAYLISTS } from "../common/constants";


const VinylAlbum = () => {

  const { album } = useParams();


  return (
    <>
      {album &&
        <iframe
          className="absolute top-0 w-[28%] h-[89%] mt-24"
          src={`https://open.spotify.com/embed/album/${SPOTIFY_PLAYLISTS[parseInt(album)]}?utm_source=generator&theme=0`}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      }
    </>
  )
};
export default VinylAlbum;