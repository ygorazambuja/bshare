import { Router } from "express"
import {
  TorrentSearch,
  TorrentCustomSearch,
  GetProviders,
  searchTorrent
} from "../controllers/TorrentControllers"

const routes = Router()

routes.get("/search/:query/:items", searchTorrent)

routes.get("/torrent/:query", TorrentSearch)
routes.get("/torrentCustomSearch", TorrentCustomSearch)
routes.get("/providers", GetProviders)

export default routes
