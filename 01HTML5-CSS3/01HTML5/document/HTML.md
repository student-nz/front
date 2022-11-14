# 一、HTML

# （深入学习参考网站，百度/w3c/MDN）

## 1. 什么是网页

```
网页是网站中的一“页”，通常是 HTML 格式的文件，通过浏览器阅读
```

## 2. 网页由哪些部分构成

```
网页通常由图片、链接、文字、声音、视频等元素组成
```

## 3. 什么是HTML

```
HTML（Hyper Text Markup Language）是一种超文本标记语言，用来描述网页的一种语言，通俗称HTML网页或HTML文档
同时HTML网页或HTML文档的后缀名必须是.htm或html结尾
```

## 4. 什么是超文本

```
2 层含义： 
	1. 超越了文本的限制，可以加入图片、声音、动画、多媒体等内容
	2. 可以从一个文件跳转到另一个文件，与世界各地文件进行链接
```

## 5. 常见浏览器

```
IE、火狐（Firefox）、谷歌（Chrome）、Safari和Opera等
```

## 6. 浏览器内核

```
浏览器内核即渲染引擎，负责读取网页内容，整理讯息，计算网页的显示方式并显示页面，即专门对代码进行解析渲染的部分

同时，渲染引擎不同，导致解析相同代码时的速度、性能、效果也不同的

谷歌浏览器的渲染引擎速度快、性能高、效果好，所以更吸引用户的喜爱（推荐）
```

## 7. 常见浏览器内核

![image-20221005164625636](assets\常见浏览器内核.png) 

## 8. 什么是Web标准

```
Web 标准是由 W3C 组织和其他标准化组织制定的一系列标准的集合
```

## 9. 国际最著名的标准化组织是哪个？

```
W3C（万维网联盟）
```

## 10. 为什么需要web标准？

```
因为不同浏览器的渲染引擎不同，对于相同代码解析的效果会存在差异

如果用户想看一个网页，结果用不同浏览器打开效果不同，用户体验极差！

Web标准就是为了让不同的浏览器按照相同的标准显示结果，让展示的效果统一！
```

## 11. Web 标准由哪三部分构成

![image-20221005165014091](assets\Web标准构成.png)

## 12. HTML语法规范

```
HTML标签通常成对出现，我们称之为双标签，其中第一个标签是开始标签，第二个标签是结束标签
当然还存在特殊的标签必须是单个出现，我们称之为单标签
```

## 13. 标签之间有哪些关系

```
标签关系可分为 嵌套关系 和 并列关系
```

## 14. hTML骨架结构由哪些标签组成？

```
网页都会有一个基本的结构标签（也称为骨架标签）
基本结构标签：
	html标签：网页的整体
	head标签：网页的头部
	body标签：网页的身体
	title标签：网页的标题
```

## 15. 常用网页开发工具

```
Visual Studio Code、Webstorm 、Sublime 、Dreamweaver、Hbuilder等
```

## 16. VSCode 工具生成骨架标签新增了哪些代码

```
1. <!DOCTYPE> 标签：文档类型声明
	告诉浏览器使用哪种HTML版本来显示网页
2. lang 语言：用来定义当前文档显示的语言
	en即定义网页为英文网页
	zh-CN即定义网页为中文网页，当然也能显示英文
3. Charset 字符集
	常用字符集：GB2312 、BIG5 、GBK 和 UTF-8，其中 UTF-8 也被称为万国码
```

## 17. 网页字符集标准编码是哪一种

```
UTF-8，因为UTF-8几乎包含了全世界所有国家需要的字符，因此，统一使用标准编码UTF-8编码，否则可能出现乱码问题
```

## 18. 标签语义

```
标签语义即标签的含义，我们可以根据标签的语义，在合适的地方给出合适的标签，让页面结构更清晰
```

## 19. 标题标签

 	<h1> - <h6>：分别表示 1~6级标题

