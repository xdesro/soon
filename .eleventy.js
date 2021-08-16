const Image = require('@11ty/eleventy-img');
const eleventyVue = require('@11ty/eleventy-plugin-vue');

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ['avif', 'jpeg']
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async'
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/functions');
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/meta');

  eleventyConfig.setWatchThrottleWaitTime(200);
  eleventyConfig.addWatchTarget('./src/scss');
  eleventyConfig.addPlugin(eleventyVue);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
