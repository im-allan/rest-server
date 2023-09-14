import { Response, Request } from "express";

const usersGet = (req: Request, res: Response) => {
  
  res.json({
    msg: 'GET API',
  })
}

module.exports = {
  
}