## 20. 段落、换行、水平线标签

	<br>：换行标签
	<p> </p>：段落标签
	<hr>：水平线标签

## 21. 文本格式化标签

```
1. 四种文本格式化标签
	<strong></strong>或<b></b>：加粗
	<em></em>或<i></i>：倾斜
	<del></del>或<s></s>：删除线
	<ins></ins>或<u></u>：下划线

2. 应用场景
	当需要让文字加粗、下划线、倾斜、删除线等效果时使用
3. 语义
	突出重要性的强调语境
```

## 22. 注释标签

```
<!--注释内容-->
```

## 23. 图片标签

```
<img />

属性：
	src：图片路径，必须属性
	alt：文本，替换文本，图像不能正常显示时显示的文本
	title：文本，提示文本，鼠标悬停在图像时显示的文本
	width：像素，设置图像的宽度
	height：像素，设置图像的高度
	border：像素，设置图像的边框
```

## 24. 路径

```
1. 相对路径：引用文件所在位置作为参考
	同一级路径
	下一级路径：/
	上一级路径：../
2. 绝对路径：从盘符开始的路径
```

## 25. 超链接标签 

```
1. 使用格式
	<a href="网络地址或本地地址"></a>
2. 属性
	href：链接URL，除了可以指定网络地址外，还可以指定本地地址
	target：链接页面打开方式
	_self(默认值)：当前窗口跳转跳转（不保留原网页）_
	blank：新窗口跳转（保留原网页）
	title：鼠标悬停时显示的提示文本
3. 显示特点
	1. a标签默认文字有下划线
	2. a标签从未点击过，默认文字显示蓝色
	3. a标签点击过之后，文字显示为紫色（清除浏览器历史记录可恢复蓝色）
```

## 26. HTM文件或HTML文档的注释

```
<!-- 注释语句 --> 		快捷键: ctrl + /
```

## 27. base标签

```
base标签就是专门用来统一指定网页中所有的超链接(a标签)如何打开，
与此同时base标签必须写在head标签的开始标签和结束标签之间，
如果既在base中指定了target又在a标签中指定了target,那么浏览器会按照a标签中指定的来执行
```

## 28. 假链接

```
1. 什么是假链接？
	假链接就是点击之后不会跳转的链接，假链接也称空链接
2. 假链接的应用场景
	在企业开发前期, 其它界面都没有写出来, 那么我们就不知道应该跳转到什么地方, 所以就只能使用假链接来代替
	当项目后期其它界面都已经完成时再将假链接体会为真链接
3. 假链接两种格式
	1. #
	2. javascript:
4. 两种假链接之间的区别
	#的假链接会自动回到网页的顶部
	javascript:的假链接不会自动回到网页顶部
```

## 29. 锚点



	1. 如何使用锚点？
		a标签要想跳到当前页面指定的位置, 那么必须告诉a标签一个独一无二的身份证号码
		而在HTML中, 每一个标签都有一个名称叫做id的属性, 这个属性就是用来给标签指定一个独一无二的身份证号码的
	
	2. 使用格式
	例如：
	    <a href="#center">跳转到中部</a>
		<h2 id="center">我是中部</h2>

## 30. 列表标签

