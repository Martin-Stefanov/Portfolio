import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const HomePage = () => {
  const bottomLine = useRef<HTMLDivElement | null>(null);
  const topLine = useRef<HTMLDivElement | null>(null);
  const mLetter = useRef<HTMLDivElement | null>(null);
  const sLetter = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();
  useGSAP(() => {
    gsap.from(bottomLine.current, {
      y: "1600%",
      duration: 2,
      delay: 1.5,
      ease: "bounce",
    });

    gsap.from(topLine.current, {
      y: "-200%",
      duration: 2,
      ease: "bounce",
    });

    gsap.to(mLetter.current, {
      rotateY: "+=360",
      repeat: -1,
      ease: "none",
      delay: 3,
      duration: 5,
    });

    gsap.to(sLetter.current, {
      rotateY: "+=360",
      repeat: -1,
      ease: "none",
      delay: 3,
      duration: 5,
    });
  });

  return (
    <div className="flex-grow bg-gray-300 relative overflow-hidden">
      <img
        className="background-image absolute w-full mt-14 lg:mt-0"
        src="/test2.jpg"
        alt=""
      />
      {/* <img className="absolute z-10 h-48 w-32" src="/me.jpg" alt="" /> */}
      <div className="absolute text-gray-500 text-5xl mt-1 md:mt-4 lg:mt-0 lg:bottom-12 ml-2 md:ml-9">
        <div
          ref={topLine}
          className="text-xs sm:text-sm md:text-lg font-semibold font-briem lg:text-4xl mb-0 lg:mb-3"
        >
          <span className="inline-block">
            Hello, my name is{" "}
            <div ref={mLetter} className="inline-block lg:text-6xl text-gray-600">
              M
            </div>
            <span className="text-gray-600">
            artin{" "}
            </span>
  
            <div ref={sLetter} className="inline-block lg:text-6xl text-gray-600">
              S
            </div>
            <span className="text-gray-600">
            tefanov
            </span>
            , nice to meet you.{" "}
          </span>
        </div>
        <div
          ref={bottomLine}
          className="text-xs sm:text-sm md:text-lg font-semibold font-briem lg:text-3xl"
        >
          <span>I would like to welcome you to my personal portfolio.</span>
        </div>
      </div>

      {/* <div className='flex justify-end items-center'>
        <div id='buttons-box' className='flex flex-col justify-center space-y-10 w-96 h-128 border-black border-2 rounded-md mr-20 mt-40'>

          <button onClick={() => navigate('/skills')} className='main-button'>SKILLS</button>
          <button onClick={() => navigate('/projects')} className='main-button'>PROJECTS</button>
          <button className='main-button'>Where I come from</button>
          <button onClick={() => navigate('/hobbies')} className='main-button'>Hobbies</button>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
