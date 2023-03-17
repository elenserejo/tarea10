
const inputNumeros = document.getElementById('numeros');
const btnCalcular = document.getElementById('calcular');
const divResultado = document.getElementById('resultado');


function calcularSoma() {
  
  const numeros = inputNumeros.value.split(',').map(numero => parseFloat(numero));

  
  const soma = numeros.reduce((total, numero) => total + numero, 0);

  
  divResultado.innerHTML = `A soma dos números é: ${soma}`;

  
  divResultado.innerHTML += '<br><br>Números digitados:<br>';
  numeros.forEach(numero => {
    divResultado.innerHTML += `${numero}<br>`;
  });
}


btnCalcular.addEventListener('click', calcularSoma);
