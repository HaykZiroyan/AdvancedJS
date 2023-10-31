/*
Shiritori
This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two
rules:
First character of next word must match last character of previous word.
The word must not have already been said.
Below is an example of a Shiritori game:
["word", "dowry", "yodel", "leader", "righteous", "serpent"]; // valid! 
["motive", "beach"]; // invalid! - beach should start with "e" 
["hive", "eh", "hive"]; // invalid! - "hive" has already been said
Write a Shiritori class that has two instance properties:
words: an array of words already said.
game_over: a boolean that is true if the game is over.
Methods:
play: a method that takes in a word as an argument and checks if it is valid (the word should follow
rules #1 and #2 above).
If it is valid, it adds the word to the words array, and returns the words array.
If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to
true.
restart: a method that sets the words array to an empty one [] and sets the game_over boolean
to false. It should return "game restarted"
*/


class Shiritori {
    constructor() {
        this.words = []
        this.game_over = false
    }
    play(str) {
        if(this.game_over) {
            return "restart to play again"
        }
        if (this.words.length === 0) {
            this.words.push(str)
            return this.words
        }
        let lastWord = this.words[this.words.length-1]
        if (lastWord[lastWord.length - 1] === str[0] && !this.words.includes(str)) {
            this.words.push(str)
            return this.words
        }
        this.game_over = true
        return "game over"
    }
    restart() {
        this.game_over = false
        this.words = []
        return "game restarted"
    }
}

const myShiritori = new Shiritori(); 
 
console.log(myShiritori.play("apple")); 
console.log(myShiritori.play("ear"));
console.log(myShiritori.play("rhino"));
console.log(myShiritori.play("corn"));
 
console.log(myShiritori.words);
 
myShiritori.restart();
console.log(myShiritori.words);
 
console.log(myShiritori.play("hostess"));
console.log(myShiritori.play("stash"));
console.log(myShiritori.play("hostess"));
console.log(myShiritori.play("hush"));
