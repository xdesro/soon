const eleventyVue = require('@11ty/eleventy-plugin-vue');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/functions');
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/js');
  eleventyConfig.addPassthroughCopy('src/meta');

  eleventyConfig.setWatchThrottleWaitTime(200);
  eleventyConfig.addWatchTarget('./src/css/*.css');
  eleventyConfig.addPlugin(eleventyVue);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
