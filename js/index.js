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

    console.log('Inicio: ' + inicio, 'Fin: ' + fin);

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
