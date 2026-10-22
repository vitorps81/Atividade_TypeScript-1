"use strict";
/*
======================
   FORMA GEOMÉTRICA
======================
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Forma
class Forma {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
// Quadrado
class Quadrado extends Forma {
    lado;
    constructor(lado) {
        super("Quadrado");
        this.lado = lado;
    }
    calcularArea() {
        return this.lado ** 2;
    }
}
// Círculo
class Circulo extends Forma {
    raio;
    constructor(raio) {
        super("Círculo");
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
}
// Triângulo
class Triangulo extends Forma {
    base;
    altura;
    constructor(base, altura) {
        super("Triângulo Retângulo");
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
// Retângulo
class Retangulo extends Forma {
    base;
    altura;
    constructor(base, altura) {
        super("Retângulo");
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
// Testes das Formas Geométricas
const formas = [
    new Quadrado(5),
    new Circulo(3),
    new Triangulo(8, 6),
    new Retangulo(10, 4)
];
console.log("=============== EXEMPLOS INICIAIS ===============");
for (const forma of formas) {
    console.log(`${forma.nome}: ${forma.calcularArea().toFixed(2)}`);
}
console.log("\n=============== TESTES ADICIONAIS ===============");
// Teste do Cálculo do Quadrado
const quadrado2 = new Quadrado(12);
console.log("Quadrado:", quadrado2.calcularArea());
// Teste do Cálculo do Cítculo
const circulo2 = new Circulo(5);
console.log("Círculo:", circulo2.calcularArea().toFixed(2));
// Teste do Cálculo do Triângulo
const triangulo2 = new Triangulo(10, 8);
console.log("Triângulo:", triangulo2.calcularArea());
// Teste do Cálculo do Retângulo
const retangulo2 = new Retangulo(7, 3);
console.log("Retângulo:", retangulo2.calcularArea());
//# sourceMappingURL=index.js.map