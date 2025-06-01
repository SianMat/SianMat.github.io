import ProjectList from "../components/ProjectList";

export default function ProjectPage() {
  return (
    <div className={`container py-5 projects`}>
      <h1 className="display-4 fw-bold mb-5 text-primary">Projects</h1>
      <ProjectList />
    </div>
  );
}
