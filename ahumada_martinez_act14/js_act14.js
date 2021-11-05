const nombre = document.getElementById("name");
const apellidop = document.getElementById("apellidop");
const apellidom = document.getElementById("apellidom");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const cumple = document.getElementById("cumple");

const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  parrafo.innerHTML = "";
  if (nombre.value.length < 3 || nombre.value.length > 50) {
    warnings += `El nombre no es valido <br>`;
    entrar = true;
  }
  if (apellidop.value.length < 3 ||  apellidop.value.length > 50) {
    warnings += `El apellido paterno no es valido <br>`;
    entrar = true;
  }
  if (apellidom.value.length < 3 || apellidom.value.length > 50) {
    warnings += `El apellido materno no es valido <br>`;
    entrar = true;
  }
  if (telefono.value.length = 10) {
    warnings += `El número telefonico debe ser de 10 dígitos <br>`;
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es valido <br>`;
    entrar = true;
  }
  if (cumple.value.length<10) {
    warnings += `La fecha no es valida <br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
});
