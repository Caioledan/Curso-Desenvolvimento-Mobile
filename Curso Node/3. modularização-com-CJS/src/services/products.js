// Aqui ficam todas as funções que lidam com o produto

const productType = {
    version: "Digital",
    tax: "x1",
}

async function getFullName(codeId, productName) {
    return codeId + "--" + productName;
}

async function getProductLabel(productName) {
    return "Product " + productName;
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
}