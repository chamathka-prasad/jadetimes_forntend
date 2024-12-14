import Section from "../components/Section";

import teamMembers from "../api/teamMembers";

const Team = () => {
  return (
    <Section className="p-4">
      <h1 className="text-3xl text-center text-heading">Board of Directors</h1>
      <div className="flex gap-4 flex-wrap justify-center lg:gap-5 mt-4 lg:mb-1">
        {teamMembers.map((teamMember) => (
          <div className="p-4 bg-neutral-900 text-white flex flex-col pb-3 max-w-72 lg:p-0">
            <img
              src={teamMember.image}
              alt={teamMember.name}
              className="aspect-square"
            />
            <div className="flex flex-col gap-1 mt-4 lg:mt-3 lg:px-4 lg:pb-4">
              <div className="text-2xl">{teamMember.name}</div>
              <div className="text-accent text-lg lg:text-sm">{teamMember.role}</div>
              <div className="text-lg lg:text-xs">{teamMember.education.join(" | ")}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Team;
