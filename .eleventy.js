module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");

  return {
      pathPrefix: "/eleventy-portfolio/",
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    };
};
