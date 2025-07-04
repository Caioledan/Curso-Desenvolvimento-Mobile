const produto = require("./services/products")
const {client, devArea} = require("./services/config") // crtl + barra de espaço

async function main() {
    console.log("Carrinho de compras:");
    console.log(produto.getFullName(10, "Arroz"))
}



main();