function PE () {
    basic.showString("Uniform")
    basic.showString("Water Bottle")
    basic.showString("Shoes")
}
input.onButtonPressed(Button.A, function () {
    if (Days_of_the_Week == 1) {
        basic.showString("Monday")
        control.waitMicros(30)
        basic.showString("Engilsh")
        control.waitMicros(10)
        basic.showString("Potions")
        Potions()
        control.waitMicros(10)
        basic.showString("Humanities")
    } else if (Days_of_the_Week == 2) {
        basic.showString("Tuesday")
        control.waitMicros(30)
        basic.showString("Maths")
        Mathamatics()
        control.waitMicros(10)
        basic.showString("Japanese")
        Japanese()
        control.waitMicros(10)
        basic.showString("PE")
        PE()
    } else if (Days_of_the_Week == 3) {
        basic.showString("Wednesday")
    } else if (Days_of_the_Week == 4) {
        basic.showString("Thursday")
    } else if (Days_of_the_Week == 5) {
        basic.showString("Friday")
    }
})
function Potions () {
    basic.showString("Wand")
    basic.showString("Cauldron")
    basic.showString("Potions Book")
}
input.onButtonPressed(Button.B, function () {
    Days_of_the_Week += 1
    if (Days_of_the_Week > 5) {
        Days_of_the_Week = 0
    }
    if (Days_of_the_Week == 1) {
        basic.showNumber(Days_of_the_Week)
    } else if (Days_of_the_Week == 2) {
        basic.showNumber(Days_of_the_Week)
    } else if (Days_of_the_Week == 3) {
        basic.showNumber(Days_of_the_Week)
    } else if (Days_of_the_Week == 4) {
        basic.showNumber(Days_of_the_Week)
    } else if (Days_of_the_Week == 5) {
        basic.showNumber(Days_of_the_Week)
    }
})
function Mathamatics () {
    basic.showString("Calculator")
    basic.showString("Geometry Kit")
    basic.showString("Maths Book")
}
function Japanese () {
    basic.showString("Work Book")
    basic.showString("Learning Book")
    basic.showString("Languages Book")
}
let Days_of_the_Week = 0
Days_of_the_Week = 0
control.inBackground(function () {
    if (Days_of_the_Week > 5) {
        Days_of_the_Week = 0
    }
    if (Days_of_the_Week == 1) {
        basic.showNumber(Days_of_the_Week)
    } else if (Days_of_the_Week == 2) {
        basic.showNumber(Days_of_the_Week)
    } else if (Days_of_the_Week == 3) {
        basic.showNumber(Days_of_the_Week)
    } else if (Days_of_the_Week == 4) {
        basic.showNumber(Days_of_the_Week)
    } else if (Days_of_the_Week == 5) {
        basic.showNumber(Days_of_the_Week)
    }
})
