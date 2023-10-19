// const Image = require('@11ty/eleventy-img');
const eleventyVue = require('@11ty/eleventy-plugin-vue');
const eleventyRSS = require('@11ty/eleventy-plugin-rss');

// TODO: This is defined both here, and in `src/_lib/utils.js`, except without Prism. Conflicts with CJS or something, idk.
const markdownRenderer = require('markdown-it')({
  preset: 'default',
  html: true,
  typographer: true,
  breaks: true
})
  .use(require('markdown-it-katex'))
  .use(require('markdown-it-attrs'))
  .use(require('markdown-it-implicit-figures'));

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/functions');
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/meta');
  eleventyConfig.addPassthroughCopy('src/robots.txt');

  eleventyConfig.setWatchThrottleWaitTime(200);
  eleventyConfig.addWatchTarget('./src/scss');

  eleventyConfig.addPlugin(eleventyVue);
  eleventyConfig.addPlugin(eleventyRSS);

  eleventyConfig.addNunjucksFilter('renderMarkdown', str =>
    markdownRenderer.render(str)
  );
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
