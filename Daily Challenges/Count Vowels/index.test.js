import countVowels from './';

describe('countVowels', () => {
	it('Should return 0 if the given input string is empty', () => {
		expect(countVowels('')).toBe(0);
	});

	it('Should return 0 if there is no vowels in the given input string', () => {
		expect(countVowels('tst')).toBe(0);
	});

	it('Should return the correct vowels count in the given input string', () => {
		expect(countVowels('ateszzaaatio')).toBe(7);
		expect(countVowels('aeiou')).toBe(5);
		expect(countVowels('zzzzzzezzza')).toBe(2);
	});

	it('Should return the correct vowels count in the given input string has both uppercase and lowercase', () => {
		expect(countVowels('ateszzaEEOUIaatio')).toBe(12);
	});
});
