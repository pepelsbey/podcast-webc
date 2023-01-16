const webc = require('@11ty/eleventy-plugin-webc');
const yaml = require('js-yaml');

module.exports = (config) => {
    config.addDataExtension('yml', (contents) => {
        return yaml.load(contents);
    });

    config.addPlugin(webc);

    return {
        dir: {
            input: 'src',
            output: 'dist',
            data: 'data'
        }
    };
};
