const { Router } = require('express');
const { usersGet, usersPost, usersPut, usersPatch, usersDelete } = require('../controllers/users.controllers');

const router = Router();

module.exports = router;

router.get('/', usersGet)

router.post('/', usersPost)

router.put('/', usersPut)

router.patch('/', usersPatch)



router.delete('/', usersDelete)