document.getElementById('enviar').addEventListener('click', function() {
  let respostasCorretas = 0;
  
  let resposta1 = document.querySelector('input[name="resposta1"]:checked');
  if (resposta1 !== null && resposta1.value === 'C') {
      respostasCorretas++;
  }
  
  let resposta2 = document.querySelector('input[name="resposta2"]:checked');
  if (resposta2 !== null && resposta2.value === 'B') {
      respostasCorretas++;
  }
  
  let resposta3 = document.querySelector('input[name="resposta3"]:checked');
  if (resposta3 !== null && resposta3.value === 'A') {
      respostasCorretas++;
  }
  
  let resposta4 = document.querySelector('input[name="resposta4"]:checked');
  if (resposta4 !== null && resposta4.value === 'A') {
      respostasCorretas++;
  }
  
  let resposta5 = document.querySelector('input[name="resposta5"]:checked');
  if (resposta5 !== null && resposta5.value === 'C') {
      respostasCorretas++;
  }

  let resposta6 = document.querySelector('input[name="resposta6"]:checked');
  if (resposta6 !== null && resposta6.value === 'A') {
      respostasCorretas++;
  }
  
  let respostasErradas = 6 - respostasCorretas;
  
  let resultadoHTML = `<p>Respostas corretas: ${respostasCorretas}</p>`;
  resultadoHTML += `<p>Respostas erradas: ${respostasErradas}</p>`;
  
  document.getElementById('resultado').innerHTML = resultadoHTML;
});
