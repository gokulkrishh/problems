import formatSeconds from './';

describe('formatSeconds', () => {
	it('should return in now if argument is 0', () => {
		expect(formatSeconds(0)).toBe('now');
	});

	it('should throw error if argument is < 0', () => {
		expect(() => formatSeconds(-1)).toThrow(new Error('Invalid number'));
		expect(() => formatSeconds(-0.5)).toThrow(new Error('Invalid number'));
		expect(() => formatSeconds(-1000)).toThrow(new Error('Invalid number'));
	});

	it('should return in human readable string in singular if argument is > 0 && < 2', () => {
		expect(formatSeconds(1)).toBe('1 second');
		expect(formatSeconds(60)).toBe('1 minute');
	});

	it('should return in human readable string in plural if argument is > 1', () => {
		// expect(formatSeconds(61)).toBe('1 minute and 2 seconds');
		expect(formatSeconds(3662)).toBe('1 hour, 1 minute and 2 seconds');
		expect(formatSeconds(1484643412)).toBe('47 years, 28 days, 8 hours, 56 minutes and 52 seconds');
	});
});
