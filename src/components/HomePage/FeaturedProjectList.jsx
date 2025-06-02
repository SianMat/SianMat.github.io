import { Projects } from "../../utils/Projects";
import ProjectCard from "../ProjectCard";

export default function FeaturedProjectList() {
  const mainProject = Projects.find((p) => p.main);
  const featuredProjects = Projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className={`container py-5 projects`}>
      <h2 className="text-center mb-5">Featured Projects</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <div className="row d-flex align-content-stretch justify-content-center">
            <div className="col-12 mb-4">
              {mainProject && (
                <ProjectCard
                  key={`project-main`}
                  project={mainProject}
                  maxWidth={600}
                  imageHeight={400}
                />
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row d-flex justify-content-center h-100">
            {featuredProjects.map((project, i) => (
              <div
                className="col-12 col-md-6 mb-4 d-flex justify-content-center"
                key={`project=${i}`}
              >
                <ProjectCard
                  project={project}
                  maxWidth={300}
                  imageHeight={0}
                  displayImage={false}
                  displayText={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
