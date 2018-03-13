function playervsplayer(form) {
  var vp = [form.p1.value, form.p2.value]
  console.log(vp);

  if (vp[0] == 'piedra' && vp[1] == 'papel') {
    console.log('gana p2');
  } else if (vp[0] == 'piedra' && vp[1] =='tijera') {
    console.log('gana p1');
  } else if (vp[0]== 'papel' && vp[1] == 'piedra') {
    console.log('gana p1');
  } else if (vp[0] == 'papel' && vp[1] == 'tijera') {
    console.log('gana p2');
  } else if (vp[0] == 'tijera' && vp[1] == 'piedra') {
    console.log('gana p2');
  } else if (vp[0] == 'tijera' && vp[1] == 'papel') {
    console.log('gana p1');
  } else {
    console.log('empate');
  }
}

function playervspc (form) {
  var pc = Math.round(Math.random()*3)
  var p1 = form.p1.value

  if (pc == 0) {
    pc = 'piedra';
    console.log(pc);
  } else if (pc == 1) {
    pc = 'papel';
    console.log(pc);
  } else if (pc == 2 | 3) {
    pc = 'tijera';
    console.log(pc);
  }

  var vspc = [pc, p1]
  console.log(vspc);

  if (vspc[0] == 'piedra' && vspc[1] == 'papel') {
    console.log('gana p1');
  } else if (vspc[0] == 'piedra' && vspc[1] =='tijera') {
    console.log('gana pc');
  } else if (vspc[0]== 'papel' && vspc[1] == 'piedra') {
    console.log('gana pc');
  } else if (vspc[0] == 'papel' && vspc[1] == 'tijera') {
    console.log('gana p1');
  } else if (vspc[0] == 'tijera' && vspc[1] == 'piedra') {
    console.log('gana p1');
  } else if (vspc[0] == 'tijera' && vspc[1] == 'papel') {
    console.log('gana pc');
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

function marcador() {
  
}
