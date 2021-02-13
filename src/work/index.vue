<template>
  <div>
    <TopNav />
    <main class="writing-page">
      <h1 class="page-title">Work</h1>
      <ul class="writing-list">
        <WorkListItem
          v-for="project in projects"
          :project="project"
          :key="project.slug"
        />
      </ul>
    </main>
  </div>
</template>

<script>
import TopNav from '../_includes/TopNav.vue';
import WorkListItem from '../_includes/WorkListItem.vue';

export default {
  data: {
    title: 'Work',
    layout: 'layout.html'
  },
  components: {
    TopNav,
    WorkListItem
  }
};
</script>
