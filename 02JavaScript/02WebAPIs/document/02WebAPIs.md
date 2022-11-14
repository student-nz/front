# 二、WebAPIs

# （入门操作，深入学习参考网站）

# 1. API

```
API（Application Programming Interface,应用程序编程接口）是一些预先定义的函数，目的就是简化开发调用接口
无需访问源码或理解内部工作机制的细节（API简单来说就是供程序简化开发的一种工具）
```

# 2. WebAPI

```
Web API 是浏览器提供的一套操作浏览器功能和页面元素的 API ( BOM 和 DOM )（这里都是基本操作，具体参考MDN官网）

MDN详细API: https://developer.mozilla.org/zh-CN/docs/Web/API 
```

![image-20221103085859723](assets\02DOM.png)

# 3. WebAPI-DOM

## 	1. 什么是DOM

```
文档对象模型（Document Object Model，简称 DOM）

W3C 组织推荐的处理可扩展标记语言（HTML或者XML）的标准编程接口

W3C 已经定义了一系列的 DOM 接口，通过这些 DOM 接口可以改变网页的内容、结构和样式

W3C官网：https://www.w3.org/
```

## 	2. DOM树

![image-20221103092249089](assets\image-20221103092249089.png)

```
DOM把以下内容都看做是对象 

文档：一个页面就是一个文档，DOM中使用document表示

元素：页面中的所有标签都是元素，DOM中使用element表示

节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM 中使用 node 表示 
```

## 	3. window&document

```
1. 什么是window?（例如前面所学JS不开启严格模式时，默认全局作用域为window对象，开启严格模式后，什么变化，参考ECMScript文档）
	window：是一个全局对象, 代表浏览器中一个打开的窗口, 每个窗口都是一个window对象
2. 什么是document?
	document是window的一个属性, 这个属性是一个对象
	document: 代表当前窗口中的整个网页,
	document对象保存了网页上所有的内容, 通过document对象就可以操作网页上的内容
```

## 4. DOM-获取DOM元素

```
DOM上
1. 通过id获取指定元素
	由于id不可重复, 找到就会将找到的标签包装成一个对象返回, 否则，返回Null
	DOM操作返回的是一个对象, 这个对象是宿主类型对象(浏览器提供的对象)（前面我们还知道有内置对象，自定义对象）
	
	document.getElementById("box");

2. 通过class名称获取元素数组
	由于class可以重复, 所以找到了就返回一个存储了标签对象的数组, 找不到就返回一个空数组
	
	document.getElementsByClassName("father");

3. 通过name名称获取元素数组
	由于name可以重复, 所以找到了就返回一个存储了标签对象的数组, 找不到就返回一个空数组
	
	document.getElementsByName("test");

4. 通过标签名称获取元素数组
	由于标签名称可以重复, 所以找到了就返回一个存储了标签对象的数组, 找不到就返回一个空数组
	
	document.getElementsByTagName("div");

5. 通过选择器获取元素/元素数组
	querySelector返回指定选择器找到的第一个元素
	querySelectorAll返回指定选择器找到的所有元素
	
	document.querySelector("div>form");
	document.querySelectorAll(".father");

DOM下
	1.获取指定元素所有的子元素
		children属性获取到的是指定元素中所有的子元素
		childNodes属性获取到的是指定元素中所有的节点
		let of  遍历子节点
		nodeType 节点类型（下图）
	2.获取指定节点中第一个子节点
	3.获取指定元素中的第一个子元素
	4.获取指定节点中最后一个子节点
	5.获取指定元素中最后一个子元素
    6.通过子元素获取父元素/父节点
   	7.获取相邻上一个节点/元素
   	8.获取相邻下一个节点/元素
```

![image-20221103095934722](assets\image-20221103095934722.png)

## 5. DOM-节点增删改查

```
1.创建节点
2.添加节点
	appendChild方法会将指定的元素添加到最后
3.插入节点
4.删除节点
	在js中如果想要删除某一个元素, 只能通过对应的父元素来删除（不能自行删除）
5.克隆节点
	cloneNode方法默认不会克隆子元素, 如果想克隆子元素需要传递一个true
```

## 6. DOM-元素属性操作

```
 1. 通过document创建还是查询出来的标签,系统都会将元素包装成一个对象返回给我们,这元素对象包含了属性
 
 2. 获取元素属性
 	通过对象.属性名称的方式无法获取到自定义属性的取值
 	通过getAttribute方法可以获取到自定义属性的取值
	
 3. 修改元素属性
 
 4. 新增元素属性
 
 5. 删除元素属性
```

## 7. DOM-元素内容操作

