// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Are you 18?', '18');
// console.log((answer + 5));

// вся информация которую мы будем получать от пользователя будет строкой

// const answers = [];

// answers[0] = prompt('kak vashe imia?', '');
// answers[1] = prompt('kak vashe fam?', '');
// answers[2] = prompt('kak vashe let?', '');

// console.log(typeof(answers));

// массив это не отдельный тип данных

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Privet, ${user}`);

// console.log('arr' + ' -ob');

// let incr = 10,
// 	decr = 10;

// 	console.log(incr++);
// 	console.log(decr--);

// 	const isYes = true,
// 			isHah = false;

// 			console.log(isYes && isHah);

// Yslovia

// if (4 === 9) {
// 	console.log('Ok');
// } else {
// 	console.log('Error');
// }



// if(num < 49) {
// 	console.log('Error');
// } else if (num > 100) {
// 	console.log('Mnogo');
// } else {
// 	console.log('Vse verno!');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

// const num = '50';

// switch (num) {
// 	case '49':                        -   switch используется только когда = нельзя с <>
// 		console.log('Neverno');
// 		break;
// 	case '100': 
// 	console.log('Neverno');
// 	break;
// 	case '56': 
// 	console.log('V tochky');
// 	break;
// 	default:
// 		console.log('No this time');
// 		break;
// }

// Циклы

// let num = 50;

// while(num <= 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while(num < 55);
// let num = 50;
// for (let i = 1; i < 10; i++) {
// 	if(i === 6) {
// 		// break;
// 		continue;
// 	}
// 	console.log(i);
	
// }

// Функции
// let num = 20;

// function showFirstMessage(text) {
// 	console.log(text);
// 	console.log(num);
// }

// showFirstMessage('Hello World');
// console.log(num);

// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));

// function calc(a,b) {
// 	return (a + b);
// }

// function ret() {
// 	let num = 50;



// 	return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
// 	console.log("Hello");
// };

// logger();

// const calc = (a,b) => {
// 	console.log('1');
// 	return a + b;
// };

// Методы и свойства

const str = 'teSt';

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('q'));

const logg = 'Hello world';

console.log(logg.slice(6,11));

console.log(logg.substring(6,11));

console.log(logg.substr(6,5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2';
console.log(parseInt(test));
console.log(parseFloat(test));