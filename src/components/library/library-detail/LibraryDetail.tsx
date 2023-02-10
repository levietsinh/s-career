import React, { useEffect, useState } from "react";

//Data
import {data as library1} from "data/libraries/web";
import {data as library2} from "data/libraries/html";
import {data as library3} from "data/libraries/css";
import {data as library4} from "data/libraries/javascript";
import {data as library5} from "data/libraries/typescript";
import {data as library6} from "data/libraries/reactjs";
import {data as library7} from "data/libraries/vuejs";
import {data as library8} from "data/libraries/angular";
import {data as library9} from "data/libraries/nodejs";

//Styles
import styles from "./LibraryDetail.module.scss";
import { useParams } from "react-router-dom";

interface IReference {
  id: number,
  name: string,
  link: string,
}
interface ILibrary {
  id: number,
  question: string,
  answer: string,
}
interface IData {
  name: string,
  references?: IReference[],
  library: ILibrary[],
}

const LibraryDetail = () => {
  const {libraryId} = useParams();
  const [data, setData] = useState<IData>(library1);

  const handleGetData = () => {
    switch(libraryId) {
      case "2": return setData(library2);
      case "3": return setData(library3);
      case "4": return setData(library4);
      case "5": return setData(library5);
      case "6": return setData(library6);
      case "7": return setData(library7);
      case "8": return setData(library8);
      case "9": return setData(library9);
      default: return setData(library1);
    }
  };
  const handleToggleQuestion = (id: number) => {
    const questionEl = document.getElementById(`question-${id}`);
    const isShow = questionEl?.classList.contains("show");
    isShow
      ? questionEl?.classList.remove("show")
      : questionEl?.classList.add("show");
  };

  useEffect(() => {
    handleGetData();
  }, [libraryId]);

  return (
    <div className={styles["library-detail"]}>
      <h2>{data.name}</h2>
      <div className={styles["library-container"]}>
        <ul className={styles["library-detail__list"]}>
          {
            data.library.length ? data.library.map((item: ILibrary) => (
              <li key={item.id} id={`question-${item.id}`} className={styles["library-detail__item"]}>
              <div className={styles["question"]}>
                {item.question}
                <span
                  className={styles["question-open"]}
                  onClick={() => handleToggleQuestion(item.id)}
                >
                  +
                </span>
                <span
                  className={styles["question-close"]}
                  onClick={() => handleToggleQuestion(item.id)}
                >
                  -
                </span>
              </div>
              <div className={styles["answer"]} dangerouslySetInnerHTML={{__html: item.answer}}/>            
            </li>
            )) : "No question"
          }
        </ul>
        <div className={styles["references"]}>
          <h3>References</h3>
          {
            data.references?.length ? 
            data.references?.map((item: IReference) => (
              <a href={item.link} target="_blank" key={item.id}>{item.name}</a>
            )) : "No reference."
          }
        </div>
      </div>
    </div>
  );
};

export default LibraryDetail;
