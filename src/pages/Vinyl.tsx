import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { CustomEase } from "gsap/all";
import { v4 } from "uuid";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);
CustomEase.create("cubic", "0.83, 0, 0.17, 1");


const Vinyl = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // const album = useRef<HTMLDivElement | null>(null);
  const albumRefs = Array(5).fill(0).map(_ => React.createRef<HTMLDivElement>());

const initializeAlbums = (): void => {
  gsap.to(albumRefs.map(ref => ref.current), {
    y: (i) => -17 + 15 * i + "%",
    z: (i) => 15 * i,
    duration: 1,
    ease: 'cubic',
    stagger: -0.1,
  })
}


  useEffect(() => {
    initializeAlbums()
  }, [])
  // useGSAP(() => {

  //   gsap.to(album.current, {
  //     rotation: '+=360',
  //     duration: 3,

  //     ease: 'none'
  //   })
  // })

  return (
    <div className="relative w-[100vw] h-[89vh] overflow-hidden bg-red-400">
      <div className="slider absolute top-[10vh] w-[100vw] h-[100vh] bg-purple-500">
        {albumRefs.map((ref, index) => (
          <div ref={ref} className="album" key={v4()}>
            <img className="w-[100%] h-[100%] object-cover" src={`/album${index}.jpg`} alt="Album Cover" />
            <div className="copy">
              <h1>Lorem, ipsumn.</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vinyl;