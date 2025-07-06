import connectToDatabase from "./database/db.js";



async function main() {
    await connectToDatabase("Caio", "1234")
}

main();