
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";

export default function NavBar(): JSX.Element {
  
  return (
    <header className="relative py-6">
      <nav className="w-11/12 bg-red mx-auto max-w-screen-2xl flex justify-between items-center">
        {/* logo */}
        <a href="/">
          <img src="/src/assets/logo.svg" alt="rise-logo" />
        </a>

          {/* harmbuger button */}
          <button className="flex md:hidden">
          <FaBars  className="text-rise_black text-xl"/>
          </button>
        {/* links */}
        <div className="w-1/2 px-24 hidden md:block">
          <ul className="flex justify-between items-center text-lg text-primary">
            <li className="font-bold">
              <a href="" className="relative">
                Home
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full -mb-2"></span>
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-0.5">Products <IoIosArrowRoundDown />
              </a>
            </li>
            <li>
              <a href="">Investment Club</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
