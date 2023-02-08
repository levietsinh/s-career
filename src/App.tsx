import React from "react";
import { Route, Routes } from "react-router-dom";

// Styles
// import GlobalStyles from './components/global-styles/GlobalStyles';
import "assets/styles/reset.css";
import "assets/styles/_common.scss";

// Components
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Home from "components/home/Home";
import Library from "components/library/Library";
import LibraryDetail from "components/library/library-detail/LibraryDetail";

function App() {
  return (
    // <GlobalStyles>
    <div className="App">
      <Header />
      <Routes>
        <Route path={process.env.PUBLIC_URL} element={<Home/>}/>
        <Route path={`${process.env.PUBLIC_URL}/libraries`} element={<Library/>}/>
        <Route path={`${process.env.PUBLIC_URL}/libraries/:libraryId`} element={<LibraryDetail/>}/>
      </Routes>
      <Footer />
    </div>
    // </GlobalStyles>
  );
}

export default App;
