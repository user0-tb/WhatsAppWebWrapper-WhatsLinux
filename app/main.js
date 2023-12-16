const electron = require('electron')

const { app, BrowserWindow } = require('electron')


function createWindow () {
  // Erstelle das Browser-Fenster.
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
    center: true,
    icon: __dirname + '/logo-small.png',
    webPreferences: {
      nodeIntegration: true,
      webViewTag: true
    }
  })

  // and load the index.html of the app.
  win.webContents.setUserAgent(win.webContents.getUserAgent() + "Mozilla/5.0 (X11; Linux i686; rv:109.0) Gecko/20100101 Firefox/119.0");
  win.loadFile('index.html');
  win.removeMenu()
}

app.on('ready', createWindow)
