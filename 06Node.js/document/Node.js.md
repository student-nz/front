# Node.js

# 1. 浏览器中的 JS 组成部分

![image-20221108130328292](assets\image-20221108130328292.png)

# 2. 为什么 JS 可以在浏览器中被执行

```
不同的浏览器使用不同的 JavaScript 解析引擎，其中Chrome浏览器的 V8 解析引擎性能最好！
	1. Chrome 浏览器  		=>  V8
 	2. Firefox 浏览器    	=>  OdinMonkey（奥丁猴）
 	3. Safri 浏览器        =>  JSCore
 	4. IE 浏览器           =>  Chakra（查克拉）
 	5. etc...
```

![image-20221108130441653](assets\image-20221108130441653.png)

# 3. 为什么 JS 可以操作 DOM 和 BOM

```
每个浏览器都内置了 DOM、BOM 这样的 API 函数，因此，浏览器中的 JavaScript 才可以调用它们
```

![image-20221108130648274](assets\image-20221108130648274.png)

# 4. 浏览器中的 JS 运行环境

```
1. 运行环境是指代码正常运行所需的必要环境

2. V8 引擎负责解析和执行 JavaScript 代码

3. 内置 API 是由运行环境提供的特殊接口，只能在所属的运行环境中被调用
```

![image-20221108130828199](assets\image-20221108130828199.png)

# 5. 什么是Node.js

```
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境,
 
Node.js 的官网地址： https://nodejs.org/zh-cn/
```

# 6. Node.js 中的 JS 运行环境

```
1. 浏览器是 JavaScript 的前端运行环境。

2. Node.js 是 JavaScript 的后端运行环境。

3. Node.js 中无法调用 DOM 和 BOM 等浏览器内置 API。
```

![image-20221108131151326](assets\image-20221108131151326.png)

# 7. 什么是运行环境

```
运行环境 就是 生存环境

例如：
	1. 地球是人类的生存环境
    
    2. 浏览器是网页的生存环境
    
    3. windows是.exe应用程序的生存环境
    
    4. Android是.apk应用程序的生存环境
    
    5. 也就是说运行环境就是特定事物的生存环境 
    
    ...
    
    6. NodeJS也是一个生存的环境, 由于NodeJS中集成了V8引擎，所以NodeJS是JavaScript应用程序的一个生存环境
```

# 8. Node.js 环境的安装

```
搭建方式一:
	1.官网下载.msi安装包: https://nodejs.org/zh-cn/
	2.全程下一步
	3.在命令行工具中输入 node -v
何为镜像：
	镜像（Mirroring）是冗余的一种类型，一个磁盘上的数据在另一个磁盘上存在一个完全相同的副本即为镜像（这里就是下载node的镜像）

搭建方式二:
	1.官网下载.zip安装包: https://nodejs.org/zh-cn/
	2.解压下载好的安装包
	3.在"高级系统设置"中手动配置环境变量
	4.在命令行工具中输入 node -v

搭建方式三:
	1.下载NVM: https://github.com/coreybutler/nvm-windows
	2.在D盘创建dev目录
	3.在Dev目中中创建两个子目录nvm和nodejs, 并且把nvm包解压进去nvm目录中
	4.在install.cmd文件上面右键选择【以管理员身份运行】
 	 	在终端中直接按下回车
 		将弹出的文件另存为到NVM目录
  		打开settings.txt文件. 修改
  		root: D:\Developer\Dev\NVM
  		path: D:\Developer\Dev\Node
	5.配置环境变量
  		NVM_HOME: D:\Developer\Dev\NVM
  		NVM_SYMLINK: D:\Developer\Dev\Node
  		在Path中添加 %NVM_HOME% %NVM_SYMLINK%
	6.在命令行工具中输入 nvm version

	NVM常用命令
		nvm list 查看当前安装的Node.js所有版本
		nvm install 版本号 安装指定版本的Node.js
		nvm uninstall 版本号 卸载指定版本的Node.js
		nvm use 版本号 选择指定版本的Node.js
		

区分 LTS 版本和 Current 版本的不同：
	1. LTS 为长期稳定版，对于追求稳定性的企业级项目来说，推荐安装 LTS 版本的 Node.js
	2. Current 为新特性尝鲜版，对热衷于尝试新特性的用户来说，推荐安装 Current 版本的 Node.js
		但是，Current 版本中可能存在隐藏的 Bug 或安全性漏洞，因此不推荐在企业级项目中使用 Current 版本的 Node.js

查看已安装的 Node.js 的版本号：
	打开终端，在终端输入命令 node –v ，按下回车键，即可查看已安装的 Node.js 的版本号

什么是终端：
	终端就是用于实现人机交互的一种方式，专门为开发人员设计

在 Node.js 环境中执行 JS 代码：
	1. 打开终端
	2. 输入 node 要执行的js文件的路径
```

