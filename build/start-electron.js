const electron = require('electron'),
  app = electron.app,
  BrowserWindow = electron.BrowserWindow,
  ipcMain = electron.ipcMain,
  Notification = electron.Notification,
  shell = electron.shell
const path = require('path');
const os = require('os');
isDev = require('electron-is-dev');
const contextMenu = require('electron-context-menu');
let mainWindow;
let workerWindow;
contextMenu({
  
	prepend: (defaultActions, parameters, browserWindow, spellcheck) => [
		spellcheck,
    {
			label: 'Rainbow',
			visible: parameters.mediaType === 'image'
		},
		{
			label: 'Search Google for “{selection}”',
			visible: parameters.selectionText.trim().length > 0,
			click: () => {
				shell.openExternal(`https://google.com/search?q=${encodeURIComponent(parameters.selectionText)}`);
			}
		}
	]
});
const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 1000, height: 1000,
    transparent: true,
    webPreferences: {
    nodeIntegration: true,
    spellcheck: true,
    preload: __dirname + '/preload.js',
    enableRemoteModule: true,
  }})
  const appUrl = isDev ? 'http://localhost:3000' :
    `file://${path.join(__dirname, '../build/index.html')}`
  mainWindow.loadURL(appUrl)
  mainWindow.maximize()
  mainWindow.setFullScreen(false)
  mainWindow.on('closed', () => mainWindow = undefined)


  workerWindow = new BrowserWindow({webPreferences: {
    nodeIntegration: true,
  }});

    workerWindow.loadURL("file://" + __dirname + "/worker.html");
    workerWindow.hide();
    workerWindow.webContents.openDevTools();
    workerWindow.on("closed", () => {
        workerWindow = undefined;
    });
}


app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { app.quit() }
})
app.on('activate', () => {
  if (mainWindow === null) { createWindow()  }
})
ipcMain.on("printPDF", function (event, content) {
  console.log(content);
  workerWindow.webContents.send("printPDF", content);
});


ipcMain.on("notifypdf", function (event) {
  console.log("Notification sent")
  new Notification(`New notifcation from MdTex`,
    {
       body: "The PDF conersion is now done"
     }
  );
});