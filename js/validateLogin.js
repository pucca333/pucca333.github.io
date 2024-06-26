// VALIDACION DE FORMULARIO DE INSCRIPCION

const form = document.querySelector('form[name="frm"]');
form.addEventListener('submit', (event) => {
    const fname = form.elements['fname'].value;
    const lname = form.elements['lname'].value;
    const codi = form.elements['codi'].value;
    const correo = form.elements['correo'].value;
    const celular = form.elements['celular'].value;

    if (!fname || !lname || !correo || !celular || !codi) {
        event.preventDefault();
        alert('Por favor, complete todos los campos');
    } else if (!validateEmail(correo)) {
        event.preventDefault();
        alert('Por favor, ingrese un correo válido');
    } else {
        alert('GRACIAS POR REGISTRARSE');
        console.log('Redirigiendo a a la pagina principal');
        window.location.href = "AulaVirtual/hmtl/index1.html"; 
    }
});

function validateEmail(correo) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(correo).toLowerCase());
}
