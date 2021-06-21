const btn = this.document.querySelector('#btn')
const BrowserWindow = require('electron').remote.BrowserWindow

window.onload = function () {
  btn.onclick = () => {
    newWin = new BrowserWindow({
      width: 400,
      height: 400
    })
    newWin.loadFile('yellow.html')
    newWin.on('close', () => {
      newWin = null
    })
  }
}

const { remote } = require('electron')

var rightTemplate = [
  { label: '粘贴', accelerator: 'ctrl+v' },
  { label: '复制', accelerator: 'ctrl+c' }
]

var m = remote.Menu.buildFromTemplate(rightTemplate);

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  m.popup({window: remote.getCurrentWindow()})
})