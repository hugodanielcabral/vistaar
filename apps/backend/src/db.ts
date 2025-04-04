// db.js
import postgres from 'postgres'
import dotenv from "dotenv"

dotenv.config()

const URL_CONNECTION = process.env.URL_CONNECTION

if (!URL_CONNECTION) {
    console.error("Error: URL Connection is not defined.")
    process.exit(1)
}

const sql = postgres(URL_CONNECTION) 

export default sql