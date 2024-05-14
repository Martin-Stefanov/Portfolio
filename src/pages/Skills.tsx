import { useEffect, useState } from "react";

const Skills = () => {

  const [logos, setLogos] = useState(['js-logo.jpg', 'ts-logo.png', 'html-logo.png', 'css-logo.png']);
  const [displayedLogos, setDisplayedLogos] = useState<string[]>([]);

  const delay = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration));

  useEffect(() => {
    const displayLogos = async () => {
      for (const logo of logos) {
        if (logo !== logos[0]) {
          await delay(2000);
        }
        setDisplayedLogos((prevLogos) => [...prevLogos, logo]);
      }
    };

    displayLogos();
  }, [logos]);


  const removeDuplicates = (logosArray: string[]): string[] => {
    const logosSet = new Set(logosArray);
    return [...logosSet];
  }

  return (
    <div>
      {Boolean(displayedLogos.length) && removeDuplicates(displayedLogos).map((logo) => (
        <div className="inline-block">
          <img
            key={logo}
            className='single-logo'
            src={logo}
            alt="TEST"
          />
        </div>

      ))}
    </div>
  );


}
export default Skills;