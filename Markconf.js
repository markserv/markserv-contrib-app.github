const Markconf = {
  // includers: {
  //   html: 'markserv-contrib-inc.html',
  //   markdown: 'markserv-contrib-inc.markdown',
  //   less: 'markserv-contrib-inc.less'
  // },

  modifiers: {
    core: {
      directory: 'markserv-contrib-mod.dir',
      markdown: 'markserv-contrib-mod.markdown',
      http404: 'markserv-contrib-mod.http-404',
      file: 'markserv-contrib-mod.file'
    }
  }
};

module.exports = Markconf;
