import BadgeList from "./BadgeList";

export default function TechList({ techList: groupedTechList }) {
  return (
    <div className="mt-3">
      {Object.entries(groupedTechList).map(([category, techs]) => (
        <div key={category} className="mb-3">
          <h6 className="text-center text-primary text-uppercase fw-bold">
            {category}
          </h6>
          <BadgeList techList={techs} />
        </div>
      ))}
    </div>
  );
}
