require('dotenv').config();
const { createClient } = require('./plugins/contentful');
const contentfulClient = createClient();

export default {
  privateRuntimeConfig: {
    contentfulSpaceId: process.env.CTF_SPACE_ID,
    contentfulAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ss21-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/contentful'],
  generate: {
    async routes() {
      const blogPosts = await contentfulClient.getEntries({
        content_type: 'blogPost',
      });
      return blogPosts.items.map((blogPost) => {
        return {
          route: `/writing/${blogPost.fields.slug}`,
          payload: blogPost,
        };
      });
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: ['@nuxtjs/markdownit'],
  // markdownit: {

  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
