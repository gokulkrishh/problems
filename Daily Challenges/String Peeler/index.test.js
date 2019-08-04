import StringPeeler from './';

describe('String Peeler', () => {
	it('should remove first and last character in given string', () => {
		expect(StringPeeler('Test')).toBe('es');
		expect(StringPeeler('This is a test string')).toBe('his is a test strin');
	});

	it('Should return the given string if character length is less 2', () => {
		expect(StringPeeler('')).toBe('');
		expect(StringPeeler('T')).toBe('T');
	});
});
