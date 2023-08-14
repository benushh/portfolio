import ProjectItem from "./ProjectItem";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text=[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectItem project={project} key={project.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
