import React from "react";

type SkillItem = {
  title: string;
  percentage: number;
};

interface CardBoardProps {
  data: SkillItem[];
}

const CardBoard: React.FC<CardBoardProps> = ({ data }) => {
  return (
    <ul className="skills-list content-card">
      {data.map((skill, index) => (
        <li className="skills-item" key={index}>
          <div className="title-wrapper">
            <h5 className="h5">{skill.title}</h5>
            <data value={skill.percentage}>{skill.percentage}%</data>
          </div>
          <div className="skill-progress-bg">
            <div
              className="skill-progress-fill"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardBoard;
