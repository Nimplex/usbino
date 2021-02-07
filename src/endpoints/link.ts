import { Application } from "express"
import { Config } from "../types"

export = (app: Application, config: Config) => {
    app.get("/:a?/:b?", async (req: any, res) => {
        const a = req.params.a
        const b = req.params.b
    })
}