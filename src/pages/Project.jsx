import { Link, useParams } from "react-router";
import { Projects } from "../utils/Projects";
import UngroupTechList from "../utils/UngroupTechList";
import BadgeList from "../components/BadgeList";
import Hero from "../components/Hero";

const importImage = (fileName, name) => {
  try {
    return new URL(`../assets/images/${fileName}/${name}`, import.meta.url)
      .href;
  } catch {
    return null;
  }
};

export default function Project() {
  const { projectTitle } = useParams();
  const project = Projects.find((p) => p.title == projectTitle);
  const techList = UngroupTechList(project.tech);
  if (project) {
    const HeroImage = importImage(project.fileName, project.image);
    return (
      <div className={`container py-5 projects`}>
        <nav
          style={{ "--bs-breadcrumb-divider": "'>'" }}
          aria-label="breadcrumb"
        >
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {projectTitle}
            </li>
          </ol>
        </nav>
        <Hero
          title={projectTitle}
          lead={project.moreInfo || project.text}
          image={{ src: HeroImage, alt: `hero image for ${project.title}` }}
        ></Hero>
        <section className="container">
          {/* Feature Breakdown */}
          {project.features && (
            <div className="row mt-4">
              <div className="col">
                <h2 className="mb-4">Key Features</h2>
                <ul className="list-unstyled">
                  {project.features.map((feature, i) => (
                    <li className="mb-1" key={`featire-${i}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <BadgeList techList={techList} />

          {/* Screenshot Row */}
          {project.screenshots && (
            <div className="row my-5 d-flex justify-content-center">
              <h2 className="mb-4">Screenshots</h2>
              {project.screenshots.map((s, i) => (
                <div className="col-md-6 col-lg-4 mb-4" key={`image-${i}`}>
                  <figure className="figure">
                    <img
                      src={importImage(project.fileName, s.src)}
                      style={{ height: "auto", width: "100%", maxWidth: 600 }}
                      className="figure-img img-fluid rounded border"
                      alt={s.alt}
                    />
                    <figcaption className="figure-caption">
                      {s.caption}
                    </figcaption>
                  </figure>
                  {s.link && (
                    <a
                      key={`link-${i}`}
                      href={s.link}
                      target="_blank"
                      className="btn btn-primary"
                    >
                      View Online
                    </a>
                  )}
                  {s.gitHubLink && (
                    <a
                      key={`github-link-${i}`}
                      href={s.gitHubLink}
                      target="_blank"
                      className="btn btn-primary"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Extra Rendered Content */}
          {project.extraContent && (
            <section className="container mt-5">{project.extraContent}</section>
          )}

          {/* Buttons */}
          {project.buttons.map((button, j) => (
            <a
              key={`button-${j}`}
              href={button.link}
              target="_blank"
              className="btn btn-primary"
            >
              {button.text}
            </a>
          ))}
        </section>
      </div>
    );
  }
  return <div>Details not found. Please try again</div>;
}
