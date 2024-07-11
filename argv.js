/**
 * 2024/07/11
 * V2.0.1
 */
const argv = process.argv;
let helpTexts = [];

/**
 * 
 * @param {string} argvName argv參數名稱 
 * @returns argv參數內容
 */
const inq = (argvName) => {
	const index = argv.indexOf(`-` + argvName);
	if (index != -1) {
		return argv[index + 1];
	} else {
		return null;
	}
};
const help = {
	/**
	 * 增加help訊息
	 * @param {string} helpText 
	 */
	add: (helpText) => {
		helpTexts.push(helpText);
	},
	/**
	 * 印出help訊息
	 */
	show: () => {
		if (argv.indexOf(`-help`) != -1 || argv.indexOf(`-?`) != -1) {
			helpTexts.forEach((helpText) => console.log(helpText));
		}
	}
};

module.exports = {
	inq: inq,
	help: help
}