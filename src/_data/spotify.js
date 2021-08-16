const fetch = require('node-fetch');

module.exports = async () => {
  // return {
  //   artists: [
  //     {
  //       name: 'The Comet Is Coming',
  //       url: 'https://api.spotify.com/v1/artists/0Z5FMozvx15nUSUA6a9kkU'
  //     }
  //   ],
  //   name: 'Summon The Fire',
  //   url: 'https://open.spotify.com/track/5c44MldQ2CvroamP73V1lp'
  // };
  return await fetch(
    'https://henry.codes/.netlify/functions/spotify'
  ).then(res => res.json());
};
