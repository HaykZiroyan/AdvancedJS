class University {
    teachers = []
    students = []
    addMember(member) {


    }
    removeMember(member) {

    }
    startLesson() {
        
    }
}

class UniversityMember {
    constructor(name, age, role, energy) {
        this.name = name
        this.age = age
        this.role = role
        this.energy = energy
    }
    info() {
        return this
    }

}

class Teacher extends UniversityMember{

}

class Student extends UniversityMember{

}
let member = new UniversityMember("vlad", 8, "student", 4574)
console.log(member.info())