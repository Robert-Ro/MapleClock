import { app, BrowserWindow } from "electron"
import * as path from "path"

let mainWindow
function createWindow() {
  mainWindow = new BrowserWindow({
    height: 1000,
    width: 1400,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  })
  mainWindow.loadFile(path.join(__dirname, "../index.html"))
  mainWindow.webContents.openDevTools()
}

app.on("ready", () => {
  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})
