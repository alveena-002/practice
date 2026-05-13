import { Link } from "react-router-dom";
function Navbar(){
  return(
    <nav className="bg-[#181818] text-white px-6 py-3 flex justify-between items-center border-b border-[#303030]">
      {}
      <h1 className="text-2xl font-bold text-red-600 tracking-tight">
       YouTube
      </h1>
      {}
      <div className="flex gap-6 text-[16px]">
        <Link 
          to="/" 
          className="hover:text-red-500 transition duration-200"
        >
          Login
        </Link>
      <Link 
        to="/home" 
          className="hover:text-red-500 transition duration-200"
       >
          Home
        </Link>
    </div>
    </nav>
  );
}
export default Navbar;