import { NavLinks } from '../../constants/NavLinks';
import {logo} from '../../images';

type ResponsiveMenuProps = {
  showMenu: boolean;
};

const ResponsiveMenu = ({ showMenu }: ResponsiveMenuProps) => {
  return (
    <div className={`fixed top-0 z-50 flex flex-col justify-between bg-white h-screen w-[75%] px-8 pt-18 text-black dark:bg-gray-900 dark:text-white ${showMenu ? "left-0" : "left-[-100%]"}`}>
      <div className="">
        <img src={logo} alt="logo" className="w-16" />
      </div>
      <div className="">
        <ul className="flex flex-col gap-4">
          {NavLinks.map(item => (
            <li key={item.id}>
              <a href={item.links} className="font-display capitalize">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <h1>Made with clouds</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;