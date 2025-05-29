import styles from "./HomePage.module.css";
import HeroImage from "../assets/hero-image.png";
import { Projects } from "../utils/Projects";
import ProjectCard from "./ProjectCard";
import Contact from "./Contact";
import Resume from "./CV";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className={`container py-5 ${styles.hero}`}>
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold text-primary">Sian Matthews</h1>
            <p className="lead">
              Full Stack Developer with Maths & Engineering Background
            </p>
            <div className="mt-4 d-flex gap-3 flex-column flex-md-row">
              <a href="/projects" className="btn btn-primary btn-lg">
                View My Projects
              </a>
              <Resume />
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <div className={styles.heroImageWrapper}>
              <img
                src={HeroImage}
                alt="Sian's work"
                className={`${styles.heroImage}`}
              />
              <div className={styles.heroOverlay}></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="mb-4">Hi, I’m Sian</h2>
            <p className="lead">
              With a First-Class MEng from Oxford University and over a decade
              of experience teaching mathematics and engineering, I bring
              analytical thinking, creativity, and precision to every project I
              take on.
            </p>
            <p>
              I'm passionate about solving problems - whether it’s developing
              custom web applications to streamline education workflows,
              building invoicing systems for freelancers, or creating tools that
              support my crochet pattern business. I’m equally at home writing a
              Blazor app or explaining algebra to a GCSE student.
            </p>
            <h5 className="">Tech I Use</h5>
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
              <span className="badge bg-secondary">C#</span>
              <span className="badge bg-secondary">Blazor</span>
              <span className="badge bg-secondary">React</span>
              <span className="badge bg-secondary">JavaScript</span>
              <span className="badge bg-secondary">SQL Server</span>
              <span className="badge bg-secondary">SQLite</span>
              <span className="badge bg-secondary">HTML/CSS</span>
              <span className="badge bg-secondary">Git</span>
              <span className="badge bg-secondary">Azure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`container py-5 ${styles.projects}`}>
        <h2 className="text-center mb-5">Featured Projects</h2>
        <div className="row g-4 justify-content-center">
          {Projects.map((project, i) => (
            <ProjectCard key={`project=${i}`} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-5 text-center">
        <h2 className="mb-4">Let’s Connect</h2>
        <p className="lead mb-4">
          Want to collaborate, commission a design, or ask a question? I’d love
          to hear from you.
        </p>
        {/* <a
          href="mailto:sianmatthews.uk@outlook.com"
          className="btn btn-lg btn-primary"
        >
          Contact Me
        </a> */}
        <Contact />
      </section>

      {/* Footer */}
      <footer className="py-4 mt-5 text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Sian Matthews</p>
      </footer>
    </>
  );
};

export default HomePage;
