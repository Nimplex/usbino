import { connection } from "."
import rethinkdb from "rethinkdb"
import { Short } from "../types"

export default async function (short: Short): Promise<any | null> {
    await rethinkdb.table("shorts").insert(short).run(connection as rethinkdb.Connection)
}