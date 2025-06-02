import { myInfo } from "../../utils/MyInfo";
import { getTechList } from "../../utils/Projects";
import TechList from "../TechList";

export default function About() {
  return (
    <section className="container py-5 about-me">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h2 className="mb-4">Hi, I’m {myInfo.firstname}</h2>
          <p className="lead">{myInfo.lead}</p>
          <p>{myInfo.about}</p>
          <h5 className="">Tech I Use</h5>
          <TechList techList={getTechList()} />
        </div>
      </div>
    </section>
  );
}
