require('dotenv').config();

const contentful = require('contentful');
const client = contentful.createClient({
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  space: process.env.CTF_SPACE_ID
});
module.exports = async () => {
  const projects = await client.getEntries({
    content_type: 'project',
    order: '-fields.date'
  });
  return projects.items.map((project) => project.fields);
};
