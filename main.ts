radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Départ = input.runningTime()
        basic.showString("D")
        D.showColor(neopixel.colors(NeoPixelColors.Green))
        D.show()
    }
    if (receivedNumber == 2) {
        Nombre_de_bonus += 1
        basic.showNumber(1)
        BT1.showColor(neopixel.colors(NeoPixelColors.Green))
        BT1.show()
    }
    if (receivedNumber == 3) {
        Nombre_de_bonus += 1
        basic.showNumber(2)
        BT2.showColor(neopixel.colors(NeoPixelColors.Green))
        BT2.show()
    }
    if (receivedNumber == 4) {
        Nombre_de_bonus += 1
        basic.showNumber(3)
        BT3.showColor(neopixel.colors(NeoPixelColors.Green))
        BT3.show()
    }
    if (receivedNumber == 5) {
        Temps = (input.runningTime() - Départ) / 1000
        Temps = Temps + (Nombre_de_bonus * Temps_Bonus - (Nombre_de_pénalités + Temps_pénalité))
        basic.showString("F")
        F.showColor(neopixel.colors(NeoPixelColors.Green))
        F.show()
        basic.showString("" + (Temps))
    }
})
input.onButtonPressed(Button.A, function () {
    Nombre_de_pénalités += 1
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.clearScreen()
    if (Nombre_de_pénalités == 1) {
        P1.showColor(neopixel.colors(NeoPixelColors.Red))
        P1.show()
    }
    if (Nombre_de_pénalités == 2) {
        P2.showColor(neopixel.colors(NeoPixelColors.Red))
        P2.show()
    }
    if (Nombre_de_pénalités == 3) {
        P3.showColor(neopixel.colors(NeoPixelColors.Red))
        P3.show()
    }
    if (Nombre_de_pénalités == 4) {
        P4.showColor(neopixel.colors(NeoPixelColors.Red))
        P4.show()
    }
    if (Nombre_de_pénalités == 5) {
        P5.showColor(neopixel.colors(NeoPixelColors.Red))
        P5.show()
    }
})
input.onButtonPressed(Button.B, function () {
    Temps = 0
    Nombre_de_bonus = 0
    Nombre_de_pénalités = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
let Départ = 0
let P5: neopixel.Strip = null
let P4: neopixel.Strip = null
let P3: neopixel.Strip = null
let P2: neopixel.Strip = null
let P1: neopixel.Strip = null
let F: neopixel.Strip = null
let BT3: neopixel.Strip = null
let BT2: neopixel.Strip = null
let BT1: neopixel.Strip = null
let D: neopixel.Strip = null
let strip: neopixel.Strip = null
let Temps = 0
let Nombre_de_bonus = 0
let Temps_Bonus = 0
let Nombre_de_pénalités = 0
let Temps_pénalité = 0
radio.setGroup(33)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(154)
basic.showIcon(IconNames.Happy)
basic.pause(100)
basic.clearScreen()
Temps_pénalité = 20
Nombre_de_pénalités = 0
Temps_Bonus = 20
Nombre_de_bonus = 0
Temps = 0
strip = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGB)
D = strip.range(0, 1)
BT1 = strip.range(1, 1)
BT2 = strip.range(2, 1)
BT3 = strip.range(3, 1)
F = strip.range(4, 1)
P1 = strip.range(9, 1)
P2 = strip.range(8, 1)
P3 = strip.range(7, 1)
P4 = strip.range(6, 1)
P5 = strip.range(5, 1)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
