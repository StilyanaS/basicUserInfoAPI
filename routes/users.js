import express from 'express';

import {createUser, getSingleUser, deleteUser, updateUser, getUsers} from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getSingleUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router