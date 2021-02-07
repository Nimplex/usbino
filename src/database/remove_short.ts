import { connection } from "."
import rethinkdb from "rethinkdb"

export default async function (id: string): Promise<void> {
    await rethinkdb.table("shorts").get(id).delete().run(connection as rethinkdb.Connection)
}