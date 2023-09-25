

const p1 = Person("Samuel", 24)
const p2 = Person("Joel", 36)
const p3 = Person("Lily", 24)
p1.compareAge(p2) //➞ "Joel is older than me."
p2.compareAge(p1) //➞ "Samuel is younger than me."
p1.compareAge(p3) //➞ "Lily is the same age as me."