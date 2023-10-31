class ScopesCheck {
    #datas = []
    #opened = '{[('
    #closed = '}])'
    constructor(str) {
        if (str.length % 2 === 1) {
            return false
        }
        for (const elem of str) {
            if(elem === "{" || elem === "[" || elem === "(") {
                this.#datas.push(elem)
            } else if (elem === "}" || elem === ")" || elem === "]") {
                if (this.#closed.indexOf(elem) === this.#opened.indexOf(this.#datas[this.#datas.length - 1])) {
                    this.#datas.pop()
                }
            }

        };
        if(this.#datas.length === 0) {
            return true
        }
    }
}
const values = new ScopesCheck("{{}}()[]")
console.log(values)