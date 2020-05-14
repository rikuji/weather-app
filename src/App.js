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
          min: 18,
          max: 27,
          cidade: 'Rio de Janeiro',
        },
        {
          id: 2,
          min: 14,
          max: 22,
          cidade: 'Salvador',
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
      inputText: '',
    };
  }

  componentDidMount() {}

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { capitais, inputText } = this.state;

    const infoCidade = capitais.filter(
      (capital) => capital.cidade === inputText
    );

    console.log(infoCidade);
  };

  render() {
    const { capitais } = this.state;
    return (
      <main>
        <section id="principal">
          <h1>Previsão do tempo</h1>
          <form className="search" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="cidade"
              id="cidade"
              placeholder="Insira aqui o nome da cidade"
              onChange={this.handleChange}
            />
            <button className="search-btn" type="submit">
              <i className="fas fa-search fa-2x" />
            </button>
          </form>
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
