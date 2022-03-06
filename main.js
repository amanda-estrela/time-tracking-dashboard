const options = document.querySelectorAll(".periodo")


for (let contador = 0; contador < options.length; contador++){
    const period = options[contador].classList[1];
    const content  = document.querySelector(`.card__conteudo-${period}`);

    options.addEventListener('click', ()=> {
   /* content.classList.add('ativo');   
    options[contador].classList.add('ativo');
    })

    while(!(options.indexOf(period)) = contador)) {
        content.classList.remove('ativo');
        options[!(contador)].classList.remove('ativo');
    }
}*/
    
        switch (options.indexOf(period) = contador){
            case true:
                content.classList.add('ativo');
                options[contador].classList.add('ativo');
                break
            default:
                content.classList.remove('ativo');
                options[contador].classList.remove('ativo');
        }
    })}


