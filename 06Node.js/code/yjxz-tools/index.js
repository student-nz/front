// 这是包的入口文件

const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

// 向外暴露需要的成员
module.exports = {
    ...date, // 扩展运算符用在对象上为深拷贝
    ...escape
}