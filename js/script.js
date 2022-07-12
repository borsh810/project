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
// 	case '49':   -   switch используется только когда = нельзя с <>
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

// const str = 'teSt';

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('q'));

// const logg = 'Hello world';

// console.log(logg.slice(6,11));

// console.log(logg.substring(6,11));

// console.log(logg.substr(6,5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// Callback функции

// function learnJS(lang, callback) {
// 	console.log(`Я учу: ${lang}`);
// 	callback();
// }

// function done() {
// 	console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', function() {
// 	console.log('Я гей');
// });

// 020 Обьекты и деструктизация обьектов

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	},
// 	makeTest: function() {
// 		console.log('Test');
// 	}
// };

// options.makeTest();

// const {border, bg}  = options.colors;
// console.log(bg);

// console.log(Object.keys(options).length);

// console.log(options['colors']['border']);  - не совсем правельный способ

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
// 	if (typeof(options[key]) === 'object') {
// 		for(let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 		}
// 		} else {
// 			console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 			counter++;
// 		}
// 	}
// 	console.log(counter);

// 021 Масисивы

// const arr = [14,32,23,76,8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a,b) {
// 	return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item,i,arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(10);

// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// 022 Передача по ссылке или по значению

// let a = 5,
// 	b = a;
// 	console.log(b);
// 	console.log(a);

// 	const obj = {
// 		a: 5,
// 		b: 1
// 	};

	// const copy = obj;

	// copy.a = 10;

	// console.log(copy);
	// console.log(obj);

// 	function copy(mainObj) {
// 		let objCopy = {};

// 		let key;
// 		for(key in mainObj) {
// 			objCopy[key] = mainObj[key];
// 		}
// 		return objCopy;
// 	}

// 	const numbers = {
// 		a: 2,
// 		b: 5,
// 		c: {
// 			x: 7,
// 			y: 4
// 		}
// 	};
// 	const newNumbers = copy(numbers);

// 	newNumbers.a = 10;
// 	newNumbers.c.x = 10;

// 	console.log(newNumbers);
// 	console.log(numbers);

// 	const add = {
// 		d: 17,
// 		e: 20
// 	};

// 	const clone = Object.assign({}, add);

// 	clone.d = 20;

// 	console.log(add);
// 	console.log(clone);

// 	const oldArray = ['a', 'b', 'c'];
// 	const newArray = oldArray.slice();

// 	newArray[1] = 'adadaf';
// 	console.log(newArray);
// 	console.log(oldArray);

// 	const video = ['youtube', 'vimeo', 'rutube'],
// 			blogs = ['wordpress', 'livejournal', 'blogger'],
// 					internet = [...video, ...blogs, 'vk', 'facebook' ];

// 					console.log(internet);

// 					function log(a,b,c) {
// 						console.log(a);
// 						console.log(b);
// 						console.log(c);
// 					}
// const num = [2,5,7];
// log(...num); 
// const array = ['a', 'b'];
// const newAфrray = [...array];

// const q = {
// 	one: 1,
// 	two: 2
// };

// const newObj = {...q};

// 023 Основы ООП

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
// 	health: 400,
// 	armor: 100,
// 	sayHello: function() {
// 		console.log('Hello');
// 	}
// };

// const jonh = Object.create(soldier);

// const jonh = {
// 	health: 100
// };

// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.armor);

// jonh.sayHello();