import { formatCurrency } from '../../scripts/utils/money.js';

describe('test suite: formatCurrency()', () => {
	it('converts cents into dollars', () => {
		expect(formatCurrency(2095)).toEqual('20.95');
	});

	it('checks if 0 value works', () => {
		expect(formatCurrency(0)).toEqual('0.00');
	});

	it('checks if rounds up to the nearest cent properly', () => {
		expect(formatCurrency(2000.5)).toEqual('20.01');
	});

	it('checks if rounds down to the nearest cent properly', () => {
		expect(formatCurrency(2000.4)).toEqual('20.00');
	});
});
