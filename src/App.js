import './assets/styles/common.scss';
import './assets/styles/normalize.css';


import Header from './assets/components/Header/Header';
import Footer from './assets/components/Footer/Footer';
import Main from './assets/components/Main/Main';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
