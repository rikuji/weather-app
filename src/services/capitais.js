import axios from 'axios';

const capitais = () => {
  const cidadesId = [
    90200703,
    455826,
    455827,
    455822,
    455821,
    455830,
    455819,
    455833,
    455820,
    455872,
  ];

  const cidadesDados = [];

  cidadesId.forEach((id) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.hgbrasil.com/weather?woeid=${id}`
      )
      .then((res) => cidadesDados.push(res.data.results));
  });

  return cidadesDados;
};

export default capitais();
