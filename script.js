const listFigures = []





const listFrames = []




function separateItens(itens) {
    for (let i = 0; i < itens.length; i++) {
        if (itens[i].type == "Decorative frames") {
            listFrames.push(itens[i])
        } else if (itens[i].type == "Action Figures") {
            listFigures.push(itens[i])
        }
    }
}
separateItens(itens)






function criarItens(itens, classe) {
    let ulItens = document.querySelector(`.${classe}`)

    for (let i = 0; i < itens.length; i++) {
        let listaItens = itens[i]

        let liItens = document.createElement('li')

        let imgItens = document.createElement('img')
        imgItens.src = listaItens.image
        imgItens.alt = listaItens.name

        let h2Itens = document.createElement('h2')
        h2Itens.classList.add("titulo-card")
        h2Itens.innerText = listaItens.name

        let pItens = document.createElement('p')
        pItens.classList.add("textos-1")
        pItens.innerText = listaItens.price

        ulItens.appendChild(liItens)
        liItens.appendChild(imgItens)
        liItens.appendChild(h2Itens)
        liItens.appendChild(pItens)
  

    }
}
criarItens(listFigures, 'caixa-1')
criarItens(listFrames, 'caixa-2')




















