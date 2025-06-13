let plataformas = [];
let lang = {};
let currentLang = 'pt';

async function carregarDados() {
  const resPlataformas = await fetch('data/plataformas.json');
  plataformas = await resPlataformas.json();

  await carregarIdioma(currentLang);
  exibirPlataformas('');
}

async function carregarIdioma(idioma) {
  const resLang = await fetch(`lang/${idioma}.json`);
  lang = await resLang.json();
  document.getElementById('titulo').innerText = lang.title;
  document.getElementById('search').placeholder = lang.search_placeholder;
}

function exibirPlataformas(filtro) {
  const container = document.getElementById('plataformas');
  container.innerHTML = '';

  plataformas
    .filter(p => p.nome.toLowerCase().includes(filtro.toLowerCase()))
    .forEach(p => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<h2
