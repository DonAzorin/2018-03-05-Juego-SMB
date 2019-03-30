var p1 = 0
var p2 = 0
var pc = 0

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
    ganaP1();
    
  } else if (result == "-1" || result == "2") {
    ganaP2();
  } else {
    console.log('empate')
  }
}
// FACTORIZA ESTAS FUNCIONES
function ocultap1() {
  var muestra = document.getElementById('p1')
  if (p1.style.visibility==='visible') {
    muestra.style.visibility= 'hidden'
  } else {
    muestra.style.visibility= 'visible'
  }
}

function ocultap2() {
  var muestra = document.getElementById('p2')
  if (p2.style.visibility==='visible') {
    muestra.style.visibility= 'hidden'
  } else {
    muestra.style.visibility= 'visible'
  }
}

//ELIMINA 'juegosPERSONAJE' Y REEMPLAZA POR 'juegosP1' 'juegosP2'
function ganaP1(){
  p1 = p1 + 1
  document.getElementById('juegosMario').innerHTML = p1
}

//INTEGRA LAS DOS FUNCIONES EN UNA
function ganaP2(){
  p2 = p2 + 1;
  document.getElementById('juegosLuigi').innerHTML = p2
}

function ganaPC(){
  pc = pc + 1;
  document.getElementById('juegosBowser').innerHTML = pc
}