import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Hooks
import useDetectMobile from "hooks/DetectMobile";

// Styles
import styles from "./Header.module.scss";
import clsx from "clsx";
import logoSVG from "assets/images/logo-red.svg";

const Header = () => {
  const [isScroll, setIsScroll] = useState(0);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const isMobile = useDetectMobile();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(process.env.PUBLIC_URL + path);
    setIsShowMenu(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScroll(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isShowMenu ? "hidden" : "";
  }, [isShowMenu]);

  return (
    <>
      {isMobile ? (
        <header
          className={styles["header-mobile"]}
          style={{ height: isShowMenu ? "" : 0 }}
        >
          <div className={styles["header-mobile__top"]}>
            <div
              className={styles["header-mobile__logo"]}
              onClick={() => handleNavigate("")}
            >
              <img
                src={require("assets/images/logo-mobile.png")}
                alt="Mobile Logo"
              />
            </div>
            <button
              className={clsx(
                styles["menu-trigger"],
                isShowMenu ? styles["active"] : ""
              )}
              onClick={() => setIsShowMenu(!isShowMenu)}
              title="Hamburger"
              type="button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div
            className={clsx(
              styles["header-mobile__bottom"],
              isShowMenu ? styles["show"] : ""
            )}
          >
            <div className={styles["logo"]}>
              <img src={logoSVG} alt="S Logo" />
            </div>
            <nav className={clsx(styles["header-mobile__nav"])}>
              <ul>
                <li
                  onClick={() => handleNavigate("")}
                  style={{ ["--i" as string]: 1 }}
                >
                  Home
                </li>
                <li
                  onClick={() => handleNavigate("/libraries")}
                  style={{ ["--i" as string]: 2 }}
                >
                  Libraries
                </li>
                <li
                  onClick={() => handleNavigate("/projects")}
                  style={{ ["--i" as string]: 3 }}
                >
                  Projects
                </li>
                <li style={{ ["--i" as string]: 4 }}>
                  <img
                    className={styles["header-mode"]}
                    src={require(`assets/images/dark-mode.png`)}
                    alt="Dark Mode"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </header>
      ) : (
        <header
          className={clsx(
            styles["header"],
            isScroll > 0 ? styles["header-scroll"] : ""
          )}
        >
          <div className={styles["header-logo"]}>
            <img
              src={require(`assets/images/s-logo${
                isScroll > 0 ? "" : "-red"
              }.png`)}
              alt="S Logo"
              onClick={() => handleNavigate("")}
            />
          </div>
          <nav>
            <ul>
              <li onClick={() => handleNavigate("")}>Home</li>
              <li onClick={() => handleNavigate("/libraries")}>Libraries</li>
              <li onClick={() => handleNavigate("/projects")}>Projects</li>
              <li>
                <img
                  className={styles["header-mode"]}
                  src={require(`assets/images/dark-mode${
                    isScroll ? "" : "-red"
                  }.png`)}
                  alt="Dark Mode"
                />
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
