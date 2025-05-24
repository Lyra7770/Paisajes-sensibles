let gotas = [];

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 100; i++) {
    gotas.push(new Gota());
  }
  noStroke();
}

function draw() {
  background(30, 30, 50);
  for (let g of gotas) {
    g.mover();
    g.mostrar();
  }
}

class Gota {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.vel = random(2, 5);
    this.tam = random(1, 3);
  }

  mover() {
    this.y += this.vel;
    if (this.y > height) {
      this.y = random(-100, 0);
      this.x = random(width);
    }
  }

  mostrar() {
    fill(180, 180, 255, 100);
    ellipse(this.x, this.y, this.tam, this.tam * 5);
  }
}