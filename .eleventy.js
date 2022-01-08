module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/static');
  eleventyConfig.addPassthroughCopy('./src/css/fonts');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
