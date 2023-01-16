import { Router } from 'express'

/** controller */
import SearchProduct from '../controllers/product'

const appRouter = Router()

appRouter.get('/products', SearchProduct)

export default appRouter
