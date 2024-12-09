import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hobbies = () => {
  const navigate = useNavigate();

  const [vinylIsHovered, setVinylIsHovered] = useState(false);
  const [campingIsHovered, setCampingIsHovered] = useState(false);

  return (
    <div className="flex flex-col flex-grow items-center lg:justify-center gap-12 bg-gray-300">
      {/* Vinyl Hobby */}
      <div
        className="relative mt-12 sm:mt-16 lg:mt-0 w-[70%] md:w-[70%] lg:w-[65%] xl:w-[60%] 2xl:w-[50%] aspect-[27/9]"
        onMouseEnter={() => setVinylIsHovered(true)}
        onMouseLeave={() => setVinylIsHovered(false)}
      >
        {/* Hobby Block */}
        <div
          onClick={() => navigate("/hobbies/vinyl")}
          className="cursor-pointer  rounded-xl bg-music bg-cover bg-center hover:shadow-2xl hover:shadow-gray-600 transition w-full h-full"
        ></div>

        {/* Vinyl Hover Text */}
        {vinylIsHovered && (
          <div className="absolute top-1/2 left-full ml-4 transform -translate-y-1/2 lg:w-40 p-2 bg-white text-black rounded-lg shadow-lg">
            VINYL HERE VINYL HERE
          </div>
        )}
      </div>

      {/* Camping Hobby */}
      <div
        className="relative w-[70%] md:w-[70%] lg:w-[65%] xl:w-[60%] 2xl:w-[50%] aspect-[27/9]"
        onMouseEnter={() => setCampingIsHovered(true)}
        onMouseLeave={() => setCampingIsHovered(false)}
      >
        {/* Hobby Block */}
        <div
        onClick={() => navigate("/hobbies/camping")}
          className="cursor-pointer bg-camping bg-cover bg-center rounded-xl hover:shadow-2xl hover:shadow-black transition w-full h-full"
        ></div>

        {/* Camping Hover Text */}
        {campingIsHovered && (
          <div className="absolute top-1/2 right-full mr-4 transform -translate-y-1/2 lg:w-40 p-2 bg-white text-black rounded-lg shadow-lg">
            CAMPING HERE CAMPING HERE
          </div>
        )}
      </div>
    </div>
  );
};

export default Hobbies;

