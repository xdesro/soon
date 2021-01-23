<template>
  <div>
    <TopNav />
    <main class="writing-page">
      <h1 class="page-title">Writing</h1>
      <ul class="writing-list">
        <li
          class="writing-list-item"
          v-for="post in posts"
          :key="post.sys.createdAt"
        >
          <article class="writing-list-item__article">
            <h1 class="writing-list-item__title">
              {{ post.fields.title }}
            </h1>
            <p class="writing-list-item__category">Tutorial</p>
            <ul class="writing-list-item__tags">
              <li v-for="tag in post.fields.tags" :key="tag">{{ tag }}</li>
            </ul>
            <time
              class="writing-list-item__date"
              :datetime="post.fields.publishDate"
            >
              {{
                new Date(post.fields.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })
              }}
            </time>
            <nuxt-link
              :to="`/writing/${post.fields.slug}`"
              class="writing-list-item__link"
            >
              Read the post
            </nuxt-link>
          </article>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  async asyncData() {
    const posts = await client.getEntries({
      content_type: 'blogPost',
      order: '-fields.publishDate',
    })
    return { posts: posts.items }
  },
}
</script>
