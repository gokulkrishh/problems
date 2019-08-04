import Calculator from './';

describe('Calculator', () => {
	it('Should return null if the given expression is empty or invalid', () => {
		expect(Calculator().evaluate('')).toBe(null);
	});

	it('Should evaluate the given expression in right order and return the result', () => {
		expect(Calculator().evaluate('2 / 2 + 3 * 4 - 6')).toBe(7);
		expect(Calculator().evaluate('2 / 1 + 12 / 2 + 6')).toBe(14);
		expect(Calculator().evaluate('2 * 21 / 99 - 2 + 6')).toBe(4.42);
		expect(Calculator().evaluate('2 + 21 * 12 + 1 / 11 - 2 + 6')).toBe(258.09000000000003);
	});
});
