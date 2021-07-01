const cmLineal = 'cm';
const cmCuadrado = 'cm²';

//! Código del Cuadrado


function perimetroCuadrado(lado) {
    lado = parseFloat(lado);
    return (lado * 4).toFixed(2);
}

function areaCuadrado(lado) {
    lado = parseFloat(lado);
    return (lado ** 2).toFixed(2);
}



//! Código del Triangulo

function perimetroTriangulo(lado1, lado2, base) {
    const lados = [lado1, lado2, base];
    let perimetro = 0;
    
    for (let lado of lados) {
        lado = parseFloat(lado);
        perimetro = perimetro + lado;
    }

    return perimetro.toFixed(2);
}

function areaTriangulo(base, altura) {
    const medidas = [base, altura];
    for (let medida of medidas) {
        medida = parseFloat(medida);
    }
    return ((base * altura) / 2).toFixed();
}


//! Código del círculo

const PI = Math.PI;


function diametroCirculo(radio) {
    radio = parseFloat(radio);
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return (diametro * PI).toFixed(2);
}


function areaCirculo(radio) {
    radio = parseFloat(radio);
    return ((radio ** 2) * PI).toFixed(2);
}


//* DOM Manipulation


//! Cuadrado

function calcularPerimetroCuadrado() {
    const lado = document.getElementById('ladoCuadrado').value;

    const perimetro = perimetroCuadrado(lado);
    document.getElementById('outputPerimetroCuadrado').innerHTML = `${perimetro}${cmLineal}`
}

function calcularAreaCuadrado() {
    const lado = document.getElementById('ladoCuadrado').value;

    const area = areaCuadrado(lado);
    document.getElementById('outputAreaCuadrado').innerHTML = `${area}${cmCuadrado}`;
}


//! Triángulo

const calcularPerimetroTriangulo = () => {
    const lado1 = document.getElementById('ladoTriangulo1').value;
    const lado2 = document.getElementById('ladoTriangulo2').value;
    const base = document.getElementById('baseTriangulo').value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    document.getElementById('outputPerimetroTriangulo').innerHTML = `${perimetro}${cmLineal}`
}

const calcularAreaTriangulo = () => {
    const base = document.getElementById('baseTriangulo').value;
    const altura = document.getElementById('alturaTriangulo').value;

    const area = areaTriangulo(base, altura);
    document.getElementById('outputAreaTriangulo').innerHTML = `${area}${cmCuadrado}`
}


//! Círculo

const calcularPerimetroCirculo = () => {
    const radio = document.getElementById('radioCirculo').value;

    const perimetro = perimetroCirculo(radio);
    document.getElementById('outputPerimetroCirculo').innerHTML = `${perimetro}${cmLineal}`
}

const calcularAreaCirculo = () => {
    const radio = document.getElementById('radioCirculo').value;

    const area = areaCirculo(radio);
    document.getElementById('outputAreaCirculo').innerHTML = `${area}${cmCuadrado}`
}

