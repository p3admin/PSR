"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { projects, type TabKey } from "../data";
import { t, type Lang } from "../translations";
import shared from "../styles/shared.module.css";
import styles from "./Projects.module.css";

interface ProjectsProps {
  lang: Lang;
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export default function Projects({ lang, activeTab, onTabChange }: ProjectsProps) {
  const tr = t[lang];
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

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
    <section id="projects" className={`${shared.section} ${shared.sectionGap} ${styles.projectsSection}`}>
      <div>
        <h2 className={`${shared.sectionTitle} animate-up`}>{tr.projectsTitle}</h2>
        <p className={`${styles.projectsSubtitle} animate-up`}>{tr.projectsSubtitle}</p>
      </div>
      <div className={`${styles.projectTabs} animate-up`}>
        {tr.projectTabs.map(({ key, label }) => (
          <button
            key={key}
            className={`${styles.projectTab}${activeTab === key ? " " + styles.active : ""}`}
            onClick={() => onTabChange(key)}
          >
            {label}
          </button>
        ))}
      </div>
      {currentProject && (
        <div key={`${activeTab}-${projectIndex}`} className="animate-on-mount">
          <div className={styles.projectsContent}>
            <div className={styles.projectImage}>
              <Image
                src={currentImages[imageIndex]}
                alt={currentProject.name[lang]}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              {currentImages.length > 1 && (
                <div className={styles.projectNavBtns}>
                  <button className={styles.projectNavBtn} onClick={handlePrev} aria-label={tr.prevImage}>
                    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }} aria-hidden="true">
                      <path d="M1.03311 1.08753L11.0331 10.5875L1.03311 20.0875" stroke="white" strokeWidth="3" />
                    </svg>
                  </button>
                  <button className={styles.projectNavBtn} onClick={handleNext} aria-label={tr.nextImage}>
                    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M1.03311 1.08753L11.0331 10.5875L1.03311 20.0875" stroke="white" strokeWidth="3" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.projectInfoTop}>
                <div>
                  <h3 className={styles.projectName}>
                    {currentProject.url ? (
                      <a href={currentProject.url} target="_blank" rel="noopener noreferrer" className={styles.projectNameLink}>
                        {currentProject.name[lang]}
                      </a>
                    ) : (
                      currentProject.name[lang]
                    )}
                  </h3>
                  <p className={styles.projectCategory}>{currentProject.category[lang]}</p>
                </div>
                <p className={styles.projectDescription}>{currentProject.description[lang]}</p>
              </div>
              {filteredProjects.length > 1 && (
                <button className={shared.btnOutline} onClick={handleNextProject}>
                  {tr.nextProject}
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none" aria-hidden="true">
                    <path d="M0.344381 0.362547L6.66017 6.36255L0.344381 12.3625" stroke="white" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
