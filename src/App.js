import './assets/styles/common.scss';
import './assets/styles/normalize.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './assets/components/Header/Header';
import Footer from './assets/components/Footer/Footer';
import Main from './assets/components/Main/Main';


function App() {
  return (
    <BrowserRouter className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
