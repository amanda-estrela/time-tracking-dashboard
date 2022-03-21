# Frontend Mentor - Time tracking dashboard

![Design preview for the Time tracking dashboard coding challenge](./design/desktop-preview.jpg)

## Olá! 👋

Realizei o desafio proposto pelo Frontend Mentor utilizando HTML, CSS e JavaScript.


### Comportamento esperado

- O texto nos cards deve ser alterado conforme o usuário seleciona o periodo desejado. Portanto, ao selecionar "Daily", nos card será exibido o tempo que o usuário dedicou a cada atividade naquele dia, e na parte inferior o total de tempo no dia anterior. No caso de selecionar "Weekly", passa a ser semanal, e na escolha da aopção "Monthly", será exibido em relação ao mês. 

## Deploy
O link para o deploy é:

- https://ttdashboard.netlify.app/


## Minha solução

Para o posicionamento dos items, utilizei da propriedade Grid do CSS, e em alguns momentos a propriedade Flexbox. Para organizar melhor o código CSS, utilizei o SASS.
Para a alteração nos conteúdos utilizei JavaScript, para que em cada evento de click em determinado periodo, os conteudos nos cards de atividades fosse exibido conforme o desejado, escondendo a opção padrão no caso de não ser "Daily".


