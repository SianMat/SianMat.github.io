import HeroImage from "../../assets/images/hero-image.webp";
import { myInfo } from "../../utils/MyInfo";
import Hero from "../Hero";

export default function HomePageHero() {
  return (
    <Hero
      title={`${myInfo.firstname} ${myInfo.surname}`}
      lead={myInfo.tagLine}
      image={{ src: HeroImage, alt: "Sian Matthews" }}
    >
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
    </Hero>
  );
}
