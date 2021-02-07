export interface Config {
    port: string
    url: string
    domain: string
    database: {
        host: string
        port: number
        user: string
        password?: string
        db: string
    }
    admin: string
}