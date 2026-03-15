"use client";
import { useState, useEffect } from "react";
import { projects, type TabKey } from "../data";
import { t, type Lang } from "../translations";

interface ProjectsProps {
  lang: Lang;
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export default function Projects({ lang, activeTab, onTabChange }: ProjectsProps) {
  const tr = t[lang];
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // Reset indexes when tab or language changes
  useEffect(() => {
    setProjectIndex(0);
    setImageIndex(0);
  }, [activeTab, lang]);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.tabKey === activeTab);

  const currentProject = filteredProjects[projectIndex] ?? filteredProjects[0];
  const currentImages = currentProject?.images ?? [];

  const handlePrev = () =>
    setImageIndex((i) => (i - 1 + currentImages.length) % currentImages.length);
  const handleNext = () =>
    setImageIndex((i) => (i + 1) % currentImages.length);
  const handleNextProject = () => {
    setProjectIndex((i) => (i + 1) % filteredProjects.length);
    setImageIndex(0);
  };

  return (
    <section id="projects" className="section section-gap projects-section">
      <div>
        <h2 className="section-title animate-up">{tr.projectsTitle}</h2>
        <p className="projects-subtitle animate-up">{tr.projectsSubtitle}</p>
      </div>
      <div className="project-tabs animate-up">
        {tr.projectTabs.map(({ key, label }) => (
          <button
            key={key}
            className={`project-tab${activeTab === key ? " active" : ""}`}
            onClick={() => onTabChange(key)}
          >
            {label}
          </button>
        ))}
      </div>
      {currentProject && (
        <div
          key={`${activeTab}-${projectIndex}`}
          className="projects-content animate-on-mount"
        >
          <div className="project-image">
            <img
              src={currentImages[imageIndex]}
              alt={currentProject.name[lang]}
            />
            {currentImages.length > 1 && (
              <div className="project-nav-btns">
                <button
                  className="project-nav-btn"
                  onClick={handlePrev}
                  aria-label={tr.prevImage}
                >
                  <svg
                    width="14"
                    height="22"
                    viewBox="0 0 14 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: "scaleX(-1)" }}
                    aria-hidden="true"
                  >
                    <path
                      d="M1.03311 1.08753L11.0331 10.5875L1.03311 20.0875"
                      stroke="white"
                      strokeWidth="3"
                    />
                  </svg>
                </button>
                <button
                  className="project-nav-btn"
                  onClick={handleNext}
                  aria-label={tr.nextImage}
                >
                  <svg
                    width="14"
                    height="22"
                    viewBox="0 0 14 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M1.03311 1.08753L11.0331 10.5875L1.03311 20.0875"
                      stroke="white"
                      strokeWidth="3"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
          <div className="project-info">
            <div className="project-info-top">
              <div>
                <h3 className="project-name">{currentProject.name[lang]}</h3>
                <p className="project-category">{currentProject.category[lang]}</p>
              </div>
              <p className="project-description">
                {currentProject.description[lang]}
              </p>
            </div>
            {filteredProjects.length > 1 && (
              <button className="btn-outline" onClick={handleNextProject}>
                {tr.nextProject}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0.344381 0.362547L6.66017 6.36255L0.344381 12.3625"
                    stroke="white"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
