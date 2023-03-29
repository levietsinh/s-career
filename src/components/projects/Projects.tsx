import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Projects.module.scss";
import SButton from "components/common/s-button/SButton";
import { projects } from "data/projects";

interface IProject {
  thumbnail: string;
  url: string,
  title: string;
  gitLink: string;
  gitTitle: string;
  technical: string;
}
const Projects = () => {
  const techTypes = [
    {
      title: "VueJs",
      type: "vue",
    },
    {
      title: "ReactJs",
      type: "react",
    },
  ];

  const [activeType, setActiveType] = useState("vue");

  return (
    <div className={clsx(styles["projects"], "container")}>
      <h1 className={styles["projects__title"]}>Projects</h1>
      <div className={styles["projects__type"]}>
        {techTypes.map((item, index) => (
          <SButton
            key={index}
            name={item.title}
            onClick={() => setActiveType(item.type)}
            isActive={activeType === item.type}
          />
        ))}
      </div>
      <div className={styles["projects__list"]}>
        <ul className={styles["project"]}>
          {projects[activeType as keyof typeof projects].map(
            (item: IProject, index: number) => (
              <li className={styles["project__item"]} key={index}>
                <div className={styles["project__image"]}>
                  <img src={item.thumbnail} alt="Project Image" />
                </div>
                <div className={styles["project__title"]}>
                  <a href={item.url} target="_blank">
                    {item.title}
                  </a>
                </div>
                <ul>
                  <li>
                    Git:{" "}
                    <a href={item.gitLink} target="_blank">
                      {item.gitTitle}
                    </a>
                  </li>
                  <li>Technical: {item.technical}</li>
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
      <a href="https://codelearn.io/sharing/7-meo-va-thu-thuat-trong-javascript">
        Các tips JS nên biết
      </a>
      <a href="https://topdev.vn/blog/9-du-an-moi-nhat-giup-ban-thanh-trum-front-end-trong-nam-2020/">
        Các dự án nên làm
      </a>
    </div>
  );
};

export default Projects;
