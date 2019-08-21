class Game {
  constructor() {
    this.player = new Player
    this.monsters = []
    this.bullets = []
  }

  setup() {
    for (let i = 0; i < 8; i++) {
      this.monsters.push(new Monster(random(100, 500), random(100, 300)))
    }
  }

  draw() {
    this.player.draw()
    this.monsters.forEach((monster) => {
      monster.draw()
    })

    this.bullets.forEach((bullet, i) => {
      bullet.draw()
      bullet.checkCollision()
      if (bullet.hit) {
        this.bullets.splice(i, 1)
      }
    })
  }
}