const { Menu, BrowserWindow } = require('electron');
var template = [
  {
    label: '风来怡洗浴会所',
    submenu: [
      {
        label: '精品SPA',
        accelerator: 'ctrl+n',
        click: () => {
          var win = new BrowserWindow({
            width: 400,
            height: 400,
            webPreferences: {
              nodeIntegration: true,
              contextIsolation: false
            }
          })
          win.loadFile('yellow.html')
          win.on('closed', () => {
            win = null;
          })
        }
      },
      {label: '泰式按摩'}
    ]
  },
  {
    label: '大浪淘沙洗浴中心',
    submenu: [
      {label: '牛奶玫瑰浴'},
      {label: '爱情拍拍手'}
    ]
  }
]

var m = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(m);