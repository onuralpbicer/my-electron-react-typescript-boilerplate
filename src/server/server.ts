import express, { Application } from 'express'
import { createServer, Server as HTTPServer } from 'http'
import path from 'path'

export class Server {
    private httpServer: HTTPServer
    private app: Application

    private readonly DEFAULT_PORT = 80

    constructor() {
        this.app = express()
        this.httpServer = createServer(this.app)

        this.configureApp()
        this.configureRoutes()
    }

    private configureApp(): void {
        this.app.use(express.static(path.join(__dirname, '../public')))
    }

    private configureRoutes(): void {
        this.app.get('/', (req, res) => {
            res.sendFile('index.html')
        })
        this.app.get('/test/', (req, res) => {
            res.send({ value: 'testing' })
        })
        this.app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'index.html'))
        })
    }

    public listen(callback: (port: number) => void): void {
        this.httpServer.listen(this.DEFAULT_PORT, () => {
            callback(this.DEFAULT_PORT)
        })
    }
}
