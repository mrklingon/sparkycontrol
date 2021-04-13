function SendProgram () {
    for (let index = 0; index <= program.length - 1; index++) {
        radio.sendString(program.substr(0, 10))
    }
    program = ""
}
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        . # # # .
        . . . . .
        `)
    program = "" + program + "R"
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("L")
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . # # # .
        . . . . .
        `)
    program = "" + program + "L"
})
input.onGesture(Gesture.Shake, function () {
    program = ""
})
let program = ""
radio.setGroup(1)
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
program = "LRLR"
SendProgram()
