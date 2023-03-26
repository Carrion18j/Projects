import { logo } from "../assets";
import "../constants";
import { navLinks } from "../constants";
import { Button } from ".";

const navBar = () => {
  return (
    <nav className="bg-primary flex">
      <img src={logo} alt="Logo" className="ml-4 max-w-[140px] max-h-[100px] cursor-pointer" />
      <ul className="list-none sm:flex hidden flex-wrap w-full justify-center items-center flex-1">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a
              href={`#${nav.id}`}
              className="text-[20px] font-semibold mx-5 text-P link-underline link-underline-black "
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-end items-center mr-10">
        <Button />
      </div>
    </nav>
  );
};

export default navBar;
