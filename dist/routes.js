"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _torrentRoutes = require('./routes/torrentRoutes'); var _torrentRoutes2 = _interopRequireDefault(_torrentRoutes);

const routes = _express.Router.call(void 0, )

routes.use(_torrentRoutes2.default)

exports. default = routes
