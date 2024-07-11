/**
 * 2023/09/17
 * V1.0.1
 */

const fs = require(`fs`);
/**
 * fs衍生運用
 * 使用Sync方式複製檔案
 * @param {File} src 來源檔案
 * @param {File} dist 目標檔案
 * @returns 
 */
const copyFileSync = (src, dist) => fs.writeFileSync(dist, fs.readFileSync(src));
module.exports = copyFileSync;