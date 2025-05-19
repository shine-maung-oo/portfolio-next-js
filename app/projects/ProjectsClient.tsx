"use client";

import React, { useEffect, useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchProjects } from "@/store/projectSlice";
import { Loading } from "@/components/loading";
const ProjectsClient: React.FC = () => {
  const dispatch = useAppDispatch();
  const { projects, loading, error } = useAppSelector(
    (state) => state.projects
  );
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProjects());

    window.scrollTo(0, 0);
    // Show loader for minimum 3 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>
      {showLoading ? (
        <Loading />
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <>
          <section className="projects">
            <ul className="project-list">
              {projects.map((project, index) => (
                <li className="project-item active" key={index}>
                  <a href={project.url} target="_blank">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <IoArrowForwardOutline />
                      </div>
                      <img
                        alt={project.title}
                        src={project.image}
                        loading="lazy"
                      />
                    </figure>
                    <h3 className="project-title">{project.title}</h3>
                    <span>{project.languages}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default ProjectsClient;
