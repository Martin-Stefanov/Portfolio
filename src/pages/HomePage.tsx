import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";


const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div className=' bg-palms bg-cover h-[100vh] w-full'>
     
      {/* <VideoBackground /> */}
      <div className='flex justify-end items-center'>
        <div id='buttons-box' className='flex flex-col justify-center space-y-10 w-96 h-128 border-black border-2 rounded-md mr-20 mt-40'>

          <button onClick={() => navigate('/skills')} className='main-button'>SKILLS</button>
          <button onClick={() => navigate('/projects')} className='main-button'>PROJECTS</button>
          <button className='main-button'>Where I come from</button>
          <button className='main-button'>My Free Time</button>
        </div>
      </div>
    </div>
  )


}

export default HomePage;