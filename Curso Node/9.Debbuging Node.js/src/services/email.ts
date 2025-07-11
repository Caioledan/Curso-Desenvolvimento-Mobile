async function getBaseEmail(senderName:string){
    let base = `Olá ${senderName}, gostaria de escrever algo`

    return base;
}

async function getHeaderText(): Promise<string> {
    return "EMAIL PARA VOCÊ!"
}

export {getBaseEmail};