module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = "GrupoA Educação - Full Stack Web Developer";
            return args;
        })
  }
}