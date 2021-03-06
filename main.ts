function SendProgram () {
    for (let index = 0; index <= program.length - 1; index++) {
        radio.sendString(program.substr(index, 1))
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
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    SendProgram()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . # # # .
        . . . . .
        `)
    program = "" + program + "L"
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    program = ""
})
let program = ""
radio.setGroup(1)
basic.showString("Hello!")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
program = "LRLR"
SendProgram()
