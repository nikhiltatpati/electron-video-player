const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;
const fs = require("fs");
const PAGINATION_STEP = 12;

let mainWindow;
let categories;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    /*skipTaskbar: true*/
  });
  mainWindow.setFullScreen(true);

  const startUrl =
    "http://localhost:3000" || `file://${__dirname}/build/index.html`;
  mainWindow.loadURL(startUrl);
});
