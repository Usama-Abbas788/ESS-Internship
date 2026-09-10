const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}
const diameter = function (radius) {
    return 2 * radius;
}
// 1st method to calculate area,circumference and diameter
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

// 2nd method to calculate area,circumference and diameter

function calculate(radius, logic) {
    output=[];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

// 3rd method to calculate area,circumference and diameter

Array.prototype.calculate = function (logic) {
    output=[];
    for (let i = 0; i < this.length; i++) {
        outpput.push(logic(this[i]));
    }
    return output;
}
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));