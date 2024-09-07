function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);
  
    // Inicializa uma string para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado e adiciona uma nova div com os resultados
    for (let dado of dados) {
      resultados += `<div class="item-resultado">
        <h2>
          <a href="https://www.www.instagram.com/rayssalealoficial/" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">
          ${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>`
    }
  
    // Insere os resultados na seção
    section.innerHTML = resultados
  }



