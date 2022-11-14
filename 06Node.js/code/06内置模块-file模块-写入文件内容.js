// 1. 导入 fs 文件系统模块
const fs = require('fs')

// 2. 调用 fs.writeFile() 方法，写入文件的内容
fs.writeFile('./files/3.txt', 'ok123', function(err) {

    // console.log(err)

    if (err) {
        return console.log('文件写入失败！' + err.message)
    }
    console.log('文件写入成功！')
})