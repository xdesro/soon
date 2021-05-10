<template>
  <footer class="next-case-study">
    <!-- {{ nextProject }} -->
    <a class="next-case-study__link" :href="`/work/${nextProject.slug}`">
      <article class="next-case-study__article">
        <h1 class="next-case-study__title" v-html="nextProject.clientName">
          {{ nextProject.clientName }}
        </h1>
        <div class="next-case-study__meta">
          <p>{{ nextProject.clientType }}</p>
          <time :datetime="nextProject.date">{{
            new Date(nextProject.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long'
            })
          }}</time>
          <p>Web design & Development</p>
        </div>
      </article>
      <img
        class="next-case-study__image"
        :src="nextProject.heroImage.fields.file.url"
        alt=""
      />
    </a>
  </footer>
</template>

<script>
export default {
  props: ['projects', 'currentProject'],
  computed: {
    nextProject() {
      const currentIndex = this.projects.findIndex(
        project => project.slug == this.currentProject.slug
      );
      const nextIndex =
        currentIndex + 1 >= this.projects.length ? 0 : currentIndex + 1;
      return this.projects[nextIndex];
    }
  }
};
</script>

<style></style>
