
const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-20 w-full min-w-max fixed bg-gray-900">
      <img  src="/logo.png" alt="MS-Logo" />
      <img className="w-12 h-12 mx-4 cursor-pointer active:w-14 active:h-14 transition duration-100 hover:opacity-50"  src="/github.png" alt="GitHub-Logo" />
    </div>
  )

}
export default NavBar;