# 9. Node环境和浏览器环境区别

```
Node环境和浏览器环境区别
	1. NodeJS环境和浏览器环境一样都是一个JS的运行环境, 都可以执行JS代码，但是由于宿主不同所以特点也有所不同
		1. 内置对象不同
			1. 浏览器环境中提供了window全局对象
			2. NodeJS环境中的全局对象不叫window, 叫global
	
	2. this默认指向不同
		1. 浏览器环境中全局this默认指向window
		2. NodeJS环境中全局this默认指向空对象{}

	3. API不同
		1. 浏览器环境中提供了操作节点的DOM相关API和操作浏览器的BOM相关API
		2. NodeJS环境中没有HTML节点也没有浏览器, 所以NodeJS环境中没有DOM/BOM
```

# 10. Node全局对象上的属性

```
中文文档地址: http://nodejs.cn/api/（和浏览器一样，Node运行环境也提供一系列API供我们操作）

例如：
	__dirname: 当前文件所在文件夹的绝对路径
	__filename: 当前文件的绝对路径
	setInterval / clearInterval : 和浏览器中window对象上的定时器一样
	setTimeout /  clearTimeout : 和浏览器中window对象上的定时器一样
	console :  和浏览器中window对象上的打印函数一样
```

![image-20221108145140607](assets\image-20221108145140607.png)

# 11. 模块化

```
1. 什么是模块化
	模块化是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程，对于整个系统来说，模块是可组合、分解和更换的单元

2. 编程领域中的模块化
	编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块

	把代码进行模块化拆分的好处：
		1. 提高了代码的复用性（一个功能一个模块）
		2. 提高了代码的可维护性（一个模块的修改不影响其他模块）
		3. 可以实现按需加载（想使用哪个功能，就加载哪个模块）

3. 模块化规范
	模块化规范就是对代码进行模块化的拆分与组合时，需要遵守的那些规则
	
	例如：
		使用什么样的语法格式来引用模块
		在模块中使用什么样的语法格式向外暴露成员
		
	模块化规范的好处：
		大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利己
```

# 12. Node.js中的模块化 

## 	1. Node.js 中的模块分类

```
Node.js 中根据模块来源的不同，将模块分为了 3 大类，分别是：

	1. 内置模块（内置模块是由 Node.js 官方提供的，例如 fs、path、http 等）
	
 	2. 自定义模块（用户创建的每个 .js 文件，都是自定义模块）
 	
	3. 第三方模块（由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载）
```

## 	2. Node.js 中加载模块

```
1. require() 方法，加载需要的内置模块、用户自定义模块 第三方模块进行使用
2. require() 方法加载其它模块时，会执行被加载模块中的代码
3. require() 方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准
```

## 	3. Node.js 中的模块作用域

```
1. 什么是模块作用域
	和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域

2. 模块作用域的好处
	防止了全局变量污染的问题
	全局变量污染问题：
		1.当程序两个不同部分定义同名但作用不同的全局变量，命名冲突在所难免
			比如：不是该页面开发者写的代码，容易造成命名冲突，使一个变量覆盖另外一个变量，造成污染
		2.代码某一处修改了全局变量，会导致所有模块变更，可能造成有的地方没有顾及到。造成污染
	
3. 向外共享模块作用域中的成员
	1. module 对象
		在每个 .js 自定义模块中都有一个 module 对象，里面存储了当前模块有关的信息

	2. module.exports 对象
		在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
		外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象

	3.exports 对象
 		为了简化module.exports的写法，Node 提供了 exports 对象
 		默认情况下，exports 和 module.exports 指向同一个对象，
 		最终共享的结果，还是以 module.exports 指向的对象为准
```

## 4. Node.js 中的模块化规范

