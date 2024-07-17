import { formatCurrency } from '../scripts/utils/money.js';

console.log('test suite: formatCurrency()');

console.log('converts cents into dollars');
if (formatCurrency(2095) === '20.95') {
	console.log('passed');
} else console.log('failed');

console.log('checks if 0 value works');
if (formatCurrency(0) === '0.00') {
	console.log('passed');
} else console.log('failed');

console.log('checks if rounds up to the nearest cent properly');
if (formatCurrency(2000.5) === '20.01') {
	console.log('passed');
} else console.log('failed');

console.log('checks if rounds down to the nearest cent properly');
if (formatCurrency(2000.4) === '20.00') {
	console.log('passed');
} else console.log('failed');
