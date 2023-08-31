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
    // TODO: buscar el tipo de dato para req y res 
    this.app.get('/api', (req: any, res: any) => {
      res.json({
        msg: 'GET API',
      })
    })
    
    // TODO: buscar el tipo de dato para req y res 
    this.app.put('/api', (req: any, res: any) => {
      res.status(400).json({
        msg: 'PUT API',
      })
    })

    // TODO: buscar el tipo de dato para req y res 
    this.app.post('/api', (req: any, res: any) => {
      res.status(201).json({
        msg: 'POST API',
      })
    })
    
    // TODO: buscar el tipo de dato para req y res 
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