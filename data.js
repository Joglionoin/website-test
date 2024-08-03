const { MongoClient } = require("mongodb")
const uri = "mongodb://localhost:27017/test"

async function main() {
    const client = new MongoClient(uri)
    try {
        await client.connect()
        console.log("Connected")
    } finally {
        await client.close()
    }
}
main().catch(console.error)
