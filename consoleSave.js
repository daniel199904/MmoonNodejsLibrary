/**
 * 2023/09/18
 * V1.0.3
 */

const fs = require(`fs`);
const dateToStr = require(`./dateToStr.js`);

/**
 * console.log衍生運用
 * 將輸入的資訊息打上時間標記後於./Log 中儲存
 * @param {Text} str console.log() 字串
 */
const consoleSave = (str) => {
	const Log = `[${dateToStr(new Date(), `yyyy-MM-dd hh:mm:ss`)}]${String(str)}`;
	fs.appendFileSync(`./Log/${dateToStr(new Date(), `yyyyMMdd`)}.log`, `${Log}\n`);
	console.log(Log);
}

module.exports = consoleSave;