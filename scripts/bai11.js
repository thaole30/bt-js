var person1 = {firstName: 'Thao', lastName: 'Le'};
var person2 = {firstName: 'Nhi', lastName: 'Tran'};

function say(intro, time) {
 console.log(intro + ',' + time + ' ' + this.firstName + ' ' + this.lastName);
}

var sayHelloThao = say.bind(person1, 'Hello', 'Good morning');
var sayHelloNhi = say.bind(person2, 'Hello', 'Good morning');

sayHelloThao(); 
sayHelloNhi();


var obj = {
    num1: 3,
    num2: 2,
}

var add = function(newNum1, newNum2) {
    return this.num1 + this.num2 + newNum1 + newNum2;
}

var result2 = add.call(obj, 4, 1);
console.log("result1", result2);

var result2 = add.apply(obj, [4, 1]);
console.log("result2", result2);