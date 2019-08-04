module.exports = {
	plugins: ['@babel/plugin-proposal-throw-expressions'],
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current'
				}
			}
		]
	]
};
