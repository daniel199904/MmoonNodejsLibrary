/**
 * 2021/08/17
 * V2.0.0
 */
const Argv = process.argv;
let HelpTextArray = [];

/**
 * 
 * @param {string} Name Argv參數名稱 
 * @returns Argv參數內容
 */
const Inq = (Name) => {
	const Index = Argv.indexOf(`-` + Name);
	if (Index != -1) {
		return Argv[Index + 1];
	} else {
		return null;
	}
};
const Help = {
	/**
	 * 增加Help訊息
	 * @param {string} Text 
	 */
	Add: (Text) => {
		HelpTextArray.push(Text);
	},
	/**
	 * 印出Help訊息
	 */
	Show: () => {
		if (Argv.indexOf(`-help`) != -1 || Argv.indexOf(`-?`) != -1)
			HelpTextArray.forEach((HelpText) => console.log(HelpText));
	}
};

module.exports = {
	Inq: Inq,
	Help: Help
}