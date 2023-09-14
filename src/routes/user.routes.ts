const { Router } = require('express');
const { usersGet, usersPost } = require('../controllers/users.controllers');

const router = Router();

module.exports = router;

router.get('/', usersGet)

router.post('/', usersPost)

router.put('/', (req: any, res: any) => {
  res.status(400).json({
    msg: 'PUT API',
  })
})

router.patch('/', (req: any, res: any) => {
  res.status(200).json({
    msg: 'PUT API',
  })
})



router.delete('/', (req: any, res: any) => {
  res.json({
    msg: 'DELETE API',
  })
})