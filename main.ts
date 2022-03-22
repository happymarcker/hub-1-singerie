joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.up, function () {
    if (Controle == 0) {
        Controle = 1
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
        basic.clearScreen()
    } else {
        Controle = 0
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.up, function () {
    if (VariableControle == 1) {
        if (Controle == 1) {
            if (Bonus1 == 60) {
                Bonus1 = 0
            }
            Bonus1 += 5
        }
        basic.showNumber(Bonus1)
        basic.pause(100)
        basic.clearScreen()
    }
    if (VariableControle == 2) {
        if (Controle == 1) {
            if (Bonus2 == 60) {
                Bonus2 = 0
            }
            Bonus2 += 5
        }
        basic.showNumber(Bonus2)
        basic.pause(100)
        basic.clearScreen()
    }
    if (VariableControle == 3) {
        if (Controle == 1) {
            if (Penalite == 60) {
                Penalite = 0
            }
            Penalite += 5
        }
        basic.showNumber(Penalite)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Go")
    music.playTone(262, music.beat(BeatFraction.Quarter))
})
input.onButtonPressed(Button.AB, function () {
    if (Etat == 2) {
        basic.showNumber(Chrono)
    } else {
        basic.showString("v1.1")
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.up, function () {
    VariableControle += 1
    if (VariableControle == 4) {
        VariableControle = 1
    }
    if (VariableControle == 1) {
        basic.showString("B1")
    }
    if (VariableControle == 2) {
        basic.showString("B2")
    }
    if (VariableControle == 3) {
        basic.showString("P")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Etat == 1) {
        radio.sendString("Faute")
        music.playTone(523, music.beat(BeatFraction.Quarter))
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "Etat") {
        Etat = value
        basic.showNumber(value)
        if (Etat == 2) {
            joystickbit.Vibration_Motor(100)
        }
    }
    if (name == "Temps") {
        Chrono = value
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.up, function () {
    if (Controle == 1) {
        radio.sendValue("ChangementBonus1", Bonus1)
        radio.sendValue("ChangementBonus2", Bonus2)
        radio.sendValue("ChangementPenalite", Penalite)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
let Chrono = 0
let Etat = 0
let Penalite = 0
let Bonus2 = 0
let Bonus1 = 0
let VariableControle = 0
let Controle = 0
joystickbit.initJoystickBit()
radio.setGroup(33)
radio.setTransmitPower(7)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(154)
Controle = 0
VariableControle = 0
Bonus1 = 0
Bonus2 = 0
Penalite = 0
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()
