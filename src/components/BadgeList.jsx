export default function BadgeList({ techList }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2 my-3">
      {techList.map((tech, i) => (
        <span key={`${tech}-${i}`} className="badge bg-secondary">
          {tech}
        </span>
      ))}
    </div>
  );
}