```
1. 无序列表
	无序列表就是给一堆数据添加列表语义, 并且这一堆数据中所有的数据都没有先后之分
使用格式：
	<ul>
   		 <li>ul标签中只允许嵌套li标签，li标签中可以嵌套任意内容</li>
	</ul>
	ul标签：表示无序列表的整体
	li标签：表示无序列表的每一项
应用场景：
	1. 新闻列表
	2. 商品列表
	3. 导航条

2. 有序列表
		有序列表就是给一堆数据添加列表语义, 并且这一堆数据中所有的数据都有先后之分
使用格式：
	<ol>
		<li>ol标签中只允许嵌套li标签，li标签中可以嵌套任意内容</li>
	</ol>
	ol标签：表示有序列表的整体
	li标签：表示有序列表的每一项

应用场景：
	排行榜

3. 定义列表
	定义列表就是给一堆数据添加列表语义，然后先通过dt标签定义列表中的所有标题, 再通过dd标签给每个标题添加描述信息
使用格式：
<dl>
	<dt>dt标签定义列表中的所有标题</dt>
	<dd>dd标签给每个标题添加描述信息</dd>
	<dt>dt标签定义列表中的所有标题</dt>
	<dd>dd标签给每个标题添加描述信息</dd>
</dl>
dl标签中只允许包含dt/dd标签
dt/dd标签可以包含任意内容
显示特点：
	dd前会默认显示缩进效果

什么叫有先后之分以及什么叫无先后之分？
	1. 什么叫有先后之分？
		例如: 排行榜
	2. 什么叫无先后之分？
		例如：中国有哪些城市

列表应用场景：
	在网页中按照行展示关联性的内容，如：新闻列表、排行榜、账单等
```

## 31. 表格

```
表格就是用来给一堆数据添加表格语义，当数据量非常大的时候, 表格这种展现形式被认为是最为清晰的一种展现形式
表格基本结构：
	<table>
		<tr>
    		<td></td>
		</tr>
	</table>
表格相关标签：
	<table> </table>：表格
	<caption></caption> ：表格大标题
	<th></th>：表头单元格
	<tr> </tr>：表格行
	<td> </td>：单元格
	<thead></thead>：表格头部结构
	<tbody></tbody>：表格主体结构
	<tfoot></tfoot>：表格尾部结构
	caption标签书写在table标签内部
	th标签书写在tr标签内部（用于替换td标签）

表格相关属性：
			border：1或””，默认为””,表示没有边框
			width：像素值或百分比，规定表格宽度
			height：像素值，规定表格高度
			align（水平对齐）：left、center、right
			cellpadding：像素值，单元格与内容之间的空白，默认1像素
			cellspacing：像素值，规定单元格之间的空白，默认2像素
表格行相关属性：
			align（水平对齐）：控制当前行中所有单元格中的内容在水平方向的对齐方式
			valign（垂直对齐）：控制当前行中所有单元格中的内容, 在垂直方向的对齐方式

单元格相关属性：
			align（水平对齐）：控制当前单元格中的内容在水平方向的对齐方式
			valign（垂直对齐）：控制当前单元格中的内容在垂直方向的对齐方式
细线表格制作方式：
	方式一：
		1. 给table标签设置bgcolor
		2. 给tr标签设置bgcolor
		3. 给table标签设置cellspacing = "1px"
		bgcolor：背景颜色，table、tr、td通用，td覆盖tr，tr覆盖table
合并单元格：
	1. 水平方向合并
		<td colspan="2"></td>：把当前单元格当做两个单元格来看待
	2. 垂直方向合并
		<td rowspan="2"></td>：把当前单元格当做两个单元格来看待，垂直方向合并

无法跨结构合并单元格：
	只有同一个结构标签中的单元格才能合并，不能跨结构标签合并（不能跨：thead、tbody、tfoot）

表格完整结构：
	<table>	
		<caption>表格的标题</caption>
		<thead>
			<tr>
				<th>每一列的标题</th>
			</tr>
		</thead>
		<tbody>
    	    <tr>
     	       <td>数据</td>
     	   </tr>
   		 </tbody>
  	  	<tfoot>
        	<tr>
            	<td>数据</td>
        	</tr>
    	</tfoot>
	</table>
```

## 32. 表单

	表单就是专门用来收集用户信息的,表单又称表单域，表单元素一定要写在表单域中，同时表单元素又称表单控件
	使用格式：
	<form>
		<表单元素>
	</form>

### 	1. input输入表单元素

