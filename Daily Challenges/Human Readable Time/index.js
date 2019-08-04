/* Problem:

  The function will accept an input of non-negative integers. If it is zero, it just returns "now".
  Otherwise, the duration is expressed as a combination of years, days, hours, minutes, and seconds, in that order.


  Note: The resulting expression is made of components like 4 seconds, 1 year, etc.
  The unit of time is used in plural if the integer is greater than 1.
  The components are separated by a comma and a space (", "), except the last component which is separated by " and ",
  just like it would be written in English. For the purposes of this challenge, a year is 365 days and a day is 24 hours.

  Note: Spaces are important.

  Example:

  Input: 62
  Output "1 minute and 2 seconds"

  Input: 3662
  Output: "1 hour, 1 minute and 2 seconds"

*/

function formatSeconds(seconds) {
	if (seconds < 0 || typeof seconds !== 'number') {
		throw new Error(`Invalid number`);
	}

	if (seconds === 0) {
		return 'now';
	}

	const formatter = () => ({
		year: seconds => Math.floor(seconds / (365 * 24 * 60 * 60)),
		day: seconds => Math.floor((seconds / (24 * 60 * 60)) % 365),
		hour: seconds => Math.floor((seconds / (60 * 60)) % 24),
		minute: seconds => Math.floor((seconds / 60) % 60),
		second: seconds => Math.floor(seconds % 60)
	});

	const str = Object.entries(formatter())
		.map(([time, format]) => ({ time, result: format(seconds) }))
		.filter(({ result }) => result >= 1)
		.map(({ time, result }) => {
			return result > 1 ? `${result} ${time}s` : `${result} ${time}`;
		});

	if (str.length > 1) {
		const lastStr = str.pop();
		return [str.join(', '), `and ${lastStr}`].join(' ');
	}

	return str.join('');
}

export default formatSeconds;
