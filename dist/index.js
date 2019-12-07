"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
const _app_folder = "./public"
const app = _express2.default.call(void 0, )

app.get("*.*", _express2.default.static(_app_folder, { maxAge: "1y" }))

app.all("/", (req, res) => {
  res.status(200).sendFile("/", { root: _app_folder })
})

app.use(_routes2.default)

app.listen(3000)
