import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
    return (
        <div id="home" className="ml-2 flex material-symbols-outlined text-primary text-xl ">
        <span>
        <a href="/">
        <img 
        className="h-20 w-20 "
        alt="logo"
        src={Logo}
        />
        </a>
        </span>
        </div>
    )
};

const Header = () => {
    return (
        <div className="border-b-1 flex items-center justify-between py-0 ">
            <Title />
            <div >
                <ul className="flex gap-10">
                    <li><Link to={"/courses"}>Courses</Link></li>
                    <li><Link to={"/About"}>About</Link></li>
                    <li><Link to={"/success-Stories"}>Success Stories</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
            <button className="bg-[#4f46e5] text-white py-2 px-4 mr-10 rounded-4xl">signup free</button>
        </div>
    )
}
export default Header;