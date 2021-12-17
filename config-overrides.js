const {
	override,
	addLessLoader,
	addWebpackPlugin,
} = require("customize-cra");
const ArcoWebpackPlugin = require('@arco-design/webpack-plugin');

module.exports = override(
	addLessLoader(),
	addWebpackPlugin(new ArcoWebpackPlugin()),
);