const Markconf = {
  includers: {
    html: 'markserv-contrib-inc.html',
  //   // markdown: 'markserv-contrib-inc.markdown',
  //   // less: 'markserv-contrib-inc.less'
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