```
input相关属性：

1. type
	值：
	1. button：普通按钮，默认无功能，配合js添加功能
		但是谷歌浏览器中button默认是提交按钮，同时button标签是双标签，还能包裹其他内容：文字、图片等
	2. reset：重置按钮，会重置表单数据
	3. sumbit：提交按钮，会把表单数据发送到服务器
	4. radio：单选框，用于多选一
	5. checkbox：多选框，用于多选多
	6. file：文件选择，用于文件上传
	7. hidden：隐藏输入字段
	8. image：定义图像形式的提交按钮
	9. password：密码框
	10. text：文本框，用于输入单行文本，默认宽度20个字符
2. name
	值：用户自定义input名称	
3. value：
	值：用户自定义规定input值
4. checked：
	值：规定此input元素首次加载时被选中
5. maxlength：
	值：规定输入字符的最大宽度
6. placeholder
	值：占位符，提示用户输入内容的文本
应用场景：
	placeholder通常与type属性值：text或password一起使用，提示用户输入内容的文本
	可以通过以下设置方式修改placeholder里面的字体颜色： 
input::placeholder {  
	color: pink;  
} 

7. checked
	含义：默认选中
	应用场景：
		1. 应用于单选框
			在网页中显示多选一的单选表单控件，与type属性值：radio 一起使用，name属性值：组名
			name属性对于单选框有分组功能，有相同name属性值的单选框为一组，一组中只能同时有一个被选中
		2. 应用于多选框
			在网页中显示多选多的多选表单控件，与type属性值：checkbox 一起使用，checked表示默认选中
8. multiple
	含义：多文件选择
	应用场景：
		应用于文件选择，与type属性值：file一起使用，因为默认单文件选择，加上multiple代表可以选择多个文件
```

​	HTML5新增表单：

![image-20221006212310733](assets\HTML5新增表单.png)

HTML新增表单属性：

​	![image-20221006212440181](assets\HTML新增表单属性.png)	

### 2. select下拉表单元素

```
1. <select> 中至少包含一对<option>
2. 在<option> 中定义 selected =“ selected " 时，当前项即为默认选中项
	select标签：下拉菜单的整体
	option标签：下拉菜单的每一项
	selected属性：当前项为默认选中项
```

### 			3. textarea 文本域表单元素

```
textarea相关属性：
	cols：每行字符数
	rows：显示的行数
	右下角可以拖拽改变大小
```

### 4. label表单元素

```
1. 什么时候使用Label标签？
	默认情况下文字和输入框是没有关联关系的, 也就是说点击文字输入框不会聚焦, 
	要想点击文字聚焦输入框，需要让输入框和文字绑定在一起, 那么我们可以使用Label标签
2. 怎么用Label标签绑定input输入表单元素？
	1. 将文字利用label标签包裹起来
	2. 给输入框添加一个id属性
	3. 在label标签中通过for属性和输入框中的id进行绑定即可
	<label for="account">账号:</label><input type="text" id="account">
```

### 5. button按钮表单元素

```
一个完整的表单由哪三部分构成？
	一个完整的表单通常由表单域、表单控件（也称为表单元素）和 提示信息3个部分构成

说说value属性和name属性的具体作用：
	value属性：用户输入的内容，提交之后会发送给后端服务器
	name属性：当前控件的含义，提交之后可以告诉后端发送过去的数据是什么含义
	后端接收到数据的格式是：name的属性值 = value的属性值
```

## 33. 两个常见无语义的布局标签

```
div 和 span（布局标签）
	div标签：一行只显示一个（独占一行）
	span标签：一行可以显示多个
```

## 34. HTML5新增有语义的布局标签

![image-20221005182250188](assets\HTML5新增有语义布局标签.png)

​		

## 35. datalist标签

```
作用：给输入框绑定待选项
使用格式：
	<datalist>
		<option>待选项内容</option>
	</datalist>
如何给输入框绑定待选列表：
	1. 搞一个输入框
	2. 搞一个datalist列表
	3. 给datalist列表标签添加一个id
	4. 给输入框添加一个list属性,将datalist的id对应的值赋值给list属性即可
```

