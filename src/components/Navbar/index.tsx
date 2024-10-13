import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowRoundDown, IoMdClose } from "react-icons/io";

export default function NavBar(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      <nav className="flex items-center flex-wrap bg-white p-3 md:px-24 w-full  mx-auto max-w-screen-2xl">
        {/* logo */}
        <a href="/">
          <img src="/src/assets/logo.svg" alt="rise-logo" />
        </a>

        {/* hamburger button */}
        <button
          className="inline-flex p-3 ml-auto md:hidden outline-none"
          onClick={handleToggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <IoMdClose className="text-rise_black text-xl" />
          ) : (
            <FaBars className="text-rise_black text-xl" />
          )}{" "}
        </button>

        {/* links */}
        <div
          className={`${
            mobileMenuOpen ? "" : "hidden"
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center  flex flex-col lg:h-auto">
            <ul className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 text-lg text-primary">
              <li className="font-bold">
                <a href="" className="relative">
                  Home
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full -mb-2"></span>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="flex items-center gap-0.5 hover:underline hover:decoration-primary hover:decoration-2"
                >
                  Products <IoIosArrowRoundDown />
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:underline hover:decoration-primary hover:decoration-2"
                >
                  Investment Club
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:underline hover:decoration-primary hover:decoration-2"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:underline hover:decoration-primary hover:decoration-2"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:underline hover:decoration-primary hover:decoration-2"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
