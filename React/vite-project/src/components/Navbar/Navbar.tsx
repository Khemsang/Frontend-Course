import { MdOutlineLocalPhone } from "react-icons/md";
import logo from "../../assets/logo.png";
import { NavLinks } from "../../constants/NavLinks";
import DarkMode from "./DarkMode";

const Navbar = () => {
     return (
          <div className="bg-white dark:bg-black dark:text-white shadow-md relative">
               <div className="container">
                    <div className="flex justify-between items-center">
                         <div className=" hidden md:flex items-center gap-3 font-semibold text-gray-500">
                              <MdOutlineLocalPhone className="text-primary text-2xl hover:scale-105" />
                              <span className="font-display">+977 9800000000</span>
                         </div>
                         <div className="">
                              <img src={logo} className="w-16 top-0 left-0 
                              absolute sm:left-1/2 m-2 sm:m-0" />
                         </div>
                         <nav className="hidden md:flex">
                              <ul className="flex gap-8 items-center">
                                   {NavLinks.map((item) => (
                                        <li key={item.id} className="py-4">
                                             <a href={item.links}
                                                  className="font-display text-lg font-semibold cursor-pointer
                                          hover:text-primary duration-500">{item.name}</a>
                                        </li>
                                   ))}
                                   <DarkMode />
                              </ul>
                         </nav>
                    </div>
               </div>
          </div>
     )
}

export default Navbar