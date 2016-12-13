const Markconf = {
	includers: {
		html: 'markserv-contrib-inc.html',
		less: 'markserv-contrib-inc.less',
		markdown: 'markserv-contrib-inc.markdown'
	// svg: 'markserv-contrib-inc.svg',
	},

	modifiers: {
		'**/': 'markserv-contrib-mod.dir',
		'**/*.md': 'markserv-contrib-mod.markdown',
		'**/*.html': 'markserv-contrib-mod.file',
		'**/*': 'markserv-contrib-mod.file',
		404: 'markserv-contrib-mod.http-404'
	}
};

module.exports = Markconf;
