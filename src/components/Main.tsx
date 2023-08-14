import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Ben</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Fullstack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a fullstack developer specialized with designing, developing,
            and maintaining web applications. Dedicated to delivering
            high-quality solutions that enhance user experiences and drive
            business success.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://www.linkedin.com/in/ben-rozen/">
                <FaLinkedin />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="https://github.com/benroz3">
                <FaGithub />
              </Link>
            </div>
            <a
              href="/assets/Ben_Rozen_Resume.pdf"
              download
              className="flex items-center rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              Resume
              <RiPagesLine />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
