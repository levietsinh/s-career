import React from 'react';
// import GlobalStyles from './components/global-styles/GlobalStyles';
import "assets/styles/reset.css";
import "assets/styles/_common.scss";
import Header from 'components/header/Header';
import Home from 'components/home/Home';
import Categories from 'components/categories/Categories';

function App() {
  return (
    // <GlobalStyles>
      <div className="App">
        <Header/>
        <Home/>
        <Categories/>
      </div>
    // </GlobalStyles>
  );
}

export default App;
