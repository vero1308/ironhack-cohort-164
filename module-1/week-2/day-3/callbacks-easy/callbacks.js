function a(clbk) {
  return "i'am a ! " + clbk();
}

function b() {
  return "i'am b !";
}


const r = a(b);
console.log(r);