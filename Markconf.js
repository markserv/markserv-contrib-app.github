const Markconf = {
  includers: {
    html: 'markserv-contrib-inc.html',
    less: 'markserv-contrib-inc.less',
    markdown: 'markserv-contrib-inc.markdown'
    // svg: 'markserv-contrib-inc.svg',
  },

  modifiers: {
    '**/': [
      // 'markserv-contrib-mod.dir',
      {'markserv-contrib-mod.dir': 'partials/directory.html'},
    // // //   // {'markserv-contrib-mod.foo': 'partials/directory.html'}
    ],
    // '**/': 'markserv-contrib-mod.dir',
    '**/*.md': 'markserv-contrib-mod.markdown',
    '**/*': 'markserv-contrib-mod.file',
    404: 'markserv-contrib-mod.http-404'
  }
};

module.exports = Markconf;
