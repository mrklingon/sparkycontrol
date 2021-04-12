input.onButtonPressed(Button.A, function () {
    radio.sendString("R")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("L")
})
basic.showString("Hello!")
basic.showString("A for RIGHT!")
basic.showString("B for LEFT!")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
