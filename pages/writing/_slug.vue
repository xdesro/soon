<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="$md.render(post.body)" class="container"></div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  mounted() {
    console.log(this)
  },
  asyncData({ env, params }) {
    return client
      .getEntries({
        content_type: 'blogPost',
        'fields.slug': params.slug,
      })
      .then((entries) => {
        return {
          post: entries.items[0].fields,
        }
      })
  },
}
</script>

<style></style>
