input.onButtonPressed(Button.A, function () {
    radio.sendString("Go")
    music.playTone(262, music.beat(BeatFraction.Quarter))
})
input.onButtonPressed(Button.AB, function () {
    if (Etat == 2) {
        basic.showNumber(Chrono)
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
    }
    if (name == "Temps") {
        Chrono = value
    }
})
let Chrono = 0
let Etat = 0
radio.setGroup(33)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(154)
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()