```
Node.js 遵循了 CommonJS 模块化规范，CommonJS 规定了模块的特性和各模块之间如何相互依赖

CommonJS 规定：
	1. 每个模块内部，module 变量代表当前模块
	2. module 变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口
	3. 加载某个模块，其实是加载该模块的 module.exports 属性，require() 方法用于加载模块
```

# 13. 内置模块

## 	1. fs 文件系统模块

```
fs 模块是 Node.js 官方提供的、用来操作文件的模块，提供了一系列的方法和属性，用来满足用户对文件的操作需求

例如：
	fs.readFile(path[,option],callback)：用来读取指定文件的内容
		参数1：必选参数，字符串，表示文件的路径。
		参数2：可选参数，表示以什么编码格式来读取文件
		参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果

		
	fs.writeFile(file,data[,options],callback)：向指定文件写入内容（会覆盖原有内容）
		参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径
		参数2：必选参数，表示要写入的内容
		参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf8
		参数4：必选参数，文件写入完成后的回调函数

注意：在使用fs模块操作文件时，直接提供完整的路径，不要提供 ./ 或 ../ 开头的相对路径，从而防止路径动态拼接的问题
```

## 	2. path 路径模块

```
path 模块是 Node.js 官方提供的、用来处理路径的模块，提供了一系列的方法和属性，用来满足用户对路径的处理

例如：
	path.join([...path])：用来将多个路径片段拼接成一个完整的路径字符串
		参数：	
			...paths <string> 路径片段的序列
			返回值: <string>

	path.basename(path[,ext])：用来从路径字符串中，将文件名解析出来
		参数：
			path <string> 必选参数，表示一个路径的字符串
			ext <string> 可选参数，表示文件扩展名
			返回: <string> 表示路径中的最后一部分

	path.extname([path])：可以获取路径中的扩展名部分
		参数：
			path <string> 必选参数，表示一个路径的字符串
			返回: <string> 返回得到的扩展名字符串
```

## 	3. http 模块

```
http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块

在网络节点中，负责消费资源的电脑，叫做客户端；负责对外提供网络资源的电脑，叫做服务器

http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块

通过 http 模块提供的 http.createServer() 方法，就能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务

	1. IP 地址
		IP 地址就是互联网上每台计算机的唯一地址，互联网中每台 Web 服务器，都有自己的 IP 地址
		例如：ping www.baidu.com 命令，即可查看到百度服务器的 IP 地址
	
	2. 域名和域名服务器
		IP地址和域名是一一对应的关系，这份对应关系存放在一种叫做域名服务器(DNS，Domain name server)的电脑中
		域名服务器就是提供 IP 地址和域名之间的转换服务的服务器
		例如：127.0.0.1 对应的域名是 localhost

	3. 端口号
		客户端发送过来的网络请求，通过端口号，可以被准确地交给对应的 web 服务进行处理
		每个端口号不能同时被多个 web 服务占用（端口号唯一）
		在实际应用中，URL 中的 80 端口可以被省略

	http模块使用步骤：
		1. 导入 http 模块
		2. 创建 web 服务器实例
		3. 为服务器实例绑定 request 事件，监听客户端的请求
		4. 启动服务器
```

![image-20221108154723569](assets\image-20221108154723569.png)

# 14. npm与包

