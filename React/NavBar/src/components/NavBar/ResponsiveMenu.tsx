import { NavLinks } from "../../Constants/NavLinks";

type ResponsiveMenuProps = {
  showMenu: boolean;
};

const ResponsiveMenu = ({ showMenu }: ResponsiveMenuProps) => {
  return (
    <div
      className={`
        fixed top-0 ${showMenu ? "left-0" : "-left-[100%]"}
        h-screen w-[75%] bg-white
        flex flex-col items-center justify-center
        transition-all duration-500 ease-in-out
        z-40
      `}
    >
      <ul className="flex flex-col gap-6 text-center">
        {NavLinks.map((item) => (
          <li key={item.id}>
            <a
              href={item.links}
              className="text-lg font-semibold hover:text-primary duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsiveMenu;
