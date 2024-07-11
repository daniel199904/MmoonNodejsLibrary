/**
 * 2024/07/21
 * V2.0.2
 */

const fs = require(`fs`);
const request = require(`request`);

/**
 * 
 * @param {string} url 下載檔案的網址
 * @param {string} fileName 下載檔案儲存的名稱
 * @returns then()
 */
const downloadFile = (url, fileName) => {
	return new Promise((res, rej) => {
		request(url).pipe(fs.createWriteStream(fileName).on(`close`, (err, response) => {
			if (err) {
				console.error(err);
				rej(err);
			} else {
				res(response);
			}
		}));
	});
}

module.exports = downloadFile;