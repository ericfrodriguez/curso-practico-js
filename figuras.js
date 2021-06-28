// Código del Cuadrado
console.group('Cuadrado');

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado ** 2;
console.log(`El área del cuadrado es: ${areaCuadrado}cm²`);
console.groupEnd();

// Código del Triangulo
console.group('Triángulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}cm²`);

console.groupEnd();

// Código del Círculo

console.group('Círculo');

// Radio
const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo}cm`);

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es: ${diametroCirculo}cm`);

// PI
const PI = Math.PI;
console.log(`PI es: ${PI.toFixed(2)}`);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del circulo es: ${perimetroCirculo.toFixed(2)}cm`);

// Area
const areaCirculo = (radioCirculo ** 2) * PI;
console.log(`El area del circulo es: ${perimetroCirculo.toFixed(2)}cm²`);

console.groupEnd();