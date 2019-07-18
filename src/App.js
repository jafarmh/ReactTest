import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section1 from './components/Section1';
import Body from './components/Body';
import './components/mycss/header.css';
import './components/mycss/bodys.css';
import './components/mycss/baner.css';
import './components/mycss/citys.css';
import './components/mycss/footer.css';
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Section1></Section1>
      <Body></Body>
    </React.Fragment>
  );
}

export default App;
