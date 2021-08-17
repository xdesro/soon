require('dotenv').config();

const contentful = require('contentful');
const client = contentful.createClient({
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  space: process.env.CTF_SPACE_ID
});
module.exports = async () => {
  const author = await client
    .getEntry('15jwOBqpxqSAOy2eOO4S0m')
    .catch(console.error);
  return author;
};
