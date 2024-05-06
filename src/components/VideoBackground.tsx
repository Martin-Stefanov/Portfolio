

const VideoBackground = () => {

    return (
        <div 
        style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
        // className="relative h-screen hidden"
        >
          <video
            autoPlay
            loop
            muted
            // className="w-full h-full absolute top-1/2 left-1/2 object-cover transform -translate-x-1/2 -translate-y-1/2 -z-10"
            style={{
              position: 'absolute',
              width: '100%',
              left: '50%',
              top: '50%',
              height: '100%',
              objectFit: 'cover',
              transform: 'translate(-50%, -50%)',
              zIndex: '-1',
            }}
          >
            <source src="/Earth-animation.mp4" type="video/mp4" />
          </video>
          <div className="relative">
            
          </div>
        </div>
      );
}

export default VideoBackground;