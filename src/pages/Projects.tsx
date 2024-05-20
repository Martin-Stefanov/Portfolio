import { useState } from "react";
import ProjectVideoOnHover from "../components/ProjectVideoOnHover";
import { CONNECTIFY_VIDEO, GIFIT_VIDEO, TRAVELART_VIDEO } from "../common/constants";

const Projects = () => {

  const handleSeeMoreClick = () => {

  }

  return (
    <div className='flex justify-center items-center space-x-32'>
      <div className="card-container">
        <div className=" card">
          <div className="card-front">
            <img className="rounded-md" src="/connectify-logo2.png" alt="Connectify-Logo" />
          </div>
          <div className="card-back bg-connectify">
          <img className="mt-2" src="/connectify.png" alt="Connectify-Logo" />
              <span className="mx-3" style={{color:'#fffce1'}}>Info about the application.... Info about the application.... Info about the application.... Info about the application.... Info about the application.... Info about the application....</span>
              <button className="mb-4">See More</button>
          </div>
        </div>
      </div>

      <div className=" card-container">
        <div className="card">
          <div className="card-front">
          <ProjectVideoOnHover videoPath={TRAVELART_VIDEO} />
          </div>
          <div className="card-back bg-travel-art">
              <img className="mt-2" src="/travel-art.png" alt="Connectify-Logo" />
              <span className="mx-3" >Info about the application.... Info about the application.... Info about the application.... Info about the application.... Info about the application.... Info about the application....</span>
              <button className="mb-4">See More</button>
          </div>
        </div>
      </div>

      <div className=" card-container">
        <div className="card">
          <div className="card-front">
            GIF-IT Logo
          </div>
          <div className="card-back">
            GIF-IT Back
          </div>
        </div>
      </div>

    </div>
  )
}
export default Projects;

