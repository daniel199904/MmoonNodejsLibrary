/**
 * 2023/09/18
 * V1.0.4
 */

/**
 * 
 * @param {object} date new Date()
 * @param {string} format 將Date()格式化的條件
 * @returns 將Date()格式化後字串
 */
const dateToStr = (date, format) => {
    let z = {
        y: date.getFullYear(),
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
    };
    return format.replace(/(y+|M+|d+|h+|m+|s+)/g, (formatVal) => {
        return ((formatVal.length > 1 ? "0" : "") + eval('z.' + formatVal.slice(-1))).slice(-(formatVal.length > 2 ? formatVal.length : 2))
    });
}

module.exports = dateToStr;