import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  return (
    // <div className="h-24 w-full min-w-max bg-black top-0">
      <div className="flex justify-between items-center h-auto px-2  bg-gray-800">
        <img onClick={() => navigate('/')} className="h-10 sm:h-16 cursor-pointer" src="/logo.png" alt="MS-Logo" />
        <div className="flex w-[55%] justify-between">
          <button onClick={() => navigate('/projects')} className='main-button'>Projects</button>
          <button onClick={() => navigate('/skills')} className='main-button'>Skills</button>
          <button onClick={() => navigate('/hobbies')} className='main-button'>Hobbies</button>
          <button className='main-button'>Contacts</button>
        </div>
        
        <img className="h-7 w-7 sm:w-12 sm:h-12 mx-4 cursor-pointer active:w-14 active:h-14 transition duration-100 hover:opacity-50" src="/github.png" alt="GitHub-Logo" />
      </div>
    // </div>
  )

}
export default NavBar;