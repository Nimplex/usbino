import { Application } from "express"
import { Config } from "../types"
import path from "path"
import get_links from "../database/get_links"

export = (app: Application, config: Config) => {
    app.get("/panel", async (req, res) => {
        const links = await get_links()
        
        return res
            .status(200)
            .render(path.join("../public/pages/index.ejs"), {
                links
            })
    })
}