
const NavBar = () => {
  return (
    <div className="h-24 w-full min-w-max bg-black top-0">
      <div className="flex justify-between items-center  bg-transparent">
        <img className="h-28" src="/logo.png" alt="MS-Logo" />
        <img className="w-12 h-12 mx-4 cursor-pointer active:w-14 active:h-14 transition duration-100 hover:opacity-50" src="/github.png" alt="GitHub-Logo" />
      </div>
    </div>
  )

}
export default NavBar;