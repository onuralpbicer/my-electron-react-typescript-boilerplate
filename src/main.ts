import { app, BrowserWindow } from 'electron'
import { Server } from './server/server'

const createWindow = (): void => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
        title: 'test',
    })

    win.loadFile('index.html')

    const server = new Server()
    server.listen((port: number) => {
        console.log(`Server is listening on http://localhost:${port}`)
    })
}

app.on('ready', createWindow)
