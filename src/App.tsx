import React from "react";
// import GlobalStyles from './components/global-styles/GlobalStyles';
import "assets/styles/reset.css";
import "assets/styles/_common.scss";
import Header from "components/header/Header";
import Home from "components/home/Home";
import Categories from "components/categories/Categories";
import Footer from "components/footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <GlobalStyles>
    <div className="App">
      <Header />
      <Routes>
        <Route path={process.env.PUBLIC_URL} element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
    // </GlobalStyles>
  );
}

export default App;
