import  express, {Express} from 'express';
const cors = require('cors')
class Server {
  
  app: Express;
  port: string | undefined;
  usersPath: string;

  constructor () {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    // Middlewares
    this.middlewares();
    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors())

    // Lectura del body
    this.app.use(express.json());
    
    // Directorio público
    this.app.use(express.static('src/public'));
  }

  routes() {
    this.app.use( this.usersPath, require('../routes/user.routes'));
  }
  
  listen(){
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}!\n`) 
    })
  }

}

export default Server;