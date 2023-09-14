const { Router } = require('express');
const { usersGet, usersPost, usersPut, usersPatch } = require('../controllers/users.controllers');

const router = Router();

module.exports = router;

router.get('/', usersGet)

router.post('/', usersPost)

router.put('/', usersPut)

router.patch('/', usersPatch)



router.delete('/', (req: any, res: any) => {
  res.json({
    msg: 'DELETE API',
  })
})