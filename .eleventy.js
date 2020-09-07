module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.setTemplateFormats([
        "md",
        "css",
        "jpg"
    ]);
};