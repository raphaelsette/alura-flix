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
    var listaDeFilmes = document.getElementById("lista-de-filmes");
    
    var novoFilme = "<img src=" + urlNovoFilme + ">";
    listaDeFilmes.innerHTML = listaDeFilmes.innerHTML + novoFilme;

    document.getElementById("url-do-novo-filme").value = "";
}