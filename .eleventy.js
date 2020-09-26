const typesetPlugin = require('eleventy-plugin-typeset');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.setTemplateFormats([
        "md",
        "css",
        "jpg"
    ]);

    eleventyConfig.addPlugin(typesetPlugin({
        only: '.site__text',
        disable: ['hyphenation']
    }));
};