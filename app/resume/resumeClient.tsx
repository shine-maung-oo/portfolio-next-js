"use client";

import React, { useEffect } from "react";
import SlideShow from "@/components/slideShow";
import CardBoard from "@/components/cardBoard";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Language from "@/components/language";
import Skills from "@/components/skills";
import educationData from "@/public/data/educationData.json";
import experienceData from "@/public/data/experienceData.json";
import languageData from "@/public/data/languageData.json";
import skillsData from "@/public/data/skillsData.json";
import slideShowData from "@/public/data/slideshowData.json";
import cardSkillsData from "@/public/data/cardSkillsData.json";

declare global {
  interface Window {
    Email: any;
  }
}

export const resumeClient: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <article className="resume active">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
        <Education data={educationData} />
        <Experience data={experienceData} />
        <Language data={languageData} />
        <Skills data={skillsData} />
        <SlideShow data={slideShowData} />
        <CardBoard data={cardSkillsData}/>
      </article>
    </>
  );
};
export default resumeClient;
