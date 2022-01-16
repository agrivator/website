const { minify } = require('terser');
const CleanCSS = require('clean-css');
const dayjs = require('dayjs');
const lodashChunk = require('lodash/chunk');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/static');
  eleventyConfig.addPassthroughCopy('./src/css/fonts');
  eleventyConfig.addPassthroughCopy('./src/css/github-markdown.css');

  eleventyConfig.addCollection('blogs', function (collection) {
    return collection.getFilteredByGlob('./src/blogs/**/*.md');
  });

  // 11ty plugins
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'after',
      class: 'direct-link',
      symbol: '#',
      level: [1, 2, 3, 4],
    }),
    slugify: eleventyConfig.getFilter('slug'),
  });
  eleventyConfig.setLibrary('md', markdownLibrary);

  // js minification filter
  eleventyConfig.addNunjucksAsyncFilter(
    'jsmin',
    async function (code, callback) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error('Terser error: ', err);
        // Fail gracefully.
        callback(null, code);
      }
    }
  );

  // css minificataion filter
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('formatDate', (dateObj) => {
    return dayjs(dateObj).format('DD MMMM YYYY');
  });

  function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ['all', 'nav', 'post', 'posts'].indexOf(tag) === -1
    );
  }

  eleventyConfig.addFilter('filterTagList', filterTagList);

  // Create an array of all tags
  eleventyConfig.addCollection('tagList', function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  // This is used to apply tag based pagination or double pagination
  // Ref: https://github.com/11ty/eleventy/issues/332
  eleventyConfig.addCollection('paginatedTagBlogs', function (collection) {
    // Get unique list of tags
    let tagSet = new Set();
    collection.getAllSorted().map(function (item) {
      if ('tags' in item.data) {
        let tags = item.data.tags;

        const filteredTags = filterTagList(tags);
        for (let tag of filteredTags) {
          tagSet.add(tag);
        }
      }
    });

    // Get each item that matches the tag
    let paginationSize = 9;
    let tagMap = [];
    let tagArray = [...tagSet];
    for (let tagName of tagArray) {
      let tagItems = collection.getFilteredByTag(tagName);
      let pagedItems = lodashChunk(tagItems, paginationSize);
      // console.log( tagName, tagItems.length, pagedItems.length );
      for (
        let pageNumber = 0, max = pagedItems.length;
        pageNumber < max;
        pageNumber++
      ) {
        tagMap.push({
          tagName: tagName,
          pageNumber: pageNumber,
          pageData: pagedItems[pageNumber],
        });
      }
    }

    return tagMap;
  });

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
