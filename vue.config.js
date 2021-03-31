module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'Profil Desa Klego',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'logo.ico',
      favicon16: 'logo.ico',
      appleTouchIcon: 'logo.ico',
      maskIcon: 'logo.ico',
      msTitleImage: 'logo.ico'
    },
    workboxOptions: {
      skipWaiting: true
    },
    manifestOptions: {
      icons: [
        {
          'src' : 'logo.ico',
          'sizes': '192x192',
          'type': 'image/png'
        },
        {
          'src': 'logo.ico',
          'sizes': '512x512',
          'type': 'image/png',
        }
      ]
    }
  }
}
