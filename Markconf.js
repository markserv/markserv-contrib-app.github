const Markconf = {
	includers: {
		html: 'markserv-contrib-inc.html',
		less: 'markserv-contrib-inc.less',
		markdown: 'markserv-contrib-inc.markdown'
		// svg: 'markserv-contrib-inc.svg',
	},

	modifiers: {
		'**/': {
			module: 'markserv-contrib-mod.dir',
			templateUrl: 'partials/index.html'
		},
		'**/*.md': {
			module: 'markserv-contrib-mod.markdown',
			templateUrl: 'partials/index.html'
		},
		'**/*.html': {
			module: 'markserv-contrib-mod.html'
		},
		// '**/*.+(js|json|yml)': {
		// 	module: 'markserv-contrib-mod.code-highlight',
		// 	templateUrl: 'partials/index.html'
		// },
		'**/*': 'markserv-contrib-mod.file',
		404: 'markserv-contrib-mod.http-404'
	},

	// Merges w/ plugin payload data
	overrides: {
		MarkconfUrl: __filename
	}

};

module.exports = Markconf;

