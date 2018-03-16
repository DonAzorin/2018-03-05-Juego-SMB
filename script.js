var p1 = 0
var p2 = 0
var pc = 0
function playervsplayer(form) {
  var vp = [form.p1.value, form.p2.value]
  console.log(vp);

  if (vp[0] == 'piedra' && vp[1] == 'papel') {
    ganaP2();
  } else if (vp[0] == 'piedra' && vp[1] =='tijera') {
    ganaP1();
  } else if (vp[0]== 'papel' && vp[1] == 'piedra') {
    ganaP1();
  } else if (vp[0] == 'papel' && vp[1] == 'tijera') {
    ganaP2();
  } else if (vp[0] == 'tijera' && vp[1] == 'piedra') {
    ganaP2();
  } else if (vp[0] == 'tijera' && vp[1] == 'papel') {
    ganaP1();
  } else {
    console.log('empate');
  }
}

function playervspc (form) {
  var pc = Math.round(Math.random()*3)
  var p1 = form.p1.value

  if (pc == 0) {
    pc = 'piedra';
    // eligeBowPi();
  } else if (pc == 1) {
    pc = 'papel';
    // eligeBowPa();
  } else if (pc == 2 | 3) {
    pc = 'tijera';
    // eligeBowTi();
  }

  var vspc = [pc, p1]
  console.log(vspc);

  if (vspc[0] == 'piedra' && vspc[1] == 'papel') {
    ganaP1();
  } else if (vspc[0] == 'piedra' && vspc[1] =='tijera') {
    ganaPC();
  } else if (vspc[0]== 'papel' && vspc[1] == 'piedra') {
    ganaPC();
  } else if (vspc[0] == 'papel' && vspc[1] == 'tijera') {
    ganaP1();
  } else if (vspc[0] == 'tijera' && vspc[1] == 'piedra') {
    ganaP1();
  } else if (vspc[0] == 'tijera' && vspc[1] == 'papel') {
    ganaPC();
  } else {
    console.log('empate');
  }
}

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

function ganaP1(){
  p1 = p1 + 1
  document.getElementById('juegosMario').innerHTML = p1
}

function ganaP2(){
  p2 = p2 + 1;
  document.getElementById('juegosLuigi').innerHTML = p2
}

function ganaPC(){
  pc = pc + 1;
  document.getElementById('juegosBowser').innerHTML = pc
}

// function eligeBowPi(){
//   document.getElementsByName("Bowser").value = "piedra"
// }
//
// function eligeBowPa(){
//   document.getElementsByName("Bowser").value = "papel"
// }
//
// function eligeBowTi(){
//   document.getElementsByName("Bowser").value = "tijera"
// }
