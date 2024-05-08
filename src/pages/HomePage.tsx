import NavBar from "../components/NavBar";


const HomePage = () => {

  return (
    <div className=' bg-palms bg-cover min-h-screen w-full'>
      <NavBar />
      {/* <VideoBackground /> */}
      <div className='flex justify-end items-center'>
        <div id='buttons-box' className='flex flex-col justify-center space-y-10 w-96 h-128 border-black border-2 rounded-md mr-20 mt-10'>

          <button className='main-button'>SKILLS</button>
          <button className='main-button'>PROJECTS</button>
          <button className='main-button'>Where I come from</button>
          <button className='main-button'>My Free Time</button>
        </div>
      </div>
    </div>
  )


}

export default HomePage;