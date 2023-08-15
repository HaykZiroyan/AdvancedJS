/*
17. Given two objects representing rectangles with properties width and height, write a function to
compare if they have the same area.
*/
const rectangle1 = {
    width: 5,
    height: 10,
};
const rectangle2 = {
    width: 10,
    height: 5,
};
const rectangle3 = {
    width: 6,
    height: 8,
};

function areRectanglesSameArea(arg1, arg2) {
    let area1 = arg1.width * arg1.height
    let area2 = arg2.width * arg2.height
    if (area1 === area2) return true
    return false
}

console.log(areRectanglesSameArea(rectangle1, rectangle2));
console.log(areRectanglesSameArea(rectangle1, rectangle3));