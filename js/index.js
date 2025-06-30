function fechaActual() {
    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    const dia = day < 10 ? '0' + day : day
    const mes = month < 10 ? '0' + month : month

    return year + '-' + mes + '-' + dia
}

function calcularDiferenciaFechas(fechaInicio, fechaFin) {
    let inicio = new Date(fechaInicio);

    if (fechaFin === null) {
        fechaFin = fechaActual()
    }

    let fin = new Date(fechaFin);

    let años = fin.getFullYear() - inicio.getFullYear();
    let meses = fin.getMonth() - inicio.getMonth();

    if (meses < 0) {
        años--;
        meses += 12;
    }

    if (fin.getDate() < inicio.getDate()) {
        meses--;
        if (meses < 0) {
            años--;
            meses += 12;
        }
    }

    let resultado = `${años} ${años === 1 ? "año" : "años"} y ${meses} ${meses === 1 ? "mes" : "meses"}`;

    return resultado
}

document.getElementById('tiempo_topaz').innerText = calcularDiferenciaFechas('2023-02-01', null)
document.getElementById('tiempo_gnosoft').innerText = calcularDiferenciaFechas('2021-08-01', '2023-02-01')

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const images = document.querySelectorAll('.experimento .img-proyecto');
    const span = document.getElementsByClassName("close-modal-button")[0];

    images.forEach(image => {
        image.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    span.onclick = function() { 
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
