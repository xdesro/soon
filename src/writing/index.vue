<template>
  <div>
    <TopNav />
    <main class="writing-page">
      <h1 class="page-title">Writing</h1>
      <ul class="writing-list">
        <WritingListItem v-for="post in posts" :post="post" :key="post.slug" />
      </ul>
    </main>
  </div>
</template>

<script>
import TopNav from '../_includes/TopNav.vue';
import WritingListItem from '../_includes/WritingListItem.vue';

export default {
  data: {
    layout: 'layout.html'
  },
  components: {
    TopNav,
    WritingListItem
  }
};
</script>
