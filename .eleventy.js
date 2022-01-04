module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'src/_includes/assets/css/global.css': './global.css',
  });
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
