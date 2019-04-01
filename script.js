function playerVsPlayer (form) {
  let n1 = form.p1.value;
  let n2 = form.p2.value;

  ganador(n1, n2);
}

function playerVsPc (form) {
  let n1 = form.p1.value;
  let n2 = Math.floor(Math.random()*3)+1;
  //Colocar el margen al elemento a partir de n2... colocarles una clase con data-tab quizá
  ganador(n1, n2);
}

function ganador (n1, n2) {
  
  result = parseFloat(n1, 10) - parseFloat(n2, 10)
  result = parseFloat(result, 10).toString(10)

  if (result == "1" || result == "-2") {
    let player = 'juegosP1'
    score(player)
  } else if (result == "-1" || result == "2") {
    let player = 'juegosP2'
    score(player)
  } else {
    // let draw = document.getElementById('Empate').innerHTML
    // score(draw);
    console.log('empate')
  }
}
// FACTORIZA ESTAS FUNCIONES
//CONSIDERA SOLUCION DE RED SOCIAL GENÉRICA
function ocultap1() {
  var muestra = document.getElementById('p1')
  if (p1.style.display==='grid') {
    muestra.style.display= 'none'
  } else {
    muestra.style.display= 'grid'
  }
}

function ocultap2() {
  var muestra = document.getElementById('p2')
  if (p2.style.display==='grid') {
    muestra.style.display= 'none'
  } else {
    muestra.style.display= 'grid'
  }
}

function score(player) {
  let point = 1
  let winner = document.getElementById(`${player}`).innerHTML
  winner = Number(winner)
  winner = winner + point
  document.getElementById(`${player}`).innerHTML = winner

  // let draw = draw + 1
  //   console.log('empate');
  }

