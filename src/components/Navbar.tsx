import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) setShadow(true);
      else setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent | HTMLLIElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleMobileNavLinkClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
    setNav(false);
  };

  return (
    <div
      style={{ background: "#ecf0f3" }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/assets/logo.png" alt="" width="80" height="30" />
        <div>
          <ul className="hidden md:flex items-center">
            <a
              onClick={(event) => handleNavLinkClick(event, "home")}
              className="ml-10 text-sm uppercase hover:border-b cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={(event) => handleNavLinkClick(event, "about")}
              className="ml-10 text-sm uppercase hover:border-b cursor-pointer"
            >
              About
            </a>
            <a
              onClick={(event) => handleNavLinkClick(event, "skills")}
              className="ml-10 text-sm uppercase hover:border-b cursor-pointer"
            >
              Skills
            </a>
            <a
              onClick={(event) => handleNavLinkClick(event, "projects")}
              className="ml-10 text-sm uppercase hover:border-b cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={(event) => handleNavLinkClick(event, "contact")}
              className="ml-10 text-sm uppercase hover:border-b cursor-pointer"
            >
              Contact
            </a>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div
              onClick={handleNav}
              className="flex w-full items-center justify-between"
            >
              <Image src="/assets/logo.png" alt="" width="70" height="35" />
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&apos;s build something legendary together.
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <li
                className="py-4 text-sm"
                onClick={(event) => handleMobileNavLinkClick(event, "home")}
              >
                Home
              </li>
              <li
                className="py-4 text-sm"
                onClick={(event) => handleMobileNavLinkClick(event, "about")}
              >
                About
              </li>
              <li
                className="py-4 text-sm"
                onClick={(event) => handleMobileNavLinkClick(event, "skills")}
              >
                Skills
              </li>
              <li
                className="py-4 text-sm"
                onClick={(event) => handleMobileNavLinkClick(event, "projects")}
              >
                Projects
              </li>
              <li
                className="py-4 text-sm"
                onClick={(event) => handleMobileNavLinkClick(event, "contact")}
              >
                Contact
              </li>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s connect!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://www.linkedin.com/in/ben-rozen/">
                    <FaLinkedin />
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <Link href="https://github.com/benroz3">
                    <FaGithub />
                  </Link>
                </div>
                <a
                  href="/assets/Ben_Rozen_Resume.pdf"
                  download
                  className="flex items-center rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  Resume
                  <RiPagesLine />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
