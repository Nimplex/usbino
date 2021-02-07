import { Application, Response } from "express"
import { Config, Short } from "../types"
import path from "path"
import get_shorts from "../database/get_shorts"
import { UID } from ".."
import { generate_string } from "../utils/string"
import create_short from "../database/create_short"
import get_short from "../database/get_short"
import remove_short from "../database/remove_short"

function error(res: Response, message: string): Response {
    return res
        .status(400)
        .json({error: message})
}


export = (app: Application, config: Config) => {
    app.get("/panel", async (req, res) => {
        const shorts = await get_shorts()
        
        return res
            .status(200)
            .render(path.join("../public/pages/index.ejs"), {
                shorts, UID
            })
    })

    app.post("/add", async (req, res) => {
        const id = req.body.id || generate_string(config.id.length, config.id.capital, config.id.lower, config.id.numbers)
        const link = req.body.link
        const folder = req.body.folder || "all"
        const verify = req.body.verify

        if (verify != UID) {
            return error(res, "Invalid verify ID.")
        }

        if (!link) {
            return error(res, "Link was not provided.")
        }

        const short: Short = {
            id: folder as string + "-" + id as string, 
            sid: id,
            folder: folder as string,
            link: link as string, 
            usage: 0,
            createdat: Date.now()
        }

        await create_short(short)

        return res
            .status(200)
            .json(short)
    })

    app.post("/remove", async (req, res) => {
        const verify = req.body.verify
        const id = req.body.id as string || ""
        
        if (verify != UID) {
            return error(res, "Invalid verify ID.")
        }
        
        const short = get_short(id)

        if (!short) {
            return error(res, "Short does not exist.")
        }

        await remove_short(id)

        return res
            .status(200)
            .json(short)
    })
}