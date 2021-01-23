<template>
  <div>
    <TopNav />
    <main id="main" class="post">
      <div class="post__intro">
        <h1 class="post__title">{{ post.title }}</h1>
        <ul class="post__tags">
          <li v-for="tag in post.tags" :key="tag">{{ tag }}</li>
        </ul>
        <nav class="table-of-contents">
          <ol class="table-of-contents__list">
            <li
              class="table-of-contents__list-item"
              v-for="link in post.toc"
              :key="link.id"
            >
              <a class="table-of-contents__link" :href="`#${link.id}`">{{
                link.text
              }}</a>
            </li>
          </ol>
        </nav>
      </div>
      <div v-html="post.body" class="grid"></div>
    </main>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js';

const md = require('markdown-it')({
  preset: 'default',
  html: true,
  typographer: true,
  breaks: true
}).use(require('markdown-it-anchor'), {
  level: [2],
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: '⛓'
});
const client = createClient();
const getTOC = (string) => {
  const tokens = md.parse(string);
  const toc = tokens
    .map((token, tokenIndex) => {
      if (token.type === 'heading_open' && token.tag === 'h2') {
        return {
          id: token.attrs[0][1],
          text: tokens[tokenIndex + 1].children
            .filter(function (token) {
              return token.type === 'text' || token.type === 'code_inline';
            })
            .reduce(function (s, t) {
              return s + t.content;
            }, '')
        };
      }
    })
    .filter((token) => token !== undefined);
  return toc;
};
export default {
  asyncData({ env, params, payload }) {
    if (payload) {
      return { post: payload };
    } else {
      return client
        .getEntries({
          content_type: 'blogPost',
          'fields.slug': params.slug
        })
        .then((entries) => {
          return {
            post: {
              ...entries.items[0].fields,
              body: md.render(entries.items[0].fields.body),
              toc: getTOC(entries.items[0].fields.body)
            }
          };
        });
    }
  },
  computed: {}
};
</script>

<style></style>
