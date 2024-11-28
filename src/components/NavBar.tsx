import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  return (
      <div className="flex items-center h-auto px-2 bg-gray-800">
        <img onClick={() => navigate('/')} className=" h-10 sm:h-14 md:h-16 cursor-pointer mr-auto" src="/logo.png" alt="MS-Logo" />
        <div className="flex justify-center flex-grow gap-2 sm:gap-7 lg:gap-24 xl:gap-28 xl:mr-24">
          <button onClick={() => navigate('/projects')} className='main-button'>Projects</button>
          <button onClick={() => navigate('/skills')} className='main-button'>Skills</button>
          <button onClick={() => navigate('/hobbies')} className='main-button'>Hobbies</button>
          <button className='main-button'>Contacts</button>
        </div>
        {/* <img className="h-7 w-7 sm:w-12 sm:h-12 mx-4 cursor-pointer active:w-14 active:h-14 transition duration-100 hover:opacity-50" src="/github.png" alt="GitHub-Logo" /> */}
      </div>
  )

}
export default NavBar;