class University {
    teachers = []
    students = []
    addMember(member) {

    }
    removeMember(member) {

    }
    startLesson() {
        this.students.forEach(element => {
            element.energy -= 2
        })
        this.teachers.forEach(element => {
            element.energy -= 5
        })
    }
}

class UniversityMember {
    constructor(name, age, role, energy = 24) {
        this.name = name
        this.age = age
        this.role = role
        this.energy = energy
    }
    info() {
        return {
            name: this.name,
            age: this.age,
            role: this.role,
            energy: this.energy
        }
    }

}

class Teacher extends UniversityMember {

}

class Student extends UniversityMember {

}



let member = new UniversityMember("vlad", 8, "student", 4574)
console.log(member.info())