## 36. 跑马灯标签

```
使用格式：
	<marquee>内容</marquee>

相关属性：
	1. direction: 设置滚动方向 left/right/up/down
	2. scrollamount: 设置滚动速度, 值越大就越快
	3. loop: 设置滚动次数, 默认是-1, 也就是无限滚动
	4. behavior: 设置滚动类型 slide滚动到边界就停止, alternate滚动到边界就弹回
```

## 37. 视频标签video	

```
播放视频的标签

使用格式：
	格式一：
		<video src=""></video>
	格式二：
		<video autoplay="autoplay" controls="controls">
			<source src="images/sb1.webm" type="video/webm"></source>
			<source src="images/sb1.mp4" type="video/mp4"></source>
			<source src="images/sb1.ogg" type="video/ogg"></source>
		</video>
视频标签目前支持三种格式
	MP4、WebM、Ogg	
应用场景：
	在页面中插入视频
```

相关属性：

![image-20221006212019519](assets\视频相关属性.png)



## 38. 音频标签audio

```
播放音频的标签

使用格式:
	格式一：	
		<audio src=""></audio>
	格式二：
		<audio>
			<source src="" type="">
		</audio>
		
音频标签目前支持三种格式：
	MP3、Wav、Ogg

应用场景：
	在页面中插入音频
```

相关属性：

​		![image-20221006212111266](assets\音频相关属性.png)



## 39. 详细和概要标签

	详情和概要标签即利用summary标签来描述概要信息, 利用details标签来描述详情信息
	
	使用格式：
		<details>
			<summary>概要信息</summary>
			详情信息
		</details>
## 40. 字符实体

```
在HTML中有的字符是被HTML保留的, 有的字符在HTML中是有特殊含义的，此时就需要字符实体显示这些字符
```

常见字符实体：

​	![image-20221007132901113](assets\字符实体.png)

## 41. 文档查阅

```
1. 百度: http://www.baidu.com
2. W3C：http://www.w3school.com.cn/
3. MDN：https://developer.mozilla.org/zh-CN/
```

## 41. 开发工具下载

```
vscode官网：https://code.visualstudio.com/
WebStorm官网：https://www.jetbrains.com.cn/webstorm/promo/?bd_vid=7465894215663226397
HbuliderX官网：http://www.dcloud.io
SublimeText官网：http://www.sublimetext.com
```

## 42. 浏览器下载

```
谷歌浏览器官网：https://chrom.lkcyl.cn/
火狐浏览器官网：http://www.firefox.com.cn/
```

## 44. 截图录屏软件

```
Snipaste官网：https://www.snipaste.com/
FSCapture官网：https://www.faststonecapture.cn/
```

## 43. 笔记软件

```
Typora官网：https://store.lizhi.io/p/typora?cid=xztt6ynq
Xmind官网：https://xmind.cn/
```

## 44. 打字软件

```
金山打字通官网：https://www.51dzt.com/rubik/?_position=51dzt
```

## 45. 素材官网

```
网页源码素材库：http://www.sucai8.cn/
网页源码素材库：http://www.cssmoban.com
阿里巴巴图标库：https://www.iconfont.cn/
icomoon字库：http://icomoon.io（全英文，所以我不用）
```

## 46. 抠图软件

```
PS官网：https://www.adobe.com/cn/products/photoshop.html
```

## 47. 画图软件

## 48. 办公软件

```
WPS官网：https://www.wps.cn/
```

## 49. vscode插件安装

```
1. Chinese (Simplified) Language Pack for Visual Studio Code ：简体中文插件
2. open in browser：直接打开浏览器插件
3. Easy Less：less文件保存自动生成css文件
```

## 50. 框架官网

```
1. BootStrap中文官网：https://www.bootcss.com/（使用的第一个UI框架，针对栅格系统响应式布局）
```

