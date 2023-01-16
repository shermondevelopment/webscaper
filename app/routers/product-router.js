import { Router } from 'express'

/** controller */
import SearchProduct from '../controllers/product-controller.js'

const appRouter = Router()

appRouter.get('/products', SearchProduct)

export default appRouter
