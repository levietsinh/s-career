import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Projects.module.scss";
import SButton from "components/common/s-button/SButton";
import {projects} from "data/projects";

interface IProject {
  thumbnail: string,
  title: string,
  git: string,
  technical: string
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
        <ul>
          {
            projects["vue"].map((item: IProject, index: number) => (
            <li className={styles["project"]} key={index}>
              <div className={styles["project__image"]}>
                <img
                  src="https://mevn-public.s3-ap-southeast-1.amazonaws.com/marketenterprise.vn/wp-images/2021/04/06170614/vuejs.png"
                  alt="Project Image"
                />
              </div>
              <div className={styles["project__title"]}>Title</div>
              <div>Git: <span></span></div>
            </li>
            ))
          }
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