```
1.获取元素内容
	 1.innerHTML获取的内容包含标签, innerText/textContent获取的内容不包含标签
	 2.innerHTML/textContent获取的内容不会去除两端的空格, innerText获取的内容会去除两端的空格

2. 设置元素内容
	无论通过innerHTML/innerText/textContent设置内容, 新的内容都会覆盖原有的内容
	如果通过innerHTML设置数据, 数据中包含标签, 会转换成标签之后再添加
	如果通过innerText/textContent设置数据, 数据中包含标签, 不会转换成标签, 会当做一个字符串直接设置
```

## 8. DOM-元素样式操作

```
1.设置元素样式
	CSS中通过-连接的样式, 在JS中都是驼峰命名
	通过JS添加的样式都是行内样式, 会覆盖掉同名的CSS样式
2.获取元素样式
	通过style属性只能过去到行内样式的属性值, 获取不到CSS设置的属性值
	如果想获取到CSS设置的属性值, 必须通过getComputedStyle方法来获取
		window.getComputedStyle方法接收一个参数, 这个参数就是要获取的元素对象
		window.getComputedStyle方法返回一个对象, 这个对象中就保存了CSS设置的样式和属性值
```

## 9. DOM-事件

```
1. 事件就是用户和浏览器之间的交互行为，比如：点击、移入/移出、点击事件等（其余事件类似操作）

2. 绑定事件三种方式(也称注册事件，还称添加事件）
	 1.通过onxxx的方式来添加
	 2.通过addEventListener方法添加
	 3.通过attachEvent方法添加
		如果给元素添加了和系统同名的事件, 我们添加的事件不会覆盖系统添加的事件
		用我们添加的事件覆盖掉系统默认的事件

3. 事件对象
	1. 事件对象就是一个系统自动创建的一个对象， 当注册的事件被触发的时候, 系统就会自动创建事件对象
	2. 事件对象浏览器兼容问题
		 在高级版本的浏览器中, 会自动将事件对象传递给回到函数
		 在低级版本的浏览器中,不会自动将事件对象传递给回调函数，需要通过window.event来获取事件对象
	3. 事件阻止默认行为
		preventDefault方法只支持高级版本的浏览器
	事件类型：事件对象.type;
			如演示中：event.type
4. 事件的三个阶段
	1. 捕获阶段(从外向内的传递事件)
	2. 当前目标阶段
	3. 冒泡的阶段(从内向外的传递事件)

5. 设置事件到底是捕获还是冒泡（三种方案比较）
	1. 通过addEventListener方法, 这个方法接收三个参数
	 	第一个参数: 事件的名称
		第二个参数: 回调函数
		第三个参数: false冒泡  / true 捕获
	2. onXxx的属性, 不接收任何参数, 所以默认就是冒泡
	3. attachEvent方法, 只能接收两个参数, 所以默认就是冒泡

6. 阻止事件冒泡两种方式
	1. event.stopPropagation()方法只支持高级浏览器
	2. event.cancelBubble属性设置true支持低级浏览器

7. 两种移入移出事件区别
	1.onmouseover和onmouseenter的区别
		 onmouseover移入到子元素,父元素的移入事件也会被触发
		 onmouseenter移入到子元素,父元素的移入事件不会被触发
	2.onmouseout和onmouseleave的区别
		onmouseout从子元素移出,父元素的移入事件也会被触发
		onmouseleave从子元素移出,父元素的移入事件不会被触发

8. 事件委托
	事件委托的核心原理就是给父节点添加侦听器， 利用事件冒泡影响每一个子节点

9. 解绑事件三种方式（也称删除事件）
	1. 传统方式删除事件(属性置为null)
	2. removeEventListener 删除事件
	3. detachEvent

10. 鼠标事件对象-偏移量

11. 跟随鼠标的天使

12. 事件补充
	1. touch触摸事件
	2. 触摸事件对象
```

![image-20221103150909561](assets\image-20221103150909561.png)

![image-20221104001942291](assets\image-20221104001942291.png)

![image-20221104002151181](assets\image-20221104002151181.png)

![image-20221104002706832](assets\image-20221104002706832.png)

![image-20221104002732866](assets\image-20221104002732866.png)

![image-20221104002749729](assets\image-20221104002749729.png)

## 10. 定时器

```·
在JavaScript中有两种定时器, 一种是重复执行的定时器, 一种是只执行一次的定时器
调用定时器时函数会返回id值
通过id值进行清除定时器

1.重复执行的定时器(window.setInterval)

2.只执行一次的定时器(window.setTimeout)
```

# 4. WebAPI-BOM

## 	1.什么是BOM

```
浏览器对象模型（Browser Object Model,简称BOM）

DOM就是一套操作HTML标签的API(接口/方法/属性)

BOM就是一套操作浏览器的API(接口/方法/属性)
```

