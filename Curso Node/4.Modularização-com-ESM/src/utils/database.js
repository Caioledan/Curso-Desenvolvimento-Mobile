async function connectToDatabase(dataName) {
    console.log(`conectado ao banco ${dataName}.`);
}

async function disconnectDatabase() {
    console.log("Desconectado do banco");
}

const databaseType ={
    userType: "admin",
    typeData: "dataLocal",
}

export {
    connectToDatabase,
    disconnectDatabase,
    databaseType,
}