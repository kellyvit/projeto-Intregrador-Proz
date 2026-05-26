const acoes = [
  { icone: '💧', texto: 'Economize água nos processos industriais' },
  { icone: '⚡', texto: 'Reduza o consumo de energia nas fábricas' },
  { icone: '♻️', texto: 'Recicle materiais e reduza desperdícios' },
  { icone: '🌱', texto: 'Utilize práticas sustentáveis na produção' },
  { icone: '☀️', texto: 'Invista em energias renováveis' },
  { icone: '🌍', texto: 'Ajude a preservar o meio ambiente' }
];

const container = document.querySelector('#container-acoes')

for(let i = 0; i < acoes.length; i++) {
  const item = acoes [i]
  const div = document.createElement('div');
  div.className = "acao-icone"
   div.innerHTNL ='<div class="acao-icone">${item.icone}</div> <p class="acoes-texto">${item.texto}</p>' 
  container.appendChild(div)
  }

  const nav = document.querySelector('menu')

  window.addEventListener('scroll', () => {
    if(window.scrollY > 10) {
      nav.style.opacity = '0.5'
    } else {
      nav.style.opacity = '1'
    }
  })