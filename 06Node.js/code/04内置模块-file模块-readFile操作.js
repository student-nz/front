// 1. 导入 fs 模块，来操作文件
const fs = require('fs')

// 2. 调用 fs.readFile() 方法读取文件

fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
    // 2.1 打印失败的结果
    // 如果读取成功，则 err 的值为 null
    // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined
    console.log(err)
    console.log('-------')
        // 2.2 打印成功的结果
    console.log(dataStr)
})