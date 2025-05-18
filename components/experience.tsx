import React from "react";
import { IoBookOutline } from "react-icons/io5";

type Role = {
  title: string;
  duration: string;
  responsibilities: string[];
};

type ExperienceItem = {
  company: string;
  duration: string;
  roles?: Role[];
  description?: string;
};

type ExperienceProps = {
  data: ExperienceItem[];
};

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <>
      <section className="timeline experience">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {data.map((exp: ExperienceItem, idx: number) => (
            <li className="timeline-item" key={idx}>
              <h4 className="h4 timeline-item-title">{exp.company}</h4>
              <span>{exp.duration}</span>

              {exp.roles ? (
                <section className="skill">
                  <ol className="timeline-list">
                    {exp.roles.map((role: Role, rIdx: number) => (
                      <li className="timeline-item" key={rIdx}>
                        <h4 className="h4 timeline-item-title">
                          {role.title} <span> {role.duration} </span>
                        </h4>
                        <ul className="timeline-text">
                          {role.responsibilities.map((point, pIdx) => (
                            <li key={pIdx}>{point}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ol>
                </section>
              ) : (
                <p className="timeline-text">{exp.description}</p>
              )}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Experience;
