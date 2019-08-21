let game = new Game()

function setup() {
  createCanvas(600, 600)
  game.setup()
}

function draw() {
  background(0)
  game.draw()
}

function keyPressed() {
  game.player.keyPressed()
}