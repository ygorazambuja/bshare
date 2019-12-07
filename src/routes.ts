import { Router } from "express"
import torrentRoutes from "./routes/torrentRoutes"

const routes = Router()

routes.use(torrentRoutes)

export default routes
