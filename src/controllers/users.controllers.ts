import { Response, Request } from "express";

const usersGet = (req: Request, res: Response) => {
  
  res.json({
    msg: 'GET API - Controller',
  })
}

const usersPost = (req: Request, res:  Response) => {
  res.status(201).json({
    msg: 'POST API - Controller',
  })
}

const usersPut = (req: Request, res: Response) => {
  res.status(200).json({
    msg: 'PUT API - Controller',
  })
}

const usersPatch = (req: Request, res: Response) => {
  res.status(200).json({
    msg: 'PATCH API - Controller',
  })
}

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch
}