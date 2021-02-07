import { connection } from "."
import rethinkdb from "rethinkdb"

export default async function (id: string): Promise<any | null> {
    const short = await (await rethinkdb.table("shorts").filter({id}).run(connection as rethinkdb.Connection)).toArray()

    return short[0] ? short[0] : null
}