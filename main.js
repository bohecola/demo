var electron = require('electron')

var app = electron.app
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
  mainWindow.webContents.openDevTools();
  require('./main/menu.js')
  mainWindow.loadFile('demo3.html')

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