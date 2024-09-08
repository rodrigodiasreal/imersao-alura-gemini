function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section);

  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  if (!campoPesquisa) {
    section.innerHTML = "<p>Você não pesquisou nenhum atleta.</p>";
    return;
  }

  // Inicializa uma string para armazenar os resultados
  let resultados = "";
  let quantidadeResultados = 0;

  // Itera sobre cada dado e adiciona uma nova div com os resultados
  for (let dado of dados) {
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let tags = dado.tags.toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      quantidadeResultados++;
      resultados += `<div class="item-resultado">
        <h2>
          <a href="https://www.www.instagram.com/rayssalealoficial/" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">
          ${dado.descricao.replace(new RegExp(campoPesquisa, 'gi'), match => `<strong>${match}</strong>`)}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>`;
    }
  }

  // Verifica se foram encontrados resultados
  if (quantidadeResultados === 0) {
    section.innerHTML = `<p>Não encontramos nenhum atleta com o termo: "${campoPesquisa}"</p>`;
  } else {
    section.innerHTML = resultados;
  }
}