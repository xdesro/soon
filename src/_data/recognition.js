const _ = require('lodash');

const contentful = require('contentful');
const client = contentful.createClient({
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  space: process.env.CTF_SPACE_ID
});

module.exports = async () => {
  const recognition = await client.getEntries({
    content_type: 'recognition',
    order: 'fields.publisher'
  });
  const publishers = {};

  recognition.items.forEach(item => {
    const { publisher, award } = item.fields;
    if (publishers.hasOwnProperty(publisher)) {
      if (publishers[publisher].hasOwnProperty(award)) {
        publishers[publisher][award].push(item.fields);
      } else {
        publishers[publisher][award] = [item.fields];
      }
    } else {
      publishers[publisher] = {};
      if (publishers[publisher].hasOwnProperty(award)) {
        publishers[publisher][award].push(item.fields);
      } else {
        publishers[publisher][award] = [item.fields];
      }
    }
  });
  return {
    publishers,
    items: recognition.items.map(item => item.fields)
  };
};
