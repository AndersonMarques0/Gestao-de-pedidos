document.addEventListener('DOMContentLoaded', () => {
    const pedidosContainer = document.getElementById('pedidos-container');

    // Função para carregar os dados do pedido
    function carregarPedidoConcluido() {
        const pedidoData = JSON.parse(localStorage.getItem('pedidoConcluido'));

        if (pedidoData) {
            // Criação do card de pedido
            const pedidoCard = document.createElement('div');
            pedidoCard.className = 'pedido-card';

            const nomeElement = document.createElement('p');
            nomeElement.textContent = `Cliente: ${pedidoData.nome}`;
            pedidoCard.appendChild(nomeElement);

            const mesaElement = document.createElement('p');
            mesaElement.textContent = `Mesa: ${pedidoData.mesa}`;
            pedidoCard.appendChild(mesaElement);

            const itensList = document.createElement('ul');
            pedidoData.itens.forEach(item => {
                const itemElement = document.createElement('li');
                itemElement.textContent = item;
                itensList.appendChild(itemElement);
            });
            pedidoCard.appendChild(itensList);

            pedidosContainer.appendChild(pedidoCard);

            // Opcional: remover o item após carregar os dados
            localStorage.removeItem('pedidoConcluido');
        }
    }

    carregarPedidoConcluido(); // Chama a função para carregar o pedido
});

