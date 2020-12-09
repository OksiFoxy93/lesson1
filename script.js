// 1
let first = 10;
let second = first*3;
let third = first + second;
console.log(third);


//2
let firstName = prompt("Имя");
let lastName = prompt("Фамилия");
console.log(`What’s up ${firstName} ${lastName}.`)


//3
let x = Number(prompt("Число1"));
let y = Number(prompt("Число2"));
alert(x * y);
alert(x / y);
alert(x - y);
alert(x + y);


//4
let hoursWork = +prompt("Количество рабочих часов");
let dayWork = +prompt("Количество отработанных дней");
let rateHour = +prompt("Рейт за час");
let salary = rateHour * dayWork * hoursWork;
console.log(salary);


//5
let number = +prompt("Число");
console.log (number % 2 !== 0);


//6
let number2 = +prompt("Число");
console.log( isFinite(number2) );


//7
let random = (Math.random());
let numberFirst = (Math.round(random * 100));
console.log(numberFirst);
let numberSecond = prompt("Второе число");
alert(`${numberFirst} < ${numberSecond}`);
alert(numberFirst < numberSecond);


//8
let str = prompt();
let myLike = prompt();
console.log(str.indexOf(myLike) !== -1);
let likeString = str.slice(0,20);
let result = `${likeString} ${myLike}`;
alert(result);