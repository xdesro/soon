require('dotenv').config();

const contentful = require('contentful');
const client = contentful.createClient({
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  space: process.env.CTF_SPACE_ID
});
module.exports = async () => {
  const posts = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate'
  });
  return posts.items.map((post) => post.fields);
};
