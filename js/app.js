let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('Informe o nome do amigo, por favor!');
        return;
    }

    if(amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    
    // adicionar vírgula na lista -- substituído
    // if(lista.textContent == '') {
    //     lista.textContent = amigo.value;
    // } else {
    //     lista.textContent = lista.textContent + ', ' + amigo.value;
    // }
    amigo.value = '';   
    
    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 amigos!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');    
   
    for (let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }        
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio =  document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
         
    for (let i = 0; i < amigos.length; i++) {
         //  cria um elemento de parágrafo para cada amigo
         let paragrafo = document.createElement('p');
         paragrafo.textContent = amigos[i];

        //  adiciona um evento ao clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        // adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }                
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
