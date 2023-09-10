/*
Write an Airplane object that initializes name.
Give airplanes the ability to .takeOff() and .land():
    If a plane takes off, its isFlying property is set to true.
    If a plane lands, its isFlying property is set to false.
*/

const Airplane = {
    isFlying: false,
    takeOff: function () {
        this.isFlying = true
        return this.isFlying
    },
    load:function  () {
        this.isFlying = false
        return this.isFlying

    }
}

console.log(Airplane.load())