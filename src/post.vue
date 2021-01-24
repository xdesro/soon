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
              v-for="link in toc"
              :key="link.id"
            >
              <a class="table-of-contents__link" :href="`#${link.id}`">
                {{ link.text }}
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div v-html="body" class="grid"></div>
    </main>
  </div>
</template>
<script>
import TopNav from './_includes/TopNav.vue';

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
  data() {
    return {
      layout: 'layout.html',
      pagination: {
        size: 1,
        data: 'posts',
        alias: 'post'
      },
      permalink: (data) => `writing/${data.post.slug}/index.html`
    };
  },
  computed: {
    toc() {
      return getTOC(this.post.body);
    },
    body() {
      return md.render(this.post.body);
    }
  },
  components: {
    TopNav
  }
};
</script>
