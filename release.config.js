/* eslint-disable no-useless-escape */
module.exports = {
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'eslint',
				parserOpts: {
					// optional, only you want to have emoji commit support
					headerPattern: /^(?::([\w-]*):)?\s*(\w*):\s*(.*)$/,
					headerCorrespondence: ['emoji', 'tag', 'message'],
				},
				releaseRules: [
					{ tag: 'Breaking', release: 'major' },
					{ tag: 'Fix', release: 'patch' },
					{ tag: 'Feat', release: 'minor' },
					{ tag: 'New', release: 'minor' },
					{ tag: 'Perf', release: 'patch' },
					{ tag: 'Update',  release: 'minor' },
				]
			},
		],
		[
			'@semantic-release/release-notes-generator',
			{
				preset: 'eslint',
				parserOpts: {
					// optional, only you want to have emoji commit support
					headerPattern: /^(?::([\w-]*):)?\s*(\w*):\s*(.*)$/,
					headerCorrespondence: ['emoji', 'tag', 'message'],
				}
			},
		],
		'@semantic-release/npm',
		'@semantic-release/github'
	],
};
