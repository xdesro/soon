<template>
  <div>
    <TopNav :spotify="spotify" :difference="false" />
    <main id="main" class="writing-page" data-router-wrapper>
      <article data-router-view="writing-list-page">
        <h1 class="page-title" data-splitting>Writing</h1>
        <ul class="writing-list">
          <WritingListItem
            v-for="post in posts"
            :post="post"
            :key="post.slug"
          />
        </ul>
      </article>
    </main>
  </div>
</template>

<script>
import TopNav from './_includes/TopNav.vue';
import WritingListItem from './_includes/WritingListItem.vue';

export default {
  data() {
    return {
      title: () => 'test',
      layout: 'layout.html'
    };
  },
  components: {
    TopNav,
    WritingListItem
  }
};
</script>
