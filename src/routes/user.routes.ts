const { Router } = require('express');
const { usersGet } = require('../controllers/users.controllers');

const router = Router();

module.exports = router;

// TODO: buscar el tipo de dato para req y res 
router.get('/', usersGet)

// TODO: buscar el tipo de dato para req y res 
router.put('/', (req: any, res: any) => {
  res.status(400).json({
    msg: 'PUT API',
  })
})

// TODO: buscar el tipo de dato para req y res 
router.post('/', (req: any, res: any) => {
  res.status(201).json({
    msg: 'POST API',
  })
})

// TODO: buscar el tipo de dato para req y res 
router.delete('/', (req: any, res: any) => {
  res.json({
    msg: 'DELETE API',
  })
})