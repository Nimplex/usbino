import express from "express"
import body_parser from "body-parser"
import { renderFile } from "ejs"
import { log } from "./utils/logger"
import { connect } from "./database"
import { generate_string } from "./utils/string"

export const UID = generate_string(8, true, true, true)

const config = require(process.argv.includes("dev") ? "../config-dev.json" : "../config.json")
const app = express()

app.use(body_parser.urlencoded({extended: true}))
app.use("/public", express.static("./public"))
app.engine("html", renderFile)
app.set("view engine", "ejs")

require("./endpoints/panel")(app, config)
require("./endpoints/short")(app, config)

app.listen(config.port, () => {
    if (config.logs) log("info", `Website started. (${config.port})`)
})

connect(config)