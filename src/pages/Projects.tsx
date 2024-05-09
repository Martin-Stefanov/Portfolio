import { useState } from "react";
import ProjectVideoOnHover from "../components/ProjectVideoOnHover";
import { CONNECTIFY_VIDEO, GIFIT_VIDEO, TRAVELART_VIDEO } from "../common/constants";


const Projects = () => {
  const [isConnectifyHovered, setIsConnectifyHovered] = useState(false);
  const [isTravelArtHovered, setIsTravelArtHovered] = useState(true);
  const [isGifItHovered, setIsGifItHovered] = useState(false);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='flex  justify-center items-center space-x-20 w-fit h-fit mt-40'>
          <div onMouseEnter={() => setIsConnectifyHovered(true)} onMouseLeave={() => setIsConnectifyHovered(false)} className="border-black border-2 rounded-md cursor-pointer active:translate-y-7">
            <img src="/connectify2.png" alt="Connectify Logo" />
          </div>
          <div onMouseEnter={() => setIsTravelArtHovered(true)} onMouseLeave={() => setIsTravelArtHovered(false)} className="border-black border-2 rounded-md cursor-pointer">
            <img src="/travel-art.png" alt="Travel-Art Logo" />
          </div>
          <div onMouseEnter={() => setIsGifItHovered(true)} onMouseLeave={() => setIsGifItHovered(false)} className="border-black border-2 rounded-md cursor-pointer">
            <img src="/gif-it-static.png" alt="GIF-IT Logo" />
          </div>
        </div>
      </div>
      {isConnectifyHovered && <ProjectVideoOnHover videoPath={CONNECTIFY_VIDEO} />}
      {isTravelArtHovered && <ProjectVideoOnHover videoPath={TRAVELART_VIDEO} />}
      {isGifItHovered && <ProjectVideoOnHover videoPath={GIFIT_VIDEO} />}
    </>
  )
}

export default Projects;