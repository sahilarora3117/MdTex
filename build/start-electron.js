const electron = require('electron'),
  app = electron.app,
  BrowserWindow = electron.BrowserWindow,
  ipcMain = electron.ipcMain,
  Notification = electron.Notification
const path = require('path');
const os = require('os');
isDev = require('electron-is-dev');

let mainWindow;
let workerWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 1000, height: 1000,
    transparent: true, frame: false,
    webPreferences: {
    nodeIntegration: true,
    preload: __dirname + '/preload.js',
    enableRemoteModule: true,
  }})
  const appUrl = isDev ? 'http://localhost:3000' :
    `file://${path.join(__dirname, '../build/index.html')}`
  mainWindow.loadURL(appUrl)
  mainWindow.maximize()
  mainWindow.webContents.openDevTools();
  mainWindow.setFullScreen(false)
  mainWindow.on('closed', () => mainWindow = undefined)


  workerWindow = new BrowserWindow({webPreferences: {
    nodeIntegration: true
  }});
    workerWindow.loadURL("file://" + __dirname + "/worker.html");
    workerWindow.hide();
    workerWindow.on("closed", () => {
        workerWindow = undefined
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

ipcMain.on("notifypdf", function (event) {
  console.log("Notification sent")
  new Notification(`New notifcation from MdTex`,
    {
       body: "The PDF conersion is now done"
     }
  );
});