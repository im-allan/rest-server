const { Router } = require('express');
const { usersGet } = require('../controllers/users.controllers');

const router = Router();

module.exports = router;

router.get('/', usersGet)

router.put('/', (req: any, res: any) => {
  res.status(400).json({
    msg: 'PUT API',
  })
})

router.post('/', (req: any, res: any) => {
  res.status(201).json({
    msg: 'POST API',
  })
})

router.delete('/', (req: any, res: any) => {
  res.json({
    msg: 'DELETE API',
  })
})