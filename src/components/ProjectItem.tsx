import { ProjectType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const ProjectItem: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={project.img}
        alt=""
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {project.title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{project.type}</p>
        <p className="pb-4 pt-2 text-white text-center">{project.tech}</p>
        <Link href={project.link}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Check it out!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
