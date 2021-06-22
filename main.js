var electron = require('electron')
const { ipcMain } = require('electron')

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

  // 全局快捷键
  globalShortcut.register('ctrl+e', () => {
    mainWindow.loadURL('https://jspang.com')
  })
  let isRegister = globalShortcut.isRegistered('ctrl+e') ? 'Register Success' : 'Register fail'
  console.log('------>' + isRegister)

  // ipcMain 监听异步消息
  ipcMain.on('asynchronous-message', (event, arg) => {
    console.log('From render-message async ->', arg) // prints 'ping'
    // 回复渲染进程异步消息 'pong'
    event.reply('asynchronous-reply', 'pong')
  })
  
  // ipcMain 监听同步消息
  ipcMain.on('synchronous-message', (event, arg) => {
    console.log('From render-message sync ->', arg) // prints 'ping'
    // 回复渲染进程同步消息 'pong'
    event.returnValue = 'pong'
  })

  // 调试工具
  mainWindow.webContents.openDevTools();

  // 菜单
  require('./main/menu.js')

  // 窗口加载视图文件
  mainWindow.loadFile('demo8.html')
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