```
1. 什么是包
	Node.js 中的第三方模块又叫做包

2. 包的来源
	包不同于 Node.js 中的内置模块与自定义模块，包是由第三方个人或团队开发出来的，免费供所有人使用
	而且 Node.js 中的包都是免费且开源的，不需要付费即可免费下载使用

3. 为什么需要包
	由于 Node.js 的内置模块仅提供了一些底层的 API，导致在基于内置模块进行项目开发的时，效率很低
	包是基于内置模块封装出来的，提供了更高级、更方便的 API，极大的提高了开发效率
	包和内置模块之间的关系就类似于 jQuery 和 浏览器内置 API 之间的关系

4. 从哪里下载包
	全球最大的包共享平台：https://www.npmjs.com/（从这个网站上搜索到自己所需要的包）

5. 如何下载包
	包管理工具的名字叫做 Node Package Manager（简称 npm 包管理工具），
	这个包管理工具随着 Node.js 的安装包一起被安装到了用户的电脑上
	查看 npm 包管理工具的版本号：npm -v

6. 项目中下载格式化时间包
	1. 使用 npm 包管理工具，在项目中安装格式化时间的包 moment
	2. 使用 require() 导入格式化时间的包
	3. 参考 moment 的官方 API 文档对时间进行格式化

7. 在项目中安装包的命令
	npm install 包的完整名称
	npm i 包的完整名称

8. 初次安装包多了哪些文件
	1. 初次装包完成后，在项目文件夹下多一个叫做 node_modules 的文件夹和 package-lock.json 的配置文件
	2. node_modules 文件夹用来存放所有已安装到项目中的包，require() 导入第三方包时，就是从这个目录中查找并加载包
	3. package-lock.json 配置文件用来记录 node_modules 目录下的每一个包的下载信息，例如包的名字、版本号、下载地址等
	4. 程序员不需手动修改 node_modules 或 package-lock.json 文件中的任何代码，npm 包管理工具会自动维护它们

9. 安装指定版本的包
	1. 默认情况下，使用 npm install 命令安装包的时候，会自动安装最新版本的包，
	2. 如果需要安装指定版本的包，可以在包名之后，通过 @ 符号指定具体的版本
	例如：npm i moment@2.22.2

10. 包的语义化版本规范
	包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如 2.24.0
		每一位数代表含义如下：
			第1位数字：大版本
			第2位数字：功能版本
			第3位数字：Bug修复版本
		版本号提升的规则：
			只要前面的版本号增长了，则后面的版本号归零

11. 包管理配置文件
	1. npm 规定，在项目根目录中，必须提供一个叫做 package.json 的包管理配置文件，用来记录与项目有关的一些配置信息
		例如：
			项目的名称、版本号、描述等
			项目中都用到了哪些包
			哪些包只在开发期间会用到
			哪些包在开发和部署时都需要用到
	2. 多人协作的问题
		整个项目的体积是 30.4M
		第三方包的体积是 28.8M
		项目源代码的体积 1.6M
			遇到的问题：
				第三方包的体积过大，不方便团队成员之间共享项目源代码
			解决方案：
				共享时剔除node_modules

12. 如何记录项目中安装了哪些包
	在项目根目录中，创建一个叫做 package.json 的配置文件，即可用来记录项目中安装了哪些包，
	从而方便剔除 node_modules 目录之后，在团队成员之间共享项目的源代码，
	所以上传github时，一定要把 node_modules 文件夹，添加到 .gitignore 忽略文件中（因为node_modules体积太大了）

13. 快速创建 package.json
	npm 包管理工具提供了一个快捷命令，可以在执行命令时所处的目录中，快速创建 package.json 这个包管理配置文件：
	
	npm init -y（作用：在执行命令所处的目录中，快速新建 package.json文件）
	注意：
		1. 上述命令只能在英文的目录下成功运行！所以，项目文件夹的名称一定要使用英文命名，不要使用中文，不能出现空格
		2. 运行 npm install 命令安装包的时候，npm 包管理工具会自动把包的名称和版本号，记录到 package.json 中

14. dependencies 节点
	package.json 文件中，有一个 dependencies 节点，专门用来记录您使用 npm install 命令安装了哪些包

15. 一次性安装所有的包
	当我们拿到一个剔除了 node_modules 的项目之后，需要先把所有的包下载到项目中，才能将项目运行起来
	否则会报类似于下面的错误：
		Error：Cannot find module 'moment'（由于项目运行依赖于 moment 这个包，如果没有提前安装好这个包，就报这个错误）
	
	npm install（一次性安装所有的包，读取到记录的所有依赖包名称和版本号之后，npm 包管理工具会把这些包一次性下载到项目中）

16. 卸载包
	npm uninstall 命令执行成功后，会把卸载的包，自动从 package.json 的 dependencies 中移除掉
	例如：npm uninstall moment（卸载moment这个包）

17. devDependencies 节点
	如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到 devDependencies 节点中
	与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到 dependencies 节点中
	npm i 包名 -D（简写形式，安装指定的包，并记录到 devDependencies 节点中）
	npm install 包名 --save-dev（全写形式，安装指定的包，并记录到 devDependencies 节点中）

18. 解决下包速度慢的问题
	1. 为什么下包速度慢
		在使用 npm 下包的时候，默认从国外的 https://registry.npmjs.org/ 服务器进行下载，
		此时，网络数据的传输需要经过漫长的海底光缆，因此下包速度会很慢，
		淘宝在国内搭建了一个服务器，专门把国外官方服务器上的包同步到国内的服务器，然后在国内提供下包的服务，
		从而极大的提高了下包的速度！
		
	2. 切换 npm 的下包镜像源
		npm config get registry（查看当前的下包镜像源）
		npm config set registry=https://registry.npm.taobao.org/（将下包的镜像源切换为淘宝镜像源）
		npm config set registry=https://registry.npmjs.org/(将下包的来源重新切换官方服务器)
		npm config get registry（检查镜像源是否下载成功）
	
	3. nrm
		为了更方便的切换下包的镜像源，我们可以安装 nrm 这个小工具，利用 nrm 提供的终端命令，可以快速查看和切换下包的镜像源
		npm i nrm -g（通过 npm 包管理器，将 nrm 安装为全局可用的工具）
        nrm ls（查看所有可用的镜像源）
       	nrm use taobao（将下包的镜像源切换为 taobao 镜像）

19. 包的分类
	npm 包管理工具下载的包，共分为两大类，分别是：
		1. 项目包
			安装在项目中的 node_modules 目录中的包，都是项目包
			项目包又分为两类，分别是：
				开发依赖包（被记录到 devDependencies 节点中的包，只在开发期间会用到）
					npm i 包名 -D（指定开发依赖包）
				核心依赖包（被记录到 dependencies 节点中的包，在开发期间和项目上线之后都会用到）
					npm i 包名（默认核心依赖包）
			
		2. 全局包
			npm i 包名 -g（全局安装指定的包）
			npm uninstall 包名（卸载全局安装的包）
			
			在执行 npm install 命令时，如果提供了 -g 参数，则会把包安装为全局包
			全局包会被安装到 C:\Users\用户目录\AppData\Roaming\npm\node_modules 目录下
			注意：
				1. 只有工具性质的包，才有全局安装的必要性，因为它们提供了好用的终端命令
				2. 判断某个包是否需要全局安装后才能使用，可以参考官方提供的使用说明即可
			将i5ting_toc安装为全局包：
				i5ting_toc 是一个可以把 md 文档转为 html 页面的小工具
					npm install -g i5ting_toc（将i5ting_toc安装为全局包）
					i5ting_toc -f 要转换的md文件路径 -o

20. 规范的包结构
	一个规范的包，它的组成结构，必须符合以下 3 点要求：
		1. 包必须以单独的目录而存在
		2. 包的顶级目录下必须包含 package.json 这个包管理配置文件
		3. package.json 中必须包含 name，version，main 这三个属性，分别代表包的名字、版本号、包的入口
		以上 3 点要求是一个规范的包结构必须遵守的格式，关于更多的约束，可以参考如下网址：
		https://yarnpkg.com/zh-Hans/docs/package-json

21. 开发属于自己的包（跟着操作就好了，了解下）
	1. 需要实现的功能
		 1. 格式化日期
		 2. 转义 HTML 中的特殊字符
 		 3. 还原 HTML 中的特殊字符
	2. 初始化包的基本结构
		 1. 新建 yjxz-tools 文件夹，作为包的根目录
		 2. 在 yjxz-tools 文件夹中，新建如下三个文件：
		 	package.json 	（包管理配置文件）
			index.js		（包的入口文件）
			README.md  		（包的说明文档）
	3. 初始化 package.json
		关于更多 license 许可协议相关的内容，可参考 https://www.jianshu.com/p/86251523e898（七种开源许可证）
		
	4. 在 index.js 中定义格式化时间的方法
	
	5. 在 index.js 中定义转义 HTML 的方法
	
	6. 在 index.js 中定义还原 HTML 的方法
	
	7. 将不同的功能进行模块化拆分
		1. 将格式化时间的功能，拆分到 src -> dateFormat.js 中
		2. 将处理 HTML 字符串的功能，拆分到 src -> htmlEscape.js 中
		3. 在 index.js 中，导入两个模块，得到需要向外共享的方法
		4. 在 index.js 中，使用 module.exports 把对应的方法共享出去
		
	8. 编写包的说明文档
		包根目录中的 README.md 文件，是包的使用说明文档，
		通过它，我们可以事先把包的使用说明，以 markdown 的格式写出来，方便用户参考
		README 文件中具体写什么内容，没有强制性的要求；只要能够清晰地把包的作用、用法、注意事项等描述清楚即可
		我们所创建的这个包的 README.md 文档中，会包含以下 6 项内容：
			安装方式、导入方式、格式化时间、转义 HTML 中的特殊字符、还原 HTML 中的特殊字符、开源协议

22. 发布包
	1. 注册 npm 账号
		1. 访问 https://www.npmjs.com/ 网站，点击 sign up 按钮，进入注册用户界面
		2. 填写账号相关的信息：Full Name、Public Email、Username、Password
		3、 点击 Create an Account 按钮，注册账号
		4. 登录邮箱，点击验证链接，进行账号的验证
	2. 登录 npm 账号
		npm 账号注册完成后，可以在终端中执行 npm login 命令，依次输入用户名、密码、邮箱后，即可登录成功
		注意：在运行 npm login 命令之前，必须先把下包的服务器地址切换为 npm 的官方服务器，否则会导致发布包失败！
	3. 把包发布到 npm 上
		将终端切换到包的根目录之后，运行 npm publish 命令，即可将包发布到 npm 上（注意：包名不能雷同）
	4. 删除已发布的包
		运行 npm unpublish 包名 --force 命令，即可从 npm 删除已发布的包。
		注意：
			1. npm unpublish 命令只能删除 72 小时以内发布的包
			2. npm unpublish 删除的包，在 24 小时内不允许重复发布
			3. 发布包的时候要慎重，尽量不要往 npm 上发布没有意义的包
```

