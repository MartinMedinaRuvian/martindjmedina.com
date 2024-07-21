function calcularDiferenciaFechas(fechaInicio, fechaFin) {
  let inicio = new Date(fechaInicio);

  if(fechaFin === null){
    fechaFin = new Date()
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

function tiempoTopaz(){
    const fechaInicio = '2023-02-01'
    const fechaFin = null
    document.getElementById('tiempo_topaz').innerText = calcularDiferenciaFechas(fechaInicio, fechaFin)
}

function tiempoGnosoft(){
    const fechaInicio = '2021-08-01'
    const fechaFin = '2023-02-01'
    document.getElementById('tiempo_gnosoft').innerText = calcularDiferenciaFechas(fechaInicio, fechaFin)
}

tiempoGnosoft()
tiempoTopaz()
