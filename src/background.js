'use strict'

import { app, protocol, BrowserWindow, Menu, ipcMain } from 'electron'
import {
  createProtocol,
} from 'vue-cli-plugin-electron-builder/lib'
import { getAllFundList } from './libs/fundHelper'

const env = process.env.NODE_ENV || 'development'
const isDevelopment = env !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
// 如果进程出异常
process.on('uncaughtException', function(err) {
  console.log(err)
});

if (!isDevelopment) {
  Menu.setApplicationMenu(null)
}

let win;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true }}])

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    useContentSize: true,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      // experimentalFeatures: true
    },
    vibrancy: 'appearance-based', // 窗口模糊的样式
    frame: false, // false时显示无边框窗口
    titleBarStyle: 'hidden' // 无边框窗口时，mac任然显示关闭缩小全屏按钮
  });
  // win.maximize();
  win.setResizable(true);
  win.show();

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('close', () => {
    exitApp();
  });

  win.on('closed', () => {
    win = null
  });

  win.on('blur', () => {
    win.webContents.send('onBlur');
  });

  win.on('focus', () => {
    win.webContents.send('onFocus');
  });

  // win.webContents.openDevTools()
}

function exitApp() {
  win.webContents.send('onExitApp');
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async() => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }
  }
  ipcMain.on('appMounted', () => {
    // checkVersion(win);
    getAllFundList()
  });
  await createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
