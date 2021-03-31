const electron = require('electron'),
  app = electron.app,
  BrowserWindow = electron.BrowserWindow,
  ipcMain = electron.ipcMain,
  shell = electron.shell,
  Menu = electron.Menu;
const path = require('path');
const os = require('os');
isDev = require('electron-is-dev');
   
let mainWindow;
let workerWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 480, height: 320, webPreferences: {
    nodeIntegration: true,
    preload: __dirname + '/preload.js'
  }})
  const appUrl = isDev ? 'http://localhost:3000' :
    `file://${path.join(__dirname, '../build/index.html')}`
  mainWindow.loadURL(appUrl)
  mainWindow.maximize()
  mainWindow.setFullScreen(false)
  mainWindow.on('closed', () => mainWindow = null)


  workerWindow = new BrowserWindow({webPreferences: {
    nodeIntegration: true
  }});
    workerWindow.loadURL("file://" + __dirname + "/worker.html");
    workerWindow.hide();
    workerWindow.on("closed", () => {
        workerWindow = undefined;
    });

}



app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { app.quit() }
})
app.on('activate', () => {
  if (mainWindow === null) { createWindow() }
})
ipcMain.on("printPDF", function (event, content) {
  console.log(content);
  workerWindow.webContents.send("printPDF", content);
});
// when worker window is ready
ipcMain.on("readyToPrintPDF", function (event) {
    workerWindow.webContents.print({});
});
