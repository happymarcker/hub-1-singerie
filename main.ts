radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        BonusNombre += 1
        basic.showNumber(1)
        Led02.showColor(neopixel.colors(NeoPixelColors.Green))
        Led02.show()
    }
    if (receivedNumber == 3) {
        BonusNombre += 1
        basic.showNumber(2)
        Led03.showColor(neopixel.colors(NeoPixelColors.Green))
        Led03.show()
    }
    if (receivedNumber == 4) {
        BonusNombre += 1
        basic.showNumber(3)
        Led04.showColor(neopixel.colors(NeoPixelColors.Green))
        Led04.show()
    }
    if (receivedNumber == 0) {
        Temps = (input.runningTime() - Départ) / 1000
        Temps = Temps + (BonusNombre * BonusTemps - (FautesNombre + FautesTemps))
        basic.showString("F")
        Led05.showColor(neopixel.colors(NeoPixelColors.Green))
        Led05.show()
        basic.showString("" + (Temps))
    }
})
input.onButtonPressed(Button.A, function () {
    FautesNombre += 1
    basic.showIcon(IconNames.No)
    basic.pause(100)
    basic.clearScreen()
    if (FautesNombre == 1) {
        Led10.showColor(neopixel.colors(NeoPixelColors.Red))
        Led10.show()
    }
    if (FautesNombre == 2) {
        Led09.showColor(neopixel.colors(NeoPixelColors.Red))
        Led09.show()
    }
    if (FautesNombre == 3) {
        Led08.showColor(neopixel.colors(NeoPixelColors.Red))
        Led08.show()
    }
    if (FautesNombre == 4) {
        Led07.showColor(neopixel.colors(NeoPixelColors.Red))
        Led07.show()
    }
    if (FautesNombre == 5) {
        Led06.showColor(neopixel.colors(NeoPixelColors.Red))
        Led06.show()
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Go") {
        Départ = input.runningTime()
        basic.showString("D")
        Led01.showColor(neopixel.colors(NeoPixelColors.Green))
        Led01.show()
    }
    if (receivedString == "Faute") {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    Temps = 0
    BonusNombre = 0
    FautesNombre = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
let Départ = 0
let Led06: neopixel.Strip = null
let Led07: neopixel.Strip = null
let Led08: neopixel.Strip = null
let Led09: neopixel.Strip = null
let Led10: neopixel.Strip = null
let Led05: neopixel.Strip = null
let Led04: neopixel.Strip = null
let Led03: neopixel.Strip = null
let Led02: neopixel.Strip = null
let Led01: neopixel.Strip = null
let strip: neopixel.Strip = null
let Temps = 0
let BonusNombre = 0
let BonusTemps = 0
let FautesNombre = 0
let FautesTemps = 0
radio.setGroup(33)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(154)
basic.showIcon(IconNames.House)
FautesTemps = 20
FautesNombre = 0
let FautesMax = 5
BonusTemps = 20
BonusNombre = 0
Temps = 0
strip = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGB)
Led01 = strip.range(0, 1)
Led02 = strip.range(1, 1)
Led03 = strip.range(2, 1)
Led04 = strip.range(3, 1)
Led05 = strip.range(4, 1)
Led10 = strip.range(9, 1)
Led09 = strip.range(8, 1)
Led08 = strip.range(7, 1)
Led07 = strip.range(6, 1)
Led06 = strip.range(5, 1)
let Led02a09 = strip.range(1, 9)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
basic.pause(100)
basic.clearScreen()
