class Monster {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  draw() {
    push()
    fill('lime')
    rect(this.x, this.y, 50, 50)
    pop()

    this.monsterRect = {
      left: this.x,
      right: this.x + 50,
      top: this.y,
      bottom: this.y + 50,
    }
  }
}