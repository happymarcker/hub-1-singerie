radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1 && Etat == 0) {
        radio.sendString("Debut")
        Départ = input.runningTime()
        Etat = 1
        radio.sendValue("Etat", Etat)
    }
    if (receivedNumber == 2 && Etat == 1) {
        radio.sendString("Bonus1")
        BonusNombre += 1
    }
    if (receivedNumber == 3 && Etat == 1) {
        radio.sendString("Bonus2")
        BonusNombre += 1
    }
    if (receivedNumber == 0 && Etat == 1) {
        radio.sendString("Fin")
        Temps = (input.runningTime() - Départ) / 1000 + (FautesNombre * FautesTemps - BonusNombre * BonusTemps)
        Etat = 2
        radio.sendValue("Etat", Etat)
        radio.sendValue("Temps", Temps)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Go") {
        radio.sendString("Pret")
        Etat = 0
        radio.sendValue("Etat", Etat)
        Temps = 0
        FautesNombre = 0
        BonusNombre = 0
    }
    if (receivedString == "Faute") {
        FautesNombre += 1
        radio.sendString("FauteHub")
    }
    if (FautesNombre == FautesMax && Etat == 1) {
        radio.sendString("FauteHub")
        Etat = 3
        radio.sendValue("Etat", Etat)
        radio.sendString("Elimine")
    }
})
let Départ = 0
let Etat = 0
let Temps = 0
let BonusNombre = 0
let BonusTemps = 0
let FautesMax = 0
let FautesNombre = 0
let FautesTemps = 0
radio.setGroup(33)
basic.showIcon(IconNames.House)
FautesTemps = 20
FautesNombre = 0
FautesMax = 5
BonusTemps = 20
BonusNombre = 0
Temps = 0
let TempsMax = 300
basic.pause(100)
basic.clearScreen()
basic.forever(function () {
    if ((input.runningTime() - Départ) / 1000 >= TempsMax) {
        Etat = 3
        radio.sendValue("Etat", Etat)
        radio.sendString("Elimine")
    }
})
