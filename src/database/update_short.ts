import { connection } from "."
import rethinkdb from "rethinkdb"
import { Short } from "../types"

export default async function (short: Short): Promise<void> {
    await rethinkdb.table("shorts").replace(short).run(connection as rethinkdb.Connection)
}