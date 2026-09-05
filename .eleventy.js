module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");

  return {
      pathPrefix: "/eleventy-portolio/",
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    };
};
