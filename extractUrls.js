//2023/12/10
//V1.0.0

/**
 * 擷取字串中網址
 * @param {string} text 任意字串，包含網址訊息
 * @returns 
 */
const extractUrls = (text) => {
    // 判斷URL地址的正則表達式
	const expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/g;

	// 使用 match 方法提取匹配的部分
	const matches = text.match(expression);

	// 返回匹配的結果
	return matches || [];
}
module.exports = extractUrls;
