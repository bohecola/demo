var electron = require('electron')

var app = electron.app
var globalShortcut = electron.globalShortcut
var BrowserWindow = electron.BrowserWindow

var mainWindow = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  })

  globalShortcut.register('ctrl+e', () => {
    mainWindow.loadURL('https://jspang.com')
  })

  let isRegister = globalShortcut.isRegistered('ctrl+e') ? 'Register Success' : 'Register fail'
  console.log('------>' + isRegister)

  mainWindow.webContents.openDevTools();
  require('./main/menu.js')
  mainWindow.loadFile('demo7.html')

  // BrowserView
  // var BrowserView = electron.BrowserView
  // var view = new BrowserView()
  // mainWindow.setBrowserView(view)
  // view.setBounds({
  //   x: 0,
  //   y: 120,
  //   width: 1000,
  //   height: 680
  // })
  // view.webContents.loadURL('https:jspang.com')
  // window.open BrowserWindow

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

app.on('will-quit', function () {
  // 注销全局快捷键
  globalShortcut.unregister('ctrl+e')
  globalShortcut.unregisterAll()
})