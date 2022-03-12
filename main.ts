radio.onReceivedString(function (receivedString) {
    if (receivedString == "Pret") {
        FautesNombre = 0
        LEDs_Course.showColor(neopixel.colors(NeoPixelColors.Black))
        LEDs_Course.show()
        LEDs_Fautes.showColor(neopixel.colors(NeoPixelColors.Black))
        LEDs_Fautes.show()
        Led01.showColor(neopixel.colors(NeoPixelColors.Blue))
        Led01.show()
    }
    if (receivedString == "Debut") {
        Led01.showColor(neopixel.colors(NeoPixelColors.Yellow))
        Led01.show()
        Led02.showColor(neopixel.colors(NeoPixelColors.Green))
        Led02.show()
    }
    if (receivedString == "Bonus1") {
        Led03.showColor(neopixel.colors(NeoPixelColors.Green))
        Led03.show()
    }
    if (receivedString == "Bonus2") {
        Led04.showColor(neopixel.colors(NeoPixelColors.Green))
        Led04.show()
    }
    if (receivedString == "Fin") {
        Led05.showColor(neopixel.colors(NeoPixelColors.Green))
        Led05.show()
        Led01.showColor(neopixel.colors(NeoPixelColors.Green))
        Led01.show()
    }
    if (receivedString == "FauteHub") {
        FautesNombre += 1
        if (FautesNombre == 1) {
            Led06.showColor(neopixel.colors(NeoPixelColors.Red))
            Led06.show()
        }
        if (FautesNombre == 2) {
            Led07.showColor(neopixel.colors(NeoPixelColors.Red))
            Led07.show()
        }
        if (FautesNombre == 3) {
            Led08.showColor(neopixel.colors(NeoPixelColors.Red))
            Led08.show()
        }
        if (FautesNombre == 4) {
            Led09.showColor(neopixel.colors(NeoPixelColors.Red))
            Led09.show()
        }
        if (FautesNombre == 5) {
            Led10.showColor(neopixel.colors(NeoPixelColors.Red))
            Led10.show()
        }
    }
    if (receivedString == "Elimine") {
        Led01.showColor(neopixel.colors(NeoPixelColors.Red))
        Led01.show()
        Led05.showColor(neopixel.colors(NeoPixelColors.Red))
        Led05.show()
    }
})
let FautesNombre = 0
let Led10: neopixel.Strip = null
let Led09: neopixel.Strip = null
let Led08: neopixel.Strip = null
let Led07: neopixel.Strip = null
let Led06: neopixel.Strip = null
let Led05: neopixel.Strip = null
let Led04: neopixel.Strip = null
let Led03: neopixel.Strip = null
let Led02: neopixel.Strip = null
let Led01: neopixel.Strip = null
let LEDs_Fautes: neopixel.Strip = null
let LEDs_Course: neopixel.Strip = null
radio.setGroup(33)
basic.showIcon(IconNames.Yes)
LEDs_Course = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGB)
LEDs_Fautes = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
Led01 = LEDs_Course.range(0, 1)
Led02 = LEDs_Course.range(2, 1)
Led03 = LEDs_Course.range(4, 1)
Led04 = LEDs_Course.range(6, 1)
Led05 = LEDs_Course.range(8, 1)
Led06 = LEDs_Fautes.range(0, 1)
Led07 = LEDs_Fautes.range(2, 1)
Led08 = LEDs_Fautes.range(4, 1)
Led09 = LEDs_Fautes.range(6, 1)
Led10 = LEDs_Fautes.range(8, 1)
LEDs_Course.showColor(neopixel.colors(NeoPixelColors.Black))
LEDs_Fautes.showColor(neopixel.colors(NeoPixelColors.Black))
LEDs_Course.show()
LEDs_Fautes.show()
basic.pause(100)
basic.clearScreen()
