function validarNome() {
  document.body.className = ''
  document.getElementById('result').className = ''
  document.getElementById('result').style.opacity = 0;
  document.getElementById('coracao').style.opacity = 0;
  const name = document.getElementById('nameInput').value.toLowerCase()


  if (name === 'jamille' || name === 'jamille rodrigues' || name === 'jamille soares' || name === 'jamille soares rodrigues') {
    document.getElementById('result').innerText = 'Você é uma pessoa incrível, é uma honra te conhecer, linda'

    document.body.classList.add('jamille')
    document.getElementById('result').className = 'jamilleText'
    document.getElementById('result').style = 'opacity: 1; transition: opacity 1s'
    document.getElementById('coracao').style = 'opacity: 1; transition: opacity 1s'

  }

  else if (name === 'dan' || name === 'jose' || name === 'josé vargas' || name === 'jose vargas' || name === 'josé') {
    document.getElementById('result').textContent = 'Você é um cara nota 10, se dedique e passe nessa prova. Todo esforço valerá a pena no final'
    document.body.className = 'dan'
    document.getElementById('result').style = 'color: #fff; opacity: 1; transition: opacity 1s;'

  }


  else {
    document.getElementById('result').innerText = 'Você não deveria estar aqui, ALERTA VERMELHO ALERTA VERMELHO'.toUpperCase()
    document.body.classList.add('alerta-vermelho')
    document.getElementById('result').style = 'opacity: 1;'
    document.getElementById('result').className = 'alerta-vermelho-text'
  }
  document.querySelector('input').style.display = 'none'
  document.querySelector('button').style.display = 'none'

}

