document.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "ArrowLeft" || "a":
            keys.arrowLeft.pressed = true
            // console.log("INFO: ArrowLeft pressed")
            break
        case "ArrowRight" || "d":
            keys.arrowRight.pressed = true
            // console.log("INFO: ArrowRight pressed")
            break
        case "ArrowUp" || "w":
            keys.arrowUp.pressed = true
            // console.log("INFO: ArrowUp pressed")
            break
        case "ArrowDown" || "s":
            keys.arrowDown.pressed = true
            // console.log("INFO: ArrowDown pressed")
            break
        case "a": 
            keys.arrowLeft.pressed = true
            break
        case "d":
            keys.arrowRight.pressed = true
            break
        case "w":
            keys.arrowUp.pressed = true
            break
        case "s":
            keys.arrowDown.pressed = true
            break
    }
})
document.addEventListener("keyup", (event) => {
    switch(event.key) {
        case "ArrowLeft":
            keys.arrowLeft.pressed = false
            break
        case "ArrowRight" || "d":
            keys.arrowRight.pressed = false
            break
        case "ArrowUp" || "w":
            keys.arrowUp.pressed = false
            break
        case "ArrowDown" || "s":
            keys.arrowDown.pressed = false
            break
        case "a": 
            keys.arrowLeft.pressed = false
            break
        case "d":
            keys.arrowRight.pressed = false
            break
        case "w":
            keys.arrowUp.pressed = false
            break
        case "s":
            keys.arrowDown.pressed = false
            break
    }
})