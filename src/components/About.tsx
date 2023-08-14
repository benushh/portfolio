import Image from "next/image";
import aboutImg from '../../public/assets/about.jpg'

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a dedicated Fullstack Developer with a strong passion for
            crafting dynamic and user-centric web solutions. As a seasoned
            professional, I bring a collaborative mindset to every project,
            blending leadership and teamwork to achieve outstanding results. My
            ability to adapt quickly, paired with excellent communication
            skills, empowers me to thrive both independently and within diverse
            teams.
          </p>
          <p className="py-2 text-gray-600">
            I possess a rich background as a former Military Officer. This
            experience has nurtured my strong work ethics, analytical thinking,
            and responsibility-taking.
          </p>
          <p className="py-2 text-gray-600">
            Beyond coding, I find joy in playing the guitar and playing
            basketball. With my diverse skill set, commitment to excellence, and
            passion for continuous learning, I am poised to contribute
            effectively to innovative projects while embracing growth and
            adaptation.
          </p>
          <br />
          <p className="py-2 text-[#5651e5] cursor-pointer">
            Check out my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={aboutImg}
            alt=""
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
