import { Projects } from "../utils/Projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <div className="row g-4 justify-content-center">
      {Projects.map((project, i) => (
        <div className="col-auto" key={`project=${i}`}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
