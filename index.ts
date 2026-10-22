/* 
======================
   FORMA GEOMÉTRICA
======================
*/

// Forma

abstract class Forma {
  constructor(public nome: string) {}

  abstract calcularArea(): number;
}

// Quadrado

class Quadrado extends Forma {
  constructor(public lado: number) {
    super("Quadrado");
  }

  calcularArea(): number {
    return this.lado ** 2;
  }
}

// Círculo

class Circulo extends Forma {
  constructor(public raio: number) {
    super("Círculo");
  }

  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

// Triângulo

class Triangulo extends Forma {
  constructor(
    public base: number,
    public altura: number
  ) {
    super("Triângulo Retângulo");
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

// Retângulo

class Retangulo extends Forma {
  constructor(
    public base: number,
    public altura: number
  ) {
    super("Retângulo");
  }

  calcularArea(): number {
    return this.base * this.altura;
  }
}

// Testes das Formas Geométricas

const formas: Forma[] = [
  new Quadrado(5),
  new Circulo(3),
  new Triangulo(8, 6),
  new Retangulo(10, 4)
];

console.log("=============== EXEMPLOS INICIAIS ===============");

for (const forma of formas) {
  console.log(
    `${forma.nome}: ${forma.calcularArea().toFixed(2)}`
  );
}


console.log("\n=============== TESTES ADICIONAIS ===============");

// Teste do Cálculo do Quadrado

const quadrado2 = new Quadrado(12);

console.log(
  "Quadrado:",
  quadrado2.calcularArea()
);

// Teste do Cálculo do Cítculo

const circulo2 = new Circulo(5);

console.log(
  "Círculo:",
  circulo2.calcularArea().toFixed(2)
);

// Teste do Cálculo do Triângulo

const triangulo2 = new Triangulo(10, 8);

console.log(
  "Triângulo:",
  triangulo2.calcularArea()
);

// Teste do Cálculo do Retângulo

const retangulo2 = new Retangulo(7, 3);

console.log(
  "Retângulo:",
  retangulo2.calcularArea()
);
