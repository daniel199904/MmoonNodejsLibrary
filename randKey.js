//2023/09/17
//V1.0.2

/**
 * 隨機密碼
 * @param {number} count 隨機密碼位數
 * @returns 
 */
const randKey = (count) => {
    let pattern = "0123456789";
    pattern += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    pattern += "abcdefghijklmnopqrstuvwxyz";
    let Key = "";
    for (let i = 0; i < count; i++)
        Key += pattern.charAt(Math.floor(Math.random() * pattern.length));
    return Key;
}
module.exports = randKey;