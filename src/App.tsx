import React from "react";
import { Route, Routes } from "react-router-dom";

// Styles
// import GlobalStyles from './components/global-styles/GlobalStyles';
import "assets/styles/reset.css";
import "assets/styles/_common.scss";

// Components
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import HomeView from "views/HomeView";
import LibrariesView from "views/LibrariesView";
import LibraryDetailView from "views/LibraryDetailView";
import ProjectsView from "views/ProjectsView";
import ErrorView from "views/ErrorView";
import MainLayout from "layout/MainLayOut";

function App() {
  return (
    // <GlobalStyles>
    <div className="App">
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path={process.env.PUBLIC_URL} element={<HomeView/>}/>
          <Route path={`${process.env.PUBLIC_URL}/projects`} element={<ProjectsView/>}/>
          <Route path={`${process.env.PUBLIC_URL}/libraries`} element={<LibrariesView/>}/>
          <Route path={`${process.env.PUBLIC_URL}/libraries/:libraryId`} element={<LibraryDetailView/>}/>
        </Route>
        <Route path="*" element={<ErrorView/>}/>
      </Routes>
    </div>
    // </GlobalStyles>
  );
}

export default App;
