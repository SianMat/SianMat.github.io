import HeroImage from "../assets/images/hero-image.webp";
import { myInfo } from "../utils/MyInfo";

export default function Hero() {
  return (
    <section className={`container py-5 hero`}>
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold text-primary">Sian Matthews</h1>
          <p className="lead">{myInfo.tagLine}</p>
          <div className="mt-4 d-flex gap-3 flex-column flex-md-row">
            <a href="/projects" className="btn btn-primary btn-lg">
              View My Projects
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-outline-primary btn-lg"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <div className="hero-image-wrapper">
            <img src={HeroImage} alt="Sian Matthews" className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
