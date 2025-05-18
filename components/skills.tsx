import React from "react";

type Skill = {
  title: string;
  description: string;
};

type SkillsProps = {
  data: Skill[];
};

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">Skills</h3>
      <ol className="timeline-list">
        {data.map((skill, index) => (
          <li className="timeline-item" key={index}>
            <h4 className="h4 timeline-item-title">{skill.title}</h4>
            <span>{skill.description}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Skills;
