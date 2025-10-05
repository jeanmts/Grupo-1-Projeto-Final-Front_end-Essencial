const buscarFilmes = async () => {
  const inputHeader = document.querySelector('.input--header');
  const btnHeader = document.querySelector('.btn--header');

  btnHeader.addEventListener('click', async (e) => {
    e.preventDefault();
    const palavra = inputHeader.value;
    if (!palavra) return;

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${palavra}&apikey=e547e092`);
      const dados = await response.json();

      if (!dados.Search) {
        alert("Nenhum filme encontrado.");
        return;
      }

      const containerModal = document.getElementById('modal-filmes-container');
      containerModal.innerHTML = "";

      dados.Search.forEach(filme => {
        const divCol = document.createElement('div');
        divCol.classList.add('col-md-3', 'mb-3');

        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = filme.Poster !== "N/A" ? filme.Poster : "img/placeholder.png";

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h6');
        title.textContent = filme.Title;

        cardBody.appendChild(title);
        card.append(img, cardBody);
        divCol.appendChild(card);
        containerModal.appendChild(divCol);
      });

      const modal = new bootstrap.Modal(document.getElementById('filmesModal'));
      modal.show();

    } catch (err) {
      console.error(err);
      alert("Erro ao buscar filmes.");
    }
  });
};

buscarFilmes();