# 15. 模块的加载机制

## 	1. 优先从缓存中加载

```
模块在第一次加载后会被缓存，这也意味着多次调用 require() 不会导致模块的代码被执行多次

注意：不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率
```

## 	2. 内置模块的加载机制

```
内置模块是由 Node.js 官方提供的模块，内置模块的加载优先级最高

例如：require('fs') 始终返回内置的 fs 模块，即使在 node_modules 目录下有名字相同的包也叫做 fs
```

## 	3. 自定义模块的加载机制

```
使用 require() 加载自定义模块时，必须指定以 ./ 或 ../ 开头的路径标识符，
在加载自定义模块时，如果没有指定 ./ 或 ../ 这样的路径标识符，则 node 会把它当作内置模块或第三方模块进行加载

同时，在使用 require() 导入自定义模块时，如果省略了文件的扩展名，则 Node.js 会按顺序分别尝试加载以下的文件：
	1. 按照确切的文件名进行加载
	2. 补全 .js 扩展名进行加载
	3. 补全 .json 扩展名进行加载
	4. 补全 .node 扩展名进行加载
	5. 加载失败，终端报错
```

## 	4. 第三方模块的加载机制

```
如果传递给 require() 的模块标识符不是一个内置模块，也没有以 ‘./’ 或 ‘../’ 开头，
则 Node.js 会从当前模块的父目录开始，尝试从 /node_modules 文件夹中加载第三方模块

如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录
例如，假设在 'C:\Users\yjxz\project\foo.js' 文件里调用了 require('tools')，则 Node.js 会按以下顺序查找：
	1. C:\Users\yjxz\project\node_modules\tools
 	2. C:\Users\yjxz\node_modules\tools
 	3. C:\Users\node_modules\tools
 	4. C:\node_modules\tools
```

