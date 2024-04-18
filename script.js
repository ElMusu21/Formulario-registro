const submitFunction = (event) => {
  event.preventDefault(); //previene la actualizacion de la web
  validarFormulario();
};

document
  .getElementById("formulario")
  .addEventListener("submit", submitFunction); // escucha el envio del formulairo

function validarFormulario() {
  const camposTexto = document.querySelectorAll('input[type="text"]');
  let validacionCorrecta = true;

  //ESTE APARTADO VALIDA CAMPOS DE TEXTO

  camposTexto.forEach((campo) => {
    let errorCampo = document.getElementById(
      "error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)
    ); // primera letra mayuscula + id desde segunda letra
  console.log("SOY EL LOG", campo.value.lenght);
    if (campo.value.length < 1) {
      mostrarError(errorCampo, "*Este campo es requerido");
      validacionCorrecta = false;
    } else if (campo.value.length > 0 && campo.value.length < 3) {
      mostrarError(errorCampo, "*Minimo 3 caracteres");
      validacionCorrecta = false;
    } else {
      ocultarError(errorCampo);
    }
  });

  //ESTE APARTADO VALIDA MAIL

  let email = document.getElementById("email");
  let errorEmail = document.getElementById("errorEmail");

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    ocultarError(errorEmail);
  } else {
    mostrarError(errorEmail, "*Ingrese un correo electronico valido");
  }

  //VALIDACION DE EDAD

  const edad = document.getElementById('edad')
  const errorEdad = document.getElementById('errorEdad')

  if(edad.value < 18){
    mostrarError(errorEdad, '*Debes ser mayor de edad para registrarte')
    validacionCorrecta = false;
  }else{
    ocultarError(errorEdad);
  }

  //VALIDACION ACTIVIDAD
  const actividad = document.getElementById('actividad');
  const errorActividad = document.getElementById('errorActividad');

  if(actividad.value == ''){
    mostrarError(errorActividad,'*Debes seleccionar una actividad');
    validacionCorrecta = false;
  }else{
    ocultarError(errorActividad);
  }

  // VALIDACION ESTUDIOS

    const nivelEstudio = document.getElementById('nivelEstudio');
  const errorNivelEstudio = document.getElementById('errorNivelEstudio');

  if(nivelEstudio.value == ''){
    mostrarError(errorNivelEstudio,'*Debes seleccionar una opcion');
    validacionCorrecta = false;
  }else{
    ocultarError(errorNivelEstudio);
  }

  //VALIDACION CONDICIONES DE USO
  const condiciones = document.getElementById('aceptoTerminos')
  const errorCondiciones = document.getElementById('errorAceptoTerminos')

  if(!condiciones.checked){
    mostrarError(errorCondiciones, '*Debes aceptar los terminos y condiciones');
    validacionCorrecta = false;
  }else{
    ocultarError(errorCondiciones);
  }
}

//FUNCIONES A LLAMAR
const mostrarError = (elemento, mensaje) => {
  elemento.textContent = mensaje;
  elemento.style.display = "block";
};

const ocultarError = (elemento) => {
  elemento.textContent = "";
  elemento.style.display = "none";
};
