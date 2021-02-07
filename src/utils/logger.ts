const RESET = "\u001b[0m"

export const log_types: {[type: string]: string} = {
    "info": "\u001b[32m",
    "error": "\u001b[31m"
}

type log = "info" | "error"

export function log(type: log, message: string): void {
    console.log(`[${log_types[type]}${type.toUpperCase()}${RESET}${" ".repeat(6 - type.length)}| ${(new Date()).toLocaleString()}]: ${log_types[type]}${message}${RESET}`)
}