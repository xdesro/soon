<template>
  <div>
    <TopNav :spotify="spotify" />
    <main class="writing-page" data-router-wrapper>
      <article data-router-view="work-list-page">
        <h1 class="page-title" data-splitting>Work</h1>
        <ul class="writing-list">
          <WorkListItem
            v-for="project in projects"
            :project="project"
            :key="project.slug"
          />
        </ul>
        <canvas id="case-studies-canvas"></canvas>
      </article>
    </main>
  </div>
</template>

<script>
import TopNav from './_includes/TopNav.vue';
import WorkListItem from './_includes/WorkListItem.vue';

export default {
  data: {
    title: 'Work'
  },
  components: {
    TopNav,
    WorkListItem
  }
};
</script>
