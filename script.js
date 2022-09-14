function adicionarFilme () {
    var urlNovoFilme = document.getElementById("url-do-novo-filme").value;
    var statusAdicionar = document.getElementById("status-adicionar");

    if (urlNovoFilme.endsWith(".JPG") || urlNovoFilme.endsWith(".jpg")) {
        listarFilmes(urlNovoFilme);
        statusAdicionar.innerHTML = "Filme adicionado."
    } else {
        statusAdicionar.innerHTML = "Endereço de filme inválido."
    }
}
function listarFilmes(urlNovoFilme) {
    arrayFilmes.push(urlNovoFilme);

    elemento = "";
    for (i=0; i < arrayFilmes.length; i++) {
        elemento += "<img src=" + arrayFilmes[i] + ">";
    }

    console.log(arrayFilmes);
    console.log(elemento);
    
    listaDeFilmes.innerHTML = elemento;

    document.getElementById("url-do-novo-filme").value = "";
}
var arrayFilmes = [];
var listaDeFilmes = document.getElementById("lista-de-filmes");