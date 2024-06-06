function calcular(operacion) {
    const cantidad1 = parseFloat(document.getElementById('cantidad1').value);
    const cantidad2 = parseFloat(document.getElementById('cantidad2').value);
    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = cantidad1 + cantidad2;
            break;
        case 'resta':
            resultado = cantidad1 - cantidad2;
            break;
        case 'multiplicacion':
            resultado = cantidad1 * cantidad2;
            break;
        case 'division':
            if (cantidad2 !== 0) {
                resultado = cantidad1 / cantidad2;
            } else {
                resultado = 'No se puede dividir por cero';
            }
            break;
        default:
            resultado = 'Operación no válida';
    }

    document.getElementById('resultado').textContent = resultado;
}
