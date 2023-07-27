 //Crear un programa que pida letras continuamente hasta que se pulse el botón “cancelar”.
function concatenarLetras() {
    let letrasConcatenadas = '';
    
    while (true) {
    const input = prompt('Introduce una letra:');

    if (input === null) {
        break;
     // Si introducimos un carácter que no sea una letra el programa lanzará un alert indicando que sólo se pueden introducir letras y continuará ejecutándose.

    } else if (/^[a-zA-Z]$/.test(input)) {
        letrasConcatenadas += input;
    } else {
        alert('Solo se pueden introducir letras.');
    }
    }

    //El programa debe de mostrar todas las letras concatenadas al final
    document.getElementById('letrasConcatenadas').textContent = letrasConcatenadas;
}
