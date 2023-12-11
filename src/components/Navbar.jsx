import { NavLink } from "react-router-dom";
import ReactLogo from "../assets/images/react_logo.png"; // Path to your React logo image

const Navbar = () => {
  return (
    <header className='header flex items-center justify-between'>
      <NavLink to='/'>
        <img
          src={ReactLogo}
          alt="React Logo"
          className="h-12 w-auto shadow-lg" // Added shadow-lg class for the shadow effect
        />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
