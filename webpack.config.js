var path = require('path');
module.exports = {
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        publicPath: ''
    },

    devtool: 'eval-source-map',

    externals: {
        react: 'React',
        'react/addons': 'React',
        lodash: '_',
        jquery: '$',
        angular: 'angular',
        Wix: 'Wix',
        'editor-ui-lib': 'UI'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            { test: /\.rt/, loader: "react-templates-loader" },
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader?functions=selector-parse&root=" + path.resolve('./js')}
        ]
    }
}