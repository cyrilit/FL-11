function getNumbers (str) {
	let arr = [];
	for (let i = 0; i < str.length; i++) {
		if ( !isNaN(+str[i]) ) {
			arr.push(+str[i]);
		}
	}
	return arr; 
}
// console.log( getNumbers('string') );
// console.log( getNumbers('n1um3ber87') );
//1
function findTypes () {
	let paramsTypes = {};
	for (let i = 0; i < arguments.length; i++) {
		let pType = typeof arguments[i];
		if (paramsTypes[pType]) {
			paramsTypes[pType]++;
		} else {
			paramsTypes[pType] = 1;
		}
	}
	return paramsTypes;
}
// console.log( findTypes('number') );
// console.log( findTypes(null, undefined, 7, 'hello', 12, 'a', {}, [], [1]) );
//2
function executeforEach (arr, functn) {
	for (let i = 0; i < arr.length; i++) {
		functn(arr[i]);
	}
}
// executeforEach([1,2,3], function(el) { console.log(el) });
//3
function mapArray (arr, functn) {
	let transformed = [];
	executeforEach(arr, function(el) {
		transformed.push(functn(el));
	});
	return transformed;
}
// console.log( mapArray([2, 5, 8], function(el) { return el + 3 }) );
//4
function filterArray (arr, functn) {
	let filtered = [];
	executeforEach(arr, function(el) {
		if (functn(el)) {
			filtered.push(el);
		}
	});
	return filtered;
}
// console.log( filterArray([2, 5, 8], function(el) { return el > 3 }) );
//5
function showFormattedDate (date) {
	const monthStr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const month = date.getMonth();
	const day = date.getDate();
	const year = date.getFullYear();
	return `Date: ${monthStr[month]} ${day} ${year}`;
}
// console.log( showFormattedDate(new Date('2019-01-27T01:10:00')) );
//6
function canConvertToDate (str) {
	return !isNaN(Date.parse(str)); 
}
// console.log( canConvertToDate('2016-13-18T00:00:00') ); // false
// console.log( canConvertToDate('2016-03-18T00:00:00') ); // true
//7
function daysBetween (date1, date2) {
	const msInDay = 86400000;
	const msDiff = Math.abs( date1.getTime() - date2.getTime() );
	const dayDiff = Math.round( msDiff / msInDay );
	return dayDiff;
}
// console.log( daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')) );
//8
function getAmountOfAdultPeople (persons) {
	const daysInYear = 365;
	const adultAge = 18;
	let isAdult = function (el) {
		return daysBetween( new Date(el.birthday), new Date() ) / daysInYear >= adultAge;
	};
	return filterArray(persons, isAdult).length;
}
// console.log( getAmountOfAdultPeople([
//     {
//         '_id': '5b5e3168c6bf40f2c1235cd6',
//         'index': 0,
//         'birthday': '2016-03-18T00:00:00',
//         'eyeColor': 'green',
//         'name': 'Stein',
//         'favoriteFruit': 'apple'
//     },
//     {
//         '_id': '5b5e3168e328c0d72e4f27d8',
//         'index': 1,
//         'birthday': '1991-02-11T00:00:00',
//         'eyeColor': 'blue',
//         'name': 'Cortez',
//         'favoriteFruit': 'strawberry'
//     },
//     {
//         '_id': '5b5e3168cc79132b631c666a',
//         'index': 2,
//         'birthday': '1984-04-17T00:00:00',
//         'eyeColor': 'blue',
//         'name': 'Suzette',
//         'favoriteFruit': 'apple'
//     },
//     {
//         '_id': '5b5e31682093adcc6cd0dde5',
//         'index': 3,
//         'birthday': '1994-04-17T00:00:00',
//         'eyeColor': 'green',
//         'name': 'George',
//         'favoriteFruit': 'banana'
//     }
// ] ) );
//9
function keys (obj) {
	let arr = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			arr.push(key);
		}
	}
	return arr;
}
// console.log( keys({keyOne: 1, keyTwo: 2, keyThree: 3}) );
//10
function values (obj) {
	let arr = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			arr.push(obj[key]);
		}
	}
	return arr;
}
// console.log( values({keyOne: 1, keyTwo: 2, keyThree: 3}) );