const playArea = document.getElementById("playArea")
const ctx = playArea.getContext("2d")
const WIDTH = 1000
const HEIGHT = 800
playArea.width = WIDTH
playArea.height = HEIGHT

const attackArea = {
    position: {
        x: 250,
        y: 400,
    },
    width: 500,
    height: 250,
}
attackArea.position.x = WIDTH/2 - attackArea.width/2

class Player {
    constructor({ position, color }) {
        this.position = position
        this.width = 30
        this.height = 30
        this.color = color
        this.velocity = {
            x: 0,
            y: 0,
        }
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    keyHandler() {
        if (
            !keys.arrowLeft.pressed && !keys.arrowRight.pressed ||
            keys.arrowLeft.pressed && keys.arrowRight.pressed
        ) {
            this.velocity.x = 0
        } else if (keys.arrowRight.pressed) {
            this.velocity.x = 4
        } else if (keys.arrowLeft.pressed) {
            this.velocity.x = -4
        }
        if (
            !keys.arrowUp.pressed && !keys.arrowDown.pressed ||
            keys.arrowUp.pressed && keys.arrowDown.pressed
        ) {
            this.velocity.y = 0
        } else if (keys.arrowUp.pressed) {
            this.velocity.y = -4
        } else if (keys.arrowDown.pressed) {
            this.velocity.y = 4
        }
    }
}

let keys = {
    arrowLeft: {pressed: false},
    arrowRight: {pressed: false},
    arrowUp: {pressed: false},
    arrowDown: {pressed: false},
}



const player = new Player({
    position: {
        x: 400,
        y: 400,
    },
    color: "red"
})

function animate() {
    window.requestAnimationFrame(animate);
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    ctx.fillStyle = "gray";
    ctx.fillRect(attackArea.position.x, attackArea.position.y, attackArea.width, attackArea.height);
    
    player.draw()
    player.keyHandler()

    player.position.x += player.velocity.x
    player.position.y += player.velocity.y
}
console.log("INFO: Animating...");
animate();