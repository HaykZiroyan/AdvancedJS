/*


The Jungle contains 3 species of animals; tigers, monkeys and snakes.  ???

The jungle can perform a sound off(soundOff). This involves all of the animals in the jungle each making their sound, along with reporting their energy level.

The jungle contains several types of food (Fish, Grain and Meat), and Tigers can’t eat Grain because they have sensitive digestive systems. And when they try to eat Grain , they say “I can’t eat that”.

*/


class Jungle {

    soundOff() {

    }
}
class Animal {
    energy = 0
    sound() {
        this.energy -= 3
    }
    food() {
        this.energy += 5

    }
    sleep() {
        this.energy += 10
    }
}
class Food {

}
class Tiger extends Animal {
    sleep() {
        this.energy += 5
    }

}
class Monkey extends Animal  {
    sound() {
        this.energy -= 4
    }
    food() {
        this.energy += 2
    }
    play() {
        if(this.energy >= 8) {
            this.energy -= 8
            console.log("Oooo Oooo")
        } else {
            console.log("I’m too tired")
        }
    }
}
class Snake extends Animal {

}
class Fish extends Food {

}
class Grain extends Food {

}
class Meat extends Food {

}