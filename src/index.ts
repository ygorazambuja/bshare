import express from "express"
import routes from "./routes"
const _app_folder = "./public"
const app = express()

app.get("*.*", express.static(_app_folder, { maxAge: "1y" }))

app.all("/", (req, res) => {
  res.status(200).sendFile("/", { root: _app_folder })
})

app.use(routes)

app.listen(process.env.PORT || 3000)
