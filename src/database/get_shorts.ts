import { connection } from "."
import rethinkdb from "rethinkdb"

export default async function (): Promise<any | null> {
    const shorts = await (await rethinkdb.table("shorts").orderBy(rethinkdb.desc("createdat")).run(connection as rethinkdb.Connection)).toArray()
    return shorts
}