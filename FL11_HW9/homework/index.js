function getNumbers (str) {
	let arr = [];
	for (let i = 0; i < str.length; i++) {
		if ( !isNaN(+str[i]) ) {
			arr.push(+str[i]);
		}
	}
	return arr; 
}

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

function executeforEach (arr, functn) {
	for (let i = 0; i < arr.length; i++) {
		functn(arr[i]);
	}
}

function mapArray (arr, functn) {
	let transformed = [];
	executeforEach(arr, function(el) {
		transformed.push(functn(el));
	});
	return transformed;
}

function filterArray (arr, functn) {
	let filtered = [];
	executeforEach(arr, function(el) {
		if (functn(el)) {
			filtered.push(el);
		}
	});
	return filtered;
}

function showFormattedDate (date) {
	const monthStr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const month = date.getMonth();
	const day = date.getDate();
	const year = date.getFullYear();
	return `Date: ${monthStr[month]} ${day} ${year}`;
}

function canConvertToDate (str) {
	return !isNaN(Date.parse(str)); 
}

function daysBetween (date1, date2) {
	const msInDay = 86400000;
	const msDiff = Math.abs( date1.getTime() - date2.getTime() );
	const dayDiff = Math.round( msDiff / msInDay );
	return dayDiff;
}

function getAmountOfAdultPeople (persons) {
	const daysInYear = 365;
	const adultAge = 18;
	let isAdult = function (el) {
		return daysBetween( new Date(el.birthday), new Date() ) / daysInYear >= adultAge;
	};
	return filterArray(persons, isAdult).length;
}

function keys (obj) {
	let arr = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			arr.push(key);
		}
	}
	return arr;
}

function values (obj) {
	let arr = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			arr.push(obj[key]);
		}
	}
	return arr;
}