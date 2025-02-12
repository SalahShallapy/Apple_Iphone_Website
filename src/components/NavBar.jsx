import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const NavBar = () => {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        {/* Apple Logo */}
        <img src={appleImg} alt="Apple" width={18} height={22} />

        {/* Nav Links - Hidden on Small Screens */}
        <div className="flex flex-1 justify-center gap-10 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-base cursor-pointer text-gray-400 hover:text-white transition duration-300"
            >
              {nav}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-8 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={22} height={22} />
          <img src={bagImg} alt="bag" width={22} height={22} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
