<template>
  <li class="writing-list-item">
    <article class="writing-list-item__article">
      <h1 class="writing-list-item__title">
        {{ post.title }}
      </h1>
      <p class="writing-list-item__category">
        {{ post.category }}
      </p>
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
        <span class="visually-hidden">Read the post</span>
        <svg
          class="writing-list-item__icon"
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
export default {
  props: ['post']
};
</script>

<style></style>
