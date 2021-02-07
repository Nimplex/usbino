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
    id: {
        length: number,
        capital: boolean,
        lower: boolean,
        numbers: boolean
    }
    forcehttps: boolean
    logs: boolean
}

export interface Short {
    id: string, 
    sid: string,
    link: string, 
    folder?: string,
    usage: number,
    createdat: number
}