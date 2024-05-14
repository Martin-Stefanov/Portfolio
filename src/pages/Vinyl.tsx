
const Vinyl = () => {


  return (
    <div className="relative w-[100vw] h-[100vh] overflow-hidden bg-white">
      <div className="slider absolute top-[15vh] w-[100vw] h-[100vh] overflow-hidden">
        <div className="album">
          <img className="w-[100%] h-[100%] object-cover" src="/postmodern.jpg" alt="Postmodern Jukebox Cover" />
          <div className="copy">
            <h1>Lorem, ipsumn.</h1>
          </div>
        </div>
        <div className="album">
          <img className="w-[100%] h-[100%] object-cover" src="/floyd.jpg" alt="Pink Floyd Cover" />
          <div className="copy">
            <h1>Lorem, ipsumn.</h1>
          </div>
        </div>
        <div className="album">
          <img className="w-[100%] h-[100%] object-cover" src="/jaya.jpg" alt="Jaya the Cat Cover" />
          <div className="copy">
            <h1>Lorem, ipsumn.</h1>
          </div>
        </div>
        <div className="album">
          <img className="w-[100%] h-[100%] object-cover" src="/zeppelin.jpg" alt="Led Zeppelin Cover" />
          <div className="copy">
            <h1>Lorem, ipsumn.</h1>
          </div>
        </div>
        <div className="album">
          <img className="w-[100%] h-[100%] object-cover" src="/stones.jpg" alt="Rolling Stones Cover" />
          <div className="copy">
            <h1>Lorem, ipsumn.</h1>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Vinyl;