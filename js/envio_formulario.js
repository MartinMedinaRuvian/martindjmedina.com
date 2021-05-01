const form = document.querySelector('.form');

form.addEventListener('submit', sendMessage);

function sendMessage(event) {
    event.preventDefault();


    const formData = new FormData(this);
    const btnsend = document.querySelector('#btnsend');
    

    const messageFormat = `mailto:martindjmedina@hotmail.com, martinruvian@gmail.com?cc=${formData.get('email')}&subject=Desde: martindjmedina.com. Nombre: ${formData.get('name')}&body=Mensaje: ${formData.get('message')} Contacto: ${formData.get('email')}`;

    btnsend.setAttribute('href', messageFormat);
    btnsend.click();
}