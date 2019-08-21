class Player {
  constructor() {
    this.x = 300
    this.y = 500
  }

  setup() {

  }

  draw() {
    push()
    fill("pink")
    rect(this.x, this.y, 50, 50)
    pop()

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5
    }

  }

  keyPressed() {
    if (keyCode === 32) {
      game.bullets.push(new Bullet(this.x + 20, this.y))
    }
  }


}