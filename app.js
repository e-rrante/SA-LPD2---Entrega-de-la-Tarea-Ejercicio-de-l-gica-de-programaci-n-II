function convertirTemperatura() {
    let celsius;

    // Solicitar la temperatura hasta que se introduzca un número válido
    do {
        const input = prompt("Introduce la temperatura en grados Celsius:");
        celsius = Number(input);

        if (isNaN(celsius)) {
            alert("Por favor, introduce un número válido.");
        }
    } while (isNaN(celsius));

    // Convertir a Fahrenheit y Kelvin
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Imprimir resultados en la consola
    console.log(`Grados Kelvin: ${kelvin}`);
    console.log(`Grados Fahrenheit: ${fahrenheit}`);

    // Mostrar resultados en el DOM
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Grados Kelvin: ${kelvin}</p>
        <p>Grados Fahrenheit: ${fahrenheit}</p>
    `;
}

// Ejecutar la función al cargar la página
window.onload = convertirTemperatura;
