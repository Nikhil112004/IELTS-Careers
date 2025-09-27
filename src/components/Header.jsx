import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <div id="home" className=" ml-2 flex items-center material-symbols-outlined text-primary text-xl ">
        <span>
        <a href="/">
        <img 
        className="h-16 w-16 sm:h-20 sm:w-20"
        alt="logo"
        src={Logo}
        />
        </a>
        </span>
        </div>
    )
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="sticky top-0 z-50 bg-white shadow-md border-b-1 flex items-center justify-between py-2 px-4 sm:px-10 ">
            <Title />
            <div  className="hidden md:flex gap-6" >
                <ul className="flex gap-10">
                    <li><Link to={"/courses"}>Courses</Link></li>
                    <li><Link to={"/About"}>About</Link></li>
                    <li><Link to={"/success-Stories"}>Success Stories</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
            <button className="hidden md:block bg-[#4f46e5] text-white py-2 px-4 mr-10 rounded-4xl">Signup Free</button>

             <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
       {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
          <Link to="/courses" className="hover:text-gray-600">Courses</Link>
          <Link to="/About" className="hover:text-gray-600">About</Link>
          <Link to="/success-Stories" className="hover:text-gray-600">Success Stories</Link>
          <Link to="/contact" className="hover:text-gray-600">Contact</Link>
          <button className="bg-[#4f46e5] text-white py-2 px-4 rounded-full">
            Signup Free
          </button>
        </div>
      )}
        </div>
    )
}
export default Header;