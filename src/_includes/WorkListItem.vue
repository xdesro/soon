<template>
  <li class="case-study-list-item" :reveal="page.url == '/'">
    <article class="case-study-list-item__article">
      <h1
        class="case-study-list-item__title"
        v-html="project.clientName"
        data-splitting
      >
        {{ project.clientName }}
      </h1>
      <div class="case-study-list-item__meta">
        <time class="case-study-list-item__date" :datetime="project.date">
          ({{ formattedDate }})
        </time>
        <p class="case-study-list-item__involvement">
          {{ project.involvement.join(' & ') }}
        </p>
      </div>
      <img
        class="case-study-list-item__image"
        :src="project.heroImage.fields.file.url"
        alt=""
      />
      <a class="case-study-list-item__link" :href="`/work/${project.slug}`">
        <span class="visually-hidden">See the Work</span>
        <svg
          class="case-study-list-item__icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 10 10"
        >
          <path
            fill-rule="evenodd"
            d="M7.31 1.57H.56V0H10v9.44H8.43V2.7L1.1 10 0 8.89l7.31-7.32z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </article>
  </li>
</template>

<script>
import { dateFormatter } from '../_lib/utils';
export default {
  props: ['project'],
  computed: {
    formattedDate() {
      return dateFormatter(this.project.date);
    }
  }
};
</script>
