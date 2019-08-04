import stringDiamond from './';

describe('String Diamond', () => {
	it('should return null if input is even or negative number', () => {
		expect(stringDiamond(-1)).toBeNull();
		expect(stringDiamond(2)).toBeNull();
	});

	it('should return string in diamond shape based on the input', () => {
		expect(stringDiamond(7)).toBe('   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n');
	});
});
