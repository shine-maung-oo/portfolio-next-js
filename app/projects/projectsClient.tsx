"use client";

import React, { useEffect, useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { fetchProjects, Project } from "@/api/project";

declare global {
  interface Window {
    Email: any;
  }
}

const ProjectsClient: React.FC = () => {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjectData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <article className="portfolio active">
        <header>
          <h2 className="h2 article-title">Projects</h2>
        </header>

        <section className="projects">
          <ul className="project-list">
            {projectData.map((project: Project, index: number) => (
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
      </article>
    </>
  );
};
export default ProjectsClient;
