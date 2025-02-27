module.exports = {
  chainWebpack: config => {
    // 让 babel 转码一些最新的 js API
    config.entry('main').add('babel-polyfill')
    config.module
      .rule('image')
      .test(/\.ico$/)
      .use('url-loader')
      .loader('url-loader')
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        'appId': 'com.mf.app.teacher',
        'productName': '基鲸', // 项目名，也是生成的安装文件名，即aDemo.exe
        'copyright': 'Copyright © 2021', // 版权信息
        'directories': {
          'output': './dist'// 输出文件路径
        },
        'dmg': {
          'contents': [
            {
              'x': 410,
              'y': 150,
              'type': 'link',
              'path': '/Applications'
            },
            {
              'x': 130,
              'y': 150,
              'type': 'file'
            }
          ]
        },
        'mac': {
          'icon': './mf-edu.icns',
          'extendInfo': {
            // 'NSMicrophoneUsageDescription': '请允许本程序访问您的麦克风',
            // 'NSCameraUsageDescription': '请允许本程序访问您的摄像头'
          }
        },
        'win': { // win相关配置
          'icon': './mf-edu.ico', // 图标，当前图标在根目录下，注意这里有两个坑
          'target': [
            {
              'target': 'nsis', // 利用nsis制作安装程序
              'arch': [
                'x64'// 64位
              ]
            }
          ]
        },
        'nsis': {
          'oneClick': false, // 是否一键安装
          'allowElevation': true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          'allowToChangeInstallationDirectory': true, // 允许修改安装目录
          'installerIcon': './mf-edu.ico', // 安装图标
          'uninstallerIcon': './mf-edu.ico', // 卸载图标
          'installerHeaderIcon': './mf-edu.ico', // 安装时头部图标
          'createDesktopShortcut': true, // 创建桌面图标
          'createStartMenuShortcut': true, // 创建开始菜单图标
          'shortcutName': '基鲸', // 图标名称
        },
        'publish': [
          {
            'provider': 'generic',
            'url': 'http://www.kimen.com.cn/download/mf-teacher', // 更新服务器地址,可为空
          }
        ],
      }
    }

  }
}
