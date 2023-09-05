document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector('#formulario')
    
    formulario.addEventListener('submit', evento => {
        evento.preventDefault();
        const datosFormulario = new FormData(formulario);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: datosFormulario
        })
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data); // Puedes hacer algo con los datos de respuesta aquí
        })
        .catch(error => {
            console.error('Error al enviar datos:', error);
        });
    });
});