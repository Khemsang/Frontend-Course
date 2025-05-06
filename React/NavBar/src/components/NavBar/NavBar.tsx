import { Logo } from "../../images";
import { useState } from "react";
import { NavLinks } from "../../Constants/NavLinks";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import ResponsiveMenu from "./ResponsiveMenu";

const NavBar = () => {
  const [showMenu, setMenu] = useState(false);
  const handleMenuToggle = () => setMenu(!showMenu);

  return (
    <nav className="  w-full capitalize shadow-md top-0 left-0 z-40 fixed bg-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto md:p-0 px-5 py-3">
        <div className="flex items-center gap-3 font-bold text-blue-700">
          <img src={Logo} alt="logo" />
          <span className="text-2xl uppercase">shield</span>
        </div>

        <ul className="md:flex gap-8 p-7 hidden">
              {NavLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.links}>{item.name}</a>
                </li>
              ))}
        </ul>
         <div className="flex md:hidden">
         {showMenu ? (
            <IoMdClose onClick={handleMenuToggle} />
          ) : (
            <CiMenuBurger onClick={handleMenuToggle} />
          )}
         </div>
        <ResponsiveMenu showMenu={showMenu}/>
      </div>
    
      
    </nav>
  );
};

export default NavBar;
