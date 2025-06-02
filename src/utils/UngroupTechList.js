export default function UngroupTechList(projectTech) {
  const techList = [];
  Object.entries(projectTech).forEach(([category, techs]) => {
    techs.forEach((tech) => {
      if (!techList.includes(tech)) {
        techList.push(tech);
      }
    });
  });
  // Sort each category's techs alphabetically
  techList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return techList;
}
