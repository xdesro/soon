const markdownRenderer = require('markdown-it')({
  preset: 'default',
  html: true,
  typographer: true,
  breaks: true
})
  .use(require('@iktakahiro/markdown-it-katex'), { throwOnError: true, output: 'mathml' })
  .use(require('markdown-it-attrs'))
  .use(require('markdown-it-implicit-figures'))
  .use(require('markdown-it-anchor'), {
    level: [2],
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '⛓'
  })
  .use(require('markdown-it-prism'), {
    defaultLanguageForUnknown: 'bash'
  });
const dateFormatter = dateString => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};
export { markdownRenderer, dateFormatter };

