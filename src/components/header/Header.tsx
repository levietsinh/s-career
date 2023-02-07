import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Hooks
import useDetectMobile from "hooks/DetectMobile";

// Styles
import styles from "./Header.module.scss";
import clsx from "clsx";

const Header = () => {
  const [isScroll, setIsScroll] = useState(0);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const isMobile = useDetectMobile();
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate(process.env.PUBLIC_URL);
  };

  const handleGoToLibraries = () => {
    navigate(`${process.env.PUBLIC_URL}/libraries`)
  }

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
        <header className={styles["header-mobile"]}>
          <div className={styles["header-mobile__logo"]}>
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
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav
            className={clsx(
              styles["header-mobile__nav"],
              isShowMenu ? styles["show"] : ""
            )}
          >
            <ul>
              <li onClick={handleGoToHome}>Home</li>
              <li onClick={handleGoToLibraries}>Libraries</li>
              <li>
                <img
                  className={styles["header-mode"]}
                  src={require(`assets/images/dark-mode.png`)}
                  alt="Dark Mode"
                />
              </li>
            </ul>
          </nav>
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
              src={require(`assets/images/logo${
                isScroll > 0 ? "-red" : ""
              }.svg`)}
              alt="S Logo"
              onClick={handleGoToHome}
            />
          </div>
          <nav>
            <ul>
              <li onClick={handleGoToHome}>Home</li>
              <li onClick={handleGoToLibraries}>Libraries</li>
              <li>
                <img
                  className={styles["header-mode"]}
                  src={require(`assets/images/dark-mode${
                    isScroll ? "" : "-white"
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