## 	5. 目录作为模块

```
当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式：
	1. 在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 require() 加载的入口
	2. 如果目录里没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 index.js 文件。
	3. 如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失：Error: Cannot find module 'xxx'
```

# 16. yarn与npm

```
yarn与npm都是包管理工具

yarn是为了弥补 npm5.0 之前的一些缺陷而出现，在npm5.0之前，yarn的优势特别明显.但是现在NPM已经更新到6.9.x甚至7.x了,
随着npm的升级，npm优化甚至超越yarn,所以yarn不做总结！
```

# 17. ES6 模块化

```
1. node.js 中如何实现模块化
	1. node.js 遵循了 CommonJS 的模块化规范
		1. 导入其它模块使用 require() 方法
		2. 模块对外共享成员使用 module.exports 对象
		
	2. 模块化的好处：
		遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用，利人利己

2. 前端模块化规范的分类
	在 ES6 模块化规范诞生之前，JavaScript 社区已经尝试并提出了 AMD、CMD、CommonJS 等模块化规范
	但是社区提出的模块化标准，还是存在一定的差异性与局限性、并不是浏览器与服务器通用的模块化标准
	例如：
		AMD 和 CMD 适用于浏览器端的 Javascript 模块化
		CommonJS 适用于服务器端的 Javascript 模块化

3. 大一统的ES6模块化开发
	太多的模块化规范给开发者增加了学习的难度与开发的成本，因此，大一统的 ES6 模块化规范诞生！

4. 什么是 ES6 模块化规范
	ES6 模块化规范是浏览器端与服务器端通用的模块化开发规范，
	大的降低了前端开发者的模块化学习成本，开发者不需再额外学习 AMD、CMD 或 CommonJS 等模块化规范
	
5. 在 node.js 中体验 ES6 模块化（需要遵循以下，否则，会报错）
	1. node.js 中默认仅支持 CommonJS 模块化规范
	2. 若想基于 node.js 体验与学习 ES6 的模块化语法，可以按照如下两个步骤进行配置：
		1. 确保安装了 v14.15.1 或更高版本的 node.js
		2. 在 package.json 的根节点中添加 "type": "module" 节点
		
6. ES6 模块化规范中定义：
	1. 每个 js 文件都是一个独立的模块
	2. 导入其它模块成员使用 import 关键字
	3. 向外共享模块成员使用 export 关键字

7. ES6 模块化的基本语法（主要包括如下3种）
	1. 默认导出与默认导入
		1. 默认导出
			 export default 默认导出的成员
		2. 默认导入
			 import 接收名称 from '模块标识符'
		默认导出的注意事项：
			每个模块中，只允许使用唯一的一次 export default，否则会报错！
		默认导入的注意事项：
        	默认导入时的接收名称可以任意名称，只要是合法的成员名称即可！
        	
	2. 按需导出与按需导入
		1. 按需导出
			export 按需导出的成员
		2. 按需导入
			 import { s1 } from '模块标识符'
		按需导出与按需导入的注意事项：
			1. 每个模块中可以使用多次按需导出
			2. 按需导入的成员名称必须和按需导出的名称保持一致
			3. 按需导入时，可以使用 as 关键字进行重命名
			4. 按需导入可以和默认导入一起使
		
	3. 直接导入并执行模块中的代码
		如果只想单纯地执行某个模块中的代码，并不需要得到模块中向外共享的成员, 此时，可以直接导入并执行模块代码
		import './直接导入并执行模块测试.js'
```

