const fetch = require('node-fetch');

module.exports = async () => {
  return await fetch(
    'https://henry.codes/.netlify/functions/spotify'
  ).then((res) => res.json());
};
