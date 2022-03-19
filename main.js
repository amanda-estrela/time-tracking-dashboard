const options = document.querySelectorAll(".periodo") //aray com os periodos para clicar  ==>>periodo é cada elemento 3 elementos


options.forEach(function(periodo, indice) {
    const period = options[indice].classList[1];   //string dia semana mes
    const content  = document.querySelectorAll(`.card__conteudo-${period}`);

    periodo.addEventListener('click', ()=> {
        const periodoDefault = document.querySelector(".ativo")
        periodoDefault.classList.remove("ativo")

        const cardConteudoDefault = document.querySelectorAll(".ativo")
        cardConteudoDefault.forEach(function(elemento){
            elemento.classList.remove("ativo")
        })
            
        content.forEach(function(selecionado){
            selecionado.classList.add("ativo")
        })

        options[indice].classList.add('ativo');
        }


)})
