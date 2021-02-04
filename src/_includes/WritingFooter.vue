<template>
  <footer class="more-writing">
    <h2 class="more-writing__title">More Writing</h2>
    <ul class="writing-list">
      <WritingListItem
        v-for="post in activePosts"
        :post="post"
        :key="post.slug"
      />
    </ul>
  </footer>
</template>

<script>
import WritingListItem from './WritingListItem.vue';

export default {
  props: ['posts', 'currentPost'],
  computed: {
    activePosts() {
      return this.posts
        .filter((post) => post.slug !== this.currentPost.slug)
        .slice(0, 3);
    }
  },
  components: {
    WritingListItem
  }
};
</script>
