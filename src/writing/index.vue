<template>
  <div>
    <TopNav />
    <main class="writing-page">
      <h1 class="page-title">Writing</h1>
      <ul class="writing-list">
        <li class="writing-list-item" v-for="post in posts" :key="post.slug">
          <article class="writing-list-item__article">
            <h1 class="writing-list-item__title">
              {{ post.title }}
            </h1>
            <p class="writing-list-item__category">Tutorial</p>
            <ul class="writing-list-item__tags">
              <li v-for="tag in post.tags" :key="tag">{{ tag }}</li>
            </ul>
            <time class="writing-list-item__date" :datetime="post.publishDate">
              {{
                new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long'
                })
              }}
            </time>
            <a :href="`/writing/${post.slug}`" class="writing-list-item__link">
              Read the post
            </a>
          </article>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import TopNav from '../_includes/TopNav.vue';

export default {
  data: {
    layout: 'layout.html'
  },
  components: {
    TopNav
  }
};
</script>
