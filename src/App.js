import React, { Component } from 'react';

import Capital from './components/capital/capital.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      capitais: [
        {
          id: 1,
          cidade: 'Rio de Janeiro',
          min: 18,
          max: 27,
        },
        {
          id: 2,
          cidade: 'Salvador',
          min: 14,
          max: 22,
        },
        {
          id: 3,
          min: 21,
          max: 32,
          cidade: 'São Paulo',
        },
        {
          id: 4,
          min: 21,
          max: 32,
          cidade: 'Curitiba',
        },
        {
          id: 5,
          min: 21,
          max: 32,
          cidade: 'Belo Horizonte',
        },
        {
          id: 6,
          min: 21,
          max: 32,
          cidade: 'Fortaleza',
        },
        {
          id: 7,
          min: 21,
          max: 32,
          cidade: 'Brasília',
        },
        {
          id: 8,
          min: 21,
          max: 32,
          cidade: 'Manaus',
        },
        {
          id: 9,
          min: 21,
          max: 32,
          cidade: 'Belém',
        },
        {
          id: 10,
          min: 21,
          max: 32,
          cidade: 'João Pessoa',
        },
      ],
    };
  }

  componentDidMount() {}

  render() {
    const { capitais } = this.state;
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
            {capitais.map((cidade) => (
              <Capital
                key={cidade.id}
                min={cidade.min}
                max={cidade.max}
                cidade={cidade.cidade}
              />
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
