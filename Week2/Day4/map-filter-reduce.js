const x = [1, 2, 3, 4, 5];

function isOdd(x){
    return x%2==1;
}
const output = x.filter(isOdd);
console.log(output);

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

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

const numbers = [1,2,3,4,5,6,7,8];

// finding sum using normal function
function findSum(numbers){
    sum = 0;
    for (i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}
console.log(findSum(numbers));
// finding sum using reduce function
const sum = numbers.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);
console.log(sum);

// finding max number using normal function
function findMax(numbers){
    max = 0;
    for (i=0; i<numbers.length; i++){
        if(numbers[i]>max){
            max = numbers[i];
        }
    }
    return max;
}
console.log(findMax(numbers));

// finding max using reduce function

const maxNumber = numbers.reduce(function(max,currentValue){
    if (currentValue>max){
        max = currentValue;
    }
    return max;
},0);
console.log(maxNumber);