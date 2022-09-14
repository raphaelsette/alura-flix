function listarFilmes() {
    var listaDeFilmes = document.getElementById("lista-de-filmes");

    elemento = "";
    for (i=0; i < todosOsFilmes.length; i++) {
        elemento += "<div>";
        elemento += "<img alt='Capa do Filme' src=" + todosOsFilmes[i].url + ">";
        elemento += "<h1>" + todosOsFilmes[i].nome + "</h1>";
        elemento += "</div>"
    }
    listaDeFilmes.innerHTML = elemento;
}
function adicionarFilme () {
    var nomeDoNovoFilme = document.getElementById("nome-do-novo-filme").value;
    var urlDoNovoFilme = document.getElementById("url-do-novo-filme").value;

    if (nomeDoNovoFilme == "") {
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Você esqueceu o nome do filme!'});

    } else if (urlDoNovoFilme.endsWith(".JPG") || urlDoNovoFilme.endsWith(".jpg") || urlDoNovoFilme.endsWith(".png") || urlDoNovoFilme.endsWith(".PNG")) {
        todosOsFilmes.push(nomeDoNovoFilme = {nome:nomeDoNovoFilme, url:urlDoNovoFilme});
        Swal.fire({icon: 'success',title: 'Sucesso',text: 'Filme Adicionado!'});

        document.getElementById("nome-do-novo-filme").value = "";
        document.getElementById("url-do-novo-filme").value = "";
        listarFilmes();
    } else {
        Swal.fire({icon: 'error',title: 'Oops...',text: 'URL da Capa Inválida!'});
    }
}
var todosOsFilmes = [
    {
        nome:'Interstellar',
        url:'https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg'
    },
    {
        nome:'Passageiros',
        url:'http://br.web.img1.acsta.net/pictures/16/11/23/21/45/138805.jpg'
    },
    {
        nome:'John Wick 3 - Parabellum',
        url:'https://br.web.img3.acsta.net/pictures/19/04/03/21/31/0977319.jpg'
    },
    {
        nome:'Avatar',
        url:'https://i.pinimg.com/originals/5d/68/49/5d6849092aea2a932f2a7f201bea4a66.jpg'
    },
    {
        nome:'Warcraft',
        url:'https://br.web.img2.acsta.net/pictures/16/03/30/18/58/593834.jpg'
    },
    {
        nome:"V de Vingança",
        url:'https://br.web.img2.acsta.net/pictures/210/506/21050637_20131017235623573.jpg'
    }
];
listarFilmes();