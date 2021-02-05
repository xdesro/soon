<template>
  <div>
    <TopNav />
    <main id="main" class="project">
      <img
        :src="project.heroImage.fields.file.url"
        class="project__featured-image"
        alt=""
      />
      <div class="project__intro">
        <div class="project__intro-row project__intro-row--main">
          <div class="project__intro-inner">
            <h1 class="project__title" v-html="project.clientName">
              {{ project.clientName }}
            </h1>
            <div class="project__meta">
              <p>Typography Foundry</p>
              <time :datetime="project.date">{{
                new Date(project.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long'
                })
              }}</time>
              <p>Web design & Development</p>
            </div>
            <a :href="project.link" class="project__live-link">
              View The Project Live
            </a>
          </div>
        </div>
        <div class="project__intro-row project__intro-row--excerpt">
          <div class="project__intro-inner">
            <p class="project__excerpt">{{ project.description }}</p>
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
        </div>
      </div>
      <div v-html="body" class="grid rendered"></div>
    </main>
    <WorkFooter :projects="projects" :currentProject="project" />
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
  </div>
</template>
<script>
import TopNav from '../_includes/TopNav.vue';
import WorkFooter from '../_includes/WorkFooter.vue';
import { markdownRenderer } from '../_lib/utils';
const getTOC = (string) => {
  const tokens = markdownRenderer.parse(string);
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
        data: 'projects',
        alias: 'project'
      },
      permalink: (data) => `work/${data.project.slug}/index.html`
    };
  },
  computed: {
    toc() {
      return getTOC(this.project.body);
    },
    body() {
      return markdownRenderer.render(this.project.body);
    }
  },
  components: {
    TopNav,
    WorkFooter
  }
};
</script>
