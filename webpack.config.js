const path = require("path");

module.exports = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
	entry: "./src/index.js",
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		compress: true,
		port: 9000,
	},
	devtool: "inline-source-map",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
};
