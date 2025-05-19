"use client";

import Skills from "@/components/skills";
import SlideShow from "@/components/slideShow";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchAboutData } from "@/store/aboutSlice";
import { Loading } from "@/components/loading";
declare global {
  interface Window {
    Email: any;
  }
}

export default function aboutClient() {
  const dispatch = useAppDispatch();
  const { aboutme, skills, slideshow, loading, error } = useAppSelector(
    (state) => state.about
  );
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchAboutData());
    window.scrollTo(0, 0);

    // Show loader for minimum 3 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2500);
  }, [dispatch]);
  return (
    <>
      <article className="about active">
        {showLoading ? (
          <Loading />
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <>
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
              {aboutme.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
              <p>
                Connect with me on{" "}
                <a
                  href={aboutme.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-link"
                >
                  LinkedIn
                </a>{" "}
                or{" "}
                <a
                  href={`mailto:${aboutme.links.email}`}
                  className="about-link"
                >
                  {aboutme.links.email}
                </a>
                .
              </p>
            </section>

            <Skills data={skills} />
            <SlideShow data={slideshow} />
          </>
        )}
      </article>
    </>
  );
}
