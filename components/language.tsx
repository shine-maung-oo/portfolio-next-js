import React from "react";
import { IoBookOutline } from "react-icons/io5";

type LanguageItem = {
  title: string;
};

type LanguageProps = {
  data: LanguageItem[];
};

const Language: React.FC<LanguageProps> = ({ data }) => {
  return (
    <>
      <section className="timeline language">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>

          <h3 className="h3">Languages</h3>
        </div>

        <ol className="timeline-list">
          {data.map((item: LanguageItem, index: number) => (
            <li className="timeline-item" key={index}>
              <span> {item.title} </span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Language;
