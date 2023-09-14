const { Router } = require('express');
const { usersGet, usersPost, usersPut } = require('../controllers/users.controllers');

const router = Router();

module.exports = router;

router.get('/', usersGet)

router.post('/', usersPost)

router.put('/', usersPut)

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