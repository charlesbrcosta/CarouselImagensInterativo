// Selecionando os elementos do carrossel e os botões de navegação
let btnNext = document.getElementById('next');
let btnPrev = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

// Ação ao clicar no botão "Próximo"
btnNext.onclick = () => {
    showSlider('next'); // Chama a função showSlider com o argumento 'next'
}

// Ação ao clicar no botão "Anterior"
btnPrev.onclick = () => {
    showSlider('prev');
}

// Definindo o tempo de execução do carrossel e uma variável para o timeout
let timRunning = 3000; // Tempo em milissegundos (3 segundos)
let runTimeOut;

// Função para mostrar o próximo ou o anterior slide
function showSlider(type){
    // Selecionando todos os itens do carrossel e suas miniaturas
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    // Verifica se o tipo de ação é 'next' (próximo) ou 'prev' (anterior)
    if(type === 'next'){
        // Move o primeiro item para o final da lista no carrossel e nas miniaturas
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        // Adiciona a classe 'next' à div do carrossel para aplicar o efeito de transição
        carouselDom.classList.add('next');
    } else {
        // Calcula a posição do último item na lista
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        // Adiciona a classe 'prev' à div do carrossel para aplicar o efeito de transição
        carouselDom.classList.add('prev');
    }

    // Limpa o timeout anterior para evitar múltiplas execuções simultâneas
    clearTimeout(runTimeOut);

    // Define um novo timeout para remover as classes de transição após o tempo especificado
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timRunning);
}