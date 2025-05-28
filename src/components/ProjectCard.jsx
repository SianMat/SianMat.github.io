const importImage = (name) => {
  try {
    return new URL(`../assets/${name}`, import.meta.url).href;
  } catch {
    return null;
  }
};

export default function ProjectCard({ project, i }) {
  return (
    <div className="col-auto mb-4">
      <div className="card h-100">
        {project.image && (
          <img
            src={importImage(project.image)}
            className="card-img-top"
            alt={`${project.title} screenshot`}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
            {project.tech.map((t) => {
              return (
                <span key={`${t}-${i}`} className="badge bg-secondary">
                  {t}
                </span>
              );
            })}
          </div>
          <p className="card-text">{project.text}</p>
          {project.buttons.map((button, j) => (
            <a
              key={`button-${i}-${j}`}
              href={button.link}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
