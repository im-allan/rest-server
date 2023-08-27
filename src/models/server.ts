import  express, {Express} from 'express';
const cors = require('cors')
class Server {
  app: Express;
  port: string | undefined;
  constructor () {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares
    this.middlewares();
    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors())
    // Directorio público
    this.app.use(express.static('src/public'));
  }

  routes() {
    this.app.get('/api', (req: any, res: any) => {
      res.json({
        msg: 'GET API',
      })
    })

    this.app.put('/api', (req: any, res: any) => {
      res.status(400).json({
        msg: 'PUT API',
      })
    })

    this.app.post('/api', (req: any, res: any) => {
      res.status(201).json({
        msg: 'POST API',
      })
    })

    this.app.delete('/api', (req: any, res: any) => {
      res.json({
        msg: 'DELETE API',
      })
    })
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}!\n`)
    })
  }

}

export default Server;