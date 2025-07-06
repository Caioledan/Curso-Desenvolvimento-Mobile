import chalk from "chalk";

async function connectToDatabase(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log(chalk.green("Conexão estabelecida!"));
    }
    else {
        console.log(chalk.red("Falha na conexão!\nDados não reconhecidos"));
    }
}

export default connectToDatabase;