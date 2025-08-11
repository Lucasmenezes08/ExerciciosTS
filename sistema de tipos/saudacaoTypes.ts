interface Usuario {
    id: number,
    nome: string,
    apelido?: string,
}


const gerarSaudacao = (usuario:Usuario) => {
    if (usuario.apelido){
        return `olá , ${usuario.apelido} !`
    }
    else {
        return `olá , ${usuario.nome} !`
    }
}   


const usuarioComApelido: Usuario = { id: 1, nome: "Carlos Ferreira", apelido: "Carlão" };
const usuarioSemApelido: Usuario = { id: 2, nome: "Beatriz Andrade" };

console.log(gerarSaudacao(usuarioComApelido))
console.log(gerarSaudacao(usuarioSemApelido))