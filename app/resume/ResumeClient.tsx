"use client";

import React, { useEffect, useState } from "react";
import SlideShow from "@/components/slideShow";
import CardBoard from "@/components/cardBoard";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Language from "@/components/language";
import Skills from "@/components/skills";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchResumeData } from "@/store/resumeSlice";
import { Loading } from "@/components/loading";

declare global {
  interface Window {
    Email: any;
  }
}

export const resumeClient: React.FC = () => {
  const dispatch = useAppDispatch();
  const [showLoading, setShowLoading] = useState(true);
  const {
    education,
    experience,
    language,
    skills,
    slideshow,
    cardSkills,
    loading,
    error,
  } = useAppSelector((state) => state.resume);

  useEffect(() => {
    dispatch(fetchResumeData());

    window.scrollTo(0, 0);
    // Show loader for minimum 3 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <>
      <article className="resume active">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
        {showLoading ? (
          <Loading />
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <>
            <Education data={education} />
            <Experience data={experience} />
            <Language data={language} />
            <Skills data={skills} />
            <SlideShow data={slideshow} />
            <CardBoard data={cardSkills} />
          </>
        )}
      </article>
    </>
  );
};
export default resumeClient;
