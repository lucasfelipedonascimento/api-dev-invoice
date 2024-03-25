import { Router } from 'express'
import authMiddleware from './app/middlewares/authMiddleware'

import UserController from './app/controllers/UserController'
import OrderController from './app/controllers/OrderController'
import AuthController from './app/controllers/AuthController'

const router = Router()

router.post('/users/signUp', UserController.create)
router.post('/users/signIn', AuthController.authenticate)

router.post('/orders/create', authMiddleware, OrderController.create)
router.get('/orders/list', authMiddleware, OrderController.list)

export default router