# 18. 前端工程化（本人扩展了解）

```
本人了解webpack的时候，总结了些知识，害！

小白眼中的前端开发：
	1. 会写HTML + CSS + JavaScript 就会前端开发
	2. 需要美化页面样式，就拽一个bootstrap 过来
		（本人体系中就总结了bootstrap的栅格系统，本人干Java的啊，再说会原生，上手也快！
	3. 需要操作DOM或发起Ajax 请求，再拽一个jQuery 过来
	4. 需要渲染模板结构，就用art-template 等模板引擎
		（这个我的总结体系并没有归纳进来了，我体系几乎全部是关注原生要点，因为我干Java的啊，再说会原生，上手也快）

实际的前端开发：
	1. 模块化（js 的模块化、css 的模块化、其它资源的模块化）
	2. 组件化（复用现有的UI 结构、样式、行为）
	3. 规范化（目录结构的划分、编码规范化、接口规范化、文档规范化、Git 分支管理）
	4. 自动化（自动化构建、自动部署、自动化测试）

1. 什么是前端工程化
	前端工程化指的是：在企业级的前端项目开发中，把前端开发所需的工具、技术、流程、经验等进行规范化、标准化
	最终落实到细节上，就是实现前端的“4 个现代化”：模块化、组件化、规范化、自动化

2. 前端工程化的好处（主要两方面）
	1. 前端工程化让前端开发能够“自成体系”，覆盖了前端项目从创建到部署的方方面面
	2. 最大程度地提高了前端的开发效率，降低了技术选型、前后端联调等带来的协调沟通成本

3. 前端工程化的解决方案

	早期的前端工程化解决方案：
		grunt（https://www.gruntjs.net/）
		gulp（https://www.gulpjs.com.cn/）
	
	目前主流的前端工程化解决方案：
		webpack（https://www.webpackjs.com/）（本人学习过，但是几乎都忘了，反正前端工程化了解下，反正我是干Java）
		parcel（https://zh.parceljs.org/ ）

就这样简单总纲下，ok啦！
```

