class Users {
    #data
    constructor(data) {
        this.#data = data
    }
    getUserById(id) {
        let user;
        this.#data.forEach(element => {
            if (element.id === id) {
                user = element
            }
        })
        console.log(user)
        return user
    }

    addUsers(user) {
        user.forEach(element => {
            this.#data.push(element)
        })
    }
}

const mappedUser = new Users([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
]);

mappedUser.getUserById(1); // { id: 1, name: "Alice", email: "alice@example.com" };
mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]);
mappedUser.getUserById(3); // { id: 3, name: "Ann", email: "ann@example.com" }