import { Link } from "react-router";
import BadgeList from "./BadgeList";
import UngroupTechList from "../utils/UngroupTechList";

const importImage = (fileName, name) => {
  try {
    return new URL(`../assets/images/${fileName}/${name}`, import.meta.url)
      .href;
  } catch {
    return null;
  }
};

export default function ProjectCard({
  project,
  maxWidth = 350,
  imageHeight = 200,
  displayImage = true,
  displayText = true,
}) {
  const techList = UngroupTechList(project.tech);

  if (project) {
    return (
      <div className="card h-100" style={{ maxWidth: `${maxWidth}px` }}>
        {displayImage && project.image && (
          <img
            src={importImage(project.fileName, project.image)}
            className="card-img-top border-bottom"
            alt={`${project.title} screenshot`}
            style={{ height: `${imageHeight}px` }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <BadgeList techList={techList} />
          {displayText && <p className="card-text">{project.text}</p>}
        </div>

        <div className="card-footer bg-light border-0 pt-0">
          {project.buttons.map((button, j) => (
            <a
              key={`button-${j}`}
              href={button.link}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              {button.text}
            </a>
          ))}
          {project.moreInfo && (
            <Link
              key={`button-more-info`}
              to={`/projects/${project.title}`}
              className="btn btn-sm btn-primary"
            >
              More Info
            </Link>
          )}
        </div>
      </div>
    );
  }
  return <></>;
}
