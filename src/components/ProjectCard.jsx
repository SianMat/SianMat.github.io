import BadgeList from "./BadgeList";

const importImage = (name) => {
  try {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
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
  const techList = [];
  Object.entries(project.tech).forEach(([category, techs]) => {
    techs.forEach((tech) => {
      if (!techList.includes(tech)) {
        techList.push(tech);
      }
    });
  });
  // Sort each category's techs alphabetically
  techList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  if (project) {
    return (
      <div className="card h-100" style={{ maxWidth: `${maxWidth}px` }}>
        {displayImage && project.image && (
          <img
            src={importImage(project.image)}
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
        </div>
      </div>
    );
  }
  return <></>;
}
