const typesetPlugin = require('eleventy-plugin-typeset');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.setTemplateFormats([
        "md",
        "css",
        "jpg",
        "png"
    ]);

    eleventyConfig.addPlugin(typesetPlugin({
        disable: ['hyphenate']
    }));

    eleventyConfig.setServerOptions({
        showAllHosts: true,
    });
};