# 19. NPM使用总览

```
1. 全局安装  (一般用于安装全局使用的工具, 存储在全局node_modules中)
    npm install -g 包名   (默认安装最新版本)
    npm uninstall -g 包名
    npm update -g 包名   (更新失败可以直接使用install)

2. 本地安装 (一般用于安装当前项目使用的包, 存储在当前项目node_modules中)
    npm install 包名
    npm uninstall 包名
    npm update 包名

3. 初始化本地包
    npm init   ->  初始化package.json文件
    npm init -y -> 初始化package.json文件

    npm install 包名 --save
    npm install 包名 --save-dev

    包描述文件 package.json, 定义了当前项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。
    npm install 命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境
    注意点:package.json文件中, 不能加入任何注释

    dependencies：生产环境包的依赖，一个关联数组，由包的名称和版本号组成
    devDependencies：开发环境包的依赖，一个关联数组，由包的名称和版本号组成

    1.将项目拷贝给其它人, 或者发布的时候, 我们不会将node_modules也给别人, 因为太大
    2.因为有的包可能只在开发阶段需要, 但是在上线阶段不需要, 所以需要分开指定

    npm i               所有的包都会被安装
    npm i --production  只会安装dependencies中的包
    npm i --development  只会安装devDependencies中的包
```

# 20. NRM-CNPM使用总览

```
1.什么是nrm?
	由于npm默认回去国外下载资源, 所以对于国内开发者来说下载会比较慢
	所以就有人写了一个nrm工具, 允许你将资源下载地址从国外切换到国内

	npm install -g nrm   安装NRM
	nrm --version 查看是否安装成功
	npm ls    查看允许切换的资源地址
	npm use taobao  将下载地址切换到淘宝
	PS:淘宝资源地址和国外的地址内容完全同步,。淘宝镜像与官方同步频率目前为 10分钟 一次以保证尽量与官方服务同步

2.什么是cnpm?
	由于npm默认回去国外下载资源, 所以对于国内开发者来说下载会比较慢
	cnpm 就是将下载源从国外切换到国内下载, 只不过是将所有的指令从npm变为cnpm而已

	npm install cnpm -g –registry=https://registry.npm.taobao.org  安装CNPM
	cnpm -v  查看是否安装成功
	使用方式同npm, 例如: npm install jquery 变成cnpm install jquery 即可
```

# 21. YARN使用总览

```
1.什么是YARN?
	Yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具
	Yarn 是为了弥补 npm5.0之前 的一些缺陷而出现的

	注意点:
		在npm5.0之前，yarn的优势特别明显.但是现在NPM已经更新到6.9.x甚至7.x了,
		随着NPM的升级NPM优化甚至超越Yarn,所以个人还是建议使用NPM

2.NPM的缺陷:
	1. npm install的时候巨慢
  	 	npm 是按照队列执行每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装
	2. 同一个项目，npm install的时候无法保持一致性
  		“5.0.3”表示安装指定的5.0.3版本，
  		“~5.0.3”表示安装5.0.X中最新的版本，
  		“^5.0.3”表示安装5.X.X中最新的版本

3.YARN优点:
	1. 速度快:
    	并行安装: 而 Yarn 是同步执行所有任务，提高了性能
    	离线模式：如果之前已经安装过一个软件包，用Yarn再次安装时之间从缓存中获取，就不用像npm那样再从网络下载了
	2. 安装版本统一：
    	为了防止拉取到不同的版本，Yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号

4.YARN的安装
	npm install -g yarn
	yarn --version

5.YARN使用
	1. 初始化包
		npm init -y
		yarn init -y
	2. 安装包
		npm install xxx --save
		yarn add xxx
		npm install xxx --save-dev
		yarn add xxx --dev

	3. 移除包
		npm uninstall xxx
		yarn remove xxx

	4. 更新包
		npm update xxx
		yarn upgrade xxx --latest

	5. 全局安装
		npm install -g xxx
		npm uninstall -g xxx
		npm update -g xxx

		yarn global add xxx
		yarn global upgrade xxx
		yarn global remove xxx
```

