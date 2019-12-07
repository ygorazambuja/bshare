"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');





var _TorrentControllers = require('../controllers/TorrentControllers');

const routes = _express.Router.call(void 0, )

routes.get("/search/:query/:items", _TorrentControllers.searchTorrent)

routes.get("/torrent/:query", _TorrentControllers.TorrentSearch)
routes.get("/torrentCustomSearch", _TorrentControllers.TorrentCustomSearch)
routes.get("/providers", _TorrentControllers.GetProviders)

exports. default = routes
