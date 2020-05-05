import React, { Component } from 'react';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  async componentDidMount() {
    const res = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api.hgbrasil.com/weather?woeid=455819'
    );

    console.log(res.data.results);
  }

  render() {
    return (
      <main>
        <section id="principal">
          <h1>Previsão do tempo</h1>
          <div className="search">
            <input
              type="text"
              name="cidade"
              id="cidade"
              placeholder="Insira aqui o nome da cidade"
            />
            <button className="search-btn" type="submit">
              <i className="fas fa-search fa-2x" />
            </button>
          </div>
        </section>
        <section className="capitais">
          <h2>Capitais</h2>
          <h3 className="title">
            <span className="title-min">Min</span>
            <span className="title-max">Max</span>
            <span className="title-min-2">Min</span>
            <span className="title-max-2">Max</span>
          </h3>
          <div className="cidades">
            <div className="capital">
              <p className="minCapital">18°</p>
              <p className="maxCapital">27°</p>
              <p className="nomeCapital">Rio de Janeiro</p>
            </div>
            <div className="capital">
              <p className="minCapital">14°</p>
              <p className="maxCapital">22°</p>
              <p className="nomeCapital">Salvador</p>
            </div>
            <div className="capital">
              <p className="minCapital">21°</p>
              <p className="maxCapital">32°</p>
              <p className="nomeCapital">São Paulo</p>
            </div>
            <div className="capital">
              <p className="minCapital">24°</p>
              <p className="maxCapital">37°</p>
              <p className="nomeCapital">Curitiba</p>
            </div>
            <div className="capital">
              <p className="minCapital">18°</p>
              <p className="maxCapital">27°</p>
              <p className="nomeCapital">Belo Horizonte</p>
            </div>
            <div className="capital">
              <p className="minCapital">18°</p>
              <p className="maxCapital">27°</p>
              <p className="nomeCapital">Fortaleza</p>
            </div>
            <div className="capital">
              <p className="minCapital">18°</p>
              <p className="maxCapital">27°</p>
              <p className="nomeCapital">Brasília</p>
            </div>
            <div className="capital">
              <p className="minCapital">18°</p>
              <p className="maxCapital">27°</p>
              <p className="nomeCapital">Manaus</p>
            </div>
            <div className="capital">
              <p className="minCapital">18°</p>
              <p className="maxCapital">27°</p>
              <p className="nomeCapital">Belém</p>
            </div>
            <div className="capital">
              <p className="minCapital">18°</p>
              <p className="maxCapital">27°</p>
              <p className="nomeCapital">João Pessoa</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