## 	2.BOM中常见的对象

```
1. window: 代表整个浏览器窗口（window是BOM中的一个对象, 并且是一个顶级的对象(全局)）

2. Navigator: 代表当前浏览器的信息, 通过Navigator我们就能判断用户当前是什么浏览器

3. Location: 代表浏览器地址栏的信息, 通过Location我们就能设置或者获取当前地址信息

4. History: 代表浏览器的历史信息, 通过History来实现刷新/上一步/下一步
            出于隐私考虑, 我们并不能拿到用户所有的历史记录, 只能拿到当前的历史记录
5. Screen: 代表用户的屏幕信息

BOM包好DOM，BOM比DOM大
```

![image-20221106171747911](assets\image-20221106171747911.png)

```
location对象：
	URL 的一般语法格式为： 
		protocol://host[:port]/path/[?query]#fragment 
		http://www.baidu.com/index.html?name=andy&age=18#link 
```

![image-20221106171915949](assets\image-20221106171915949.png)

![image-20221106172042290](assets\image-20221106172042290.png)

## 3. 获取元素宽高

```
1.通过getComputedStyle获取宽高
	1. 获取的宽高不包括 边框和内边距
	2. 可以获取行内设置的宽高也可以获取CSS设置的宽高
	3. 只支持获取, 不支持设置
	4. 只支持IE9及以上浏览器

2.通过currentStyle属性获取宽高
	1. 获取的宽高不包括 边框和内边距
	2. 可以获取行内设置的宽高也可以获取CSS设置的宽高
	3. 只支持获取, 不支持设置
	4. 只支持IE9以下浏览器

3. 通过style属性获取宽高
	1. 获取的宽高不包括 边框和内边距
	2. 只能获取内设置的宽高, 不能获取CSS设置的宽高
	3. 可以获取也可以设置
	4. 高级低级浏览器都支持

4. offsetWidth和offsetHeight
	1. 获取的宽高包含 边框 + 内边距 + 元素宽高
	2. 可以获取行内设置的宽高也可以获取CSS设置的宽高
	3. 只支持获取, 不支持设置
	4. 高级低级浏览器都支持


宽高包含什么比较：
	1. getComputedStyle/currentStyle/style：获取的宽高不包括 边框和内边距
	2. offsetWidth/offsetHeight：获取的宽高包括 边框和内边距

是否还可以设置比较：
	1. getComputedStyle/currentStyle/offsetXXX：只支持获取, 不支持设置
	2. style可以获取, 也可以设置

范围比较：
	1. getComputedStyle/currentStyle/offsetXXX可以获取行内,也可以获取外链和内联样式
	2. style只能获取行内样式	
```

## 4. 获取元素位置相关（offset家族）

```
offsetLeft和offsetTop作用：
	获取的元素到第一个定位祖先元素之间的偏移位
	如果祖先元素没有定位的, 就是获取到body的偏移位

offsetParent作用：
	获取元素的第一个定位祖先元素
```

## 5. offset家族与client家族对比

```
1. offsetxxx
	offsetWidth = 宽度 + 内边距 + 边框
	offsetHeight = 高度 + 内边距 + 边框

2.clientxxx
	clientWidth = 宽度 + 内边距
	clientHeight = 高度 + 内边距


offsetLeft/offsetTop: 距离第一个定位祖先元素偏移位 || body
clientLeft/clientTop: 左边框 和 顶部边框
```

## 6. scroll家族

```
1.内容没有超出元素范围时
	scrollWidth: = 元素宽度 + 内边距宽度 == clientWidth
	scrollHeight: = 元素高度 + 内边距的高度 == clientHeight

2.内容超出元素范围时
	scrollWidth: = 元素宽度 + 内边距宽度 + 超出的宽度
	scrollHeight: = 元素高度 + 内边距的高度 + 超出的高度

3.scrollTop / scrollLeft
	scrollTop: 超出元素内边距顶部的距离
	scrollLeft: 超出元素内边距左边的距离
```

## 7. 获取网页宽度

```
1. innerWidth/innerHeight只能在IE9以及IE9以上的浏览器中才能获取

2. documentElement.clientWidth/documentElement.clientHeight
	可以用于在IE9以下的浏览器的标准模式中获取
	浏览器在渲染网页的时候有两种模式"标准模式"/"混杂模式/怪异模式"
	默认情况下都是以标准模式来进行渲染的(CSS1Compat)
	如果网页没有书写文档声明, 那么就会按照"混杂模式/怪异模式"来进行渲染的(BackCompat)
	document.compatMode可判断模式类型
```
