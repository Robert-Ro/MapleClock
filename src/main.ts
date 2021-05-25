import { app, BrowserWindow, ipcMain, Notification } from 'electron'
import * as path from 'path'
import isDev from 'electron-is-dev'
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'

let mainWindow: BrowserWindow | null = null
function createWindow() {
  mainWindow = new BrowserWindow({
    height: 400,
    width: 400,
    title: 'MapleClock',
    maximizable: false,
    webPreferences: {
      worldSafeExecuteJavaScript: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  if (isDev) {
    mainWindow.loadURL('http://localhost:8001/index.html')
  } else {
    // mainWindow.loadFile(path.join(__dirname, 'index.html'))
    mainWindow.loadURL(`file://${__dirname}/../index.html`)
  }
  mainWindow.removeMenu()
  mainWindow.title = 'MapleClock'
  installExtension(REACT_DEVELOPER_TOOLS)
  if (isDev) {
    mainWindow.webContents.openDevTools({
      mode: 'detach',
    })
  }
  ipcMain.handle('timer-end', async () => {
    const res = await new Promise((resolve, reject) => {
      const notificaiotn = new Notification({
        title: '任务结束',
        body: '是否开始休息',
        actions: [{ text: '开始休息', type: 'button' }],
        closeButtonText: '继续工作',
      })
      notificaiotn.show()
      notificaiotn.on('click', () => {
        resolve('rest')
      })
      notificaiotn.on('close', () => {
        resolve('work')
      })
    })
    return res
  })
}

app.on('ready', () => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
