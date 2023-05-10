const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const resultados = document.querySelector('.resultados');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    resultados.innerHTML = '';

    const jogo = input.value.toLowerCase();

    fetch(`http://localhost:3001/product?name_like=${jogo}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                data.forEach(jogo => {
                    const card = document.createElement('div');
                    card.classList.add('card');
                    card.innerHTML = `
                        <h2>${jogo.name}</h2>
                        <img src="${jogo.img}" alt="${jogo.name}">
                    `;
                    resultados.appendChild(card);
                });
            } else {
                const card = document.createElement('div');
                card.classList.add('notFound');
                card.innerHTML = `Nenhum jogo encontrado para "${jogo}".`;
                resultados.appendChild(card);
            }
        })
        .catch(error => {
            console.log(error);
            resultados.innerHTML = 'Ocorreu um erro ao buscar os jogos.';
        });
});
