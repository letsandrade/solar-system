import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="body-wrapper">
        <Header />
        <SolarSystem />
        <Missions />
        <a className="img_credit" href="https://br.freepik.com/fotos-gratis/ceu-noturno-estrelado-azul-e-branco_13126560.htm#fromView=search&page=1&position=2&uuid=5d7a1dc4-4fa6-45c8-943f-9e6831e9f93b">Imagem de fundo de ninjason1 no Freepik</a>
      </div>);
  }
}

export default App;
