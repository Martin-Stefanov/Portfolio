import { useEffect, useState } from "react";
import { SKILLS_LOGOS } from "../common/constants";

const Skills = () => {
  const [logosToShow, setLogosToShow] = useState<
    { name: string; url: string }[]
  >([]);

  useEffect(() => {
    let isMounted = true;

    const showLogos = async () => {
      for (const logo of SKILLS_LOGOS) {
        if (!isMounted) return;
        setLogosToShow((prev) => {
          // Prevent duplicates by ensuring the logo isn't already in the state
          if (!prev.includes(logo)) {
            return [...prev, logo];
          }
          return prev;
        });
        await delay(1500); // Delay before showing the next logo
      }
    };
    showLogos();
    return () => {
      isMounted = false; // Clean up to avoid multiple renders
    };
  }, []);

  const delay = (duration: number) =>
    new Promise((resolve) => setTimeout(resolve, duration));

  return (
    <div className="h-full bg-gray-300 flex flex-col overflow-hidden">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {logosToShow.map((logo) => (
          <div
            key={logo.url}
            className="flex flex-col items-center text-center"
          >
            <img className="single-logo" src={logo.url} alt={logo.name} />
            <span className="font-bold text-md sm:text-xl md:text-2xl lg:text-3xl">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;

// const [logos, setLogos] = useState(['js-logo.jpg', 'ts-logo.png', 'html-logo.png', 'css-logo.png']);
// const [displayedLogos, setDisplayedLogos] = useState<string[]>([]);

// const delay = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration));

// useEffect(() => {
//   const displayLogos = async () => {
//     for (const logo of logos) {
//       if (logo !== logos[0]) {
//         await delay(2000);
//       }
//       setDisplayedLogos((prevLogos) => [...prevLogos, logo]);
//     }
//   };

//   displayLogos();
// }, [logos]);

// const removeDuplicates = (logosArray: string[]): string[] => {
//   const logosSet = new Set(logosArray);
//   return [...logosSet];
// }

// return (
//   <div>
//     {Boolean(displayedLogos.length) && removeDuplicates(displayedLogos).map((logo) => (
//       <div className="inline-block" key={v4()}>
//         <img
//           key={logo}
//           className='single-logo'
//           src={logo}
//           alt="TEST"
//         />
//       </div>

//     ))}
//   </div>
// );
