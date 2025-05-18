import React from "react";
import { IoBookOutline } from "react-icons/io5";

type EducationItem = {
  title: string;
  year: string;
  description: string;
};

type EducationProps = {
  data: EducationItem[];
};

const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <>
      <section className="timeline education">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>

          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {data.map((edu: EducationItem, index: number) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{edu.title}</h4>
              <span>{edu.year}</span>
              <p className="timeline-text">{edu.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Education;
