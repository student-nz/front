# 二、CSS（深入学习参考网站，HTML文档已提供）

# 		1. CSS是什么？

​			CSS 是层叠样式表 ( Cascading Style Sheets )

​			如果说HTML是网页的身体结构，那么CSS就是网页的美容师 

# 	2. CSS 代码风格

```
设置样式时必须按照固定的格式来设置. key: value;
展开格式: 
	h2 {  
		color: pink;  
		font-size: 20px;  
	}
```

# 	3. CSS选择器分类

## 				1. CSS基础选择器

```
1. 标签选择器
	作用：通过标签名，找到页面中所有这类标签设置样式
2. 类选择器
	作用：通过类名，找到页面中所有带有这个类名的标签设置样式
3. id 选择器
	作用：通过id属性值，找到页面中带有这个id属性值的标签设置样式
4. 通配符选择器
	作用：选中所有标签设置样式

如何选择用id 选择器还是用类选择器？
	class相当于一类，选择一类元素时，用类选择器
	id相当于身份证，唯一标识，选择某个具体元素时，用id选择器
```

## 				2. CSS复合选择器

```
1. 后代选择器
	作用：选择父元素里面的子元素设置样式
2. 子元素选择器
	作用：只能选择作为某元素的最近一级子元素设置样式
3. 交集选择器
	作用：给所有选择器选中的标签中相交的那部分设置样式
4. 并集选择器
	作用：选择多种标签, 设置样式
5. 相邻兄弟选择器
	作用: 给指定选择器后面紧跟的那个选择器选中的标签设置样式
	
6. 伪类选择器 
	用冒号 : 表示，比如 :hover 、 :first-child
	作用：向某些选择器添加特殊的效果

7. 链接伪类选择器(伪类选择器一种)
	确保链接伪类选择器生效，需按照 LVHA 的循顺序声明 :link－:visited－:hover－:active
	链接伪类选择器工作写法：
		a {
			color: gray;  
		}  
		a:hover {
			color: red;
		} 
8.  焦点选择器(伪类选择器一种)
	:focus 伪类选择器主要用于选取获得焦点的表单元素
	input:focus {  
		background-color:yellow;  
	}
```

## 3. CSS3新增选择器

```
1. 序列选择器
	1.同级别的第几个
		:first-child 选中同级别中的第一个标签
		:last-child 选中同级别中的最后一个标签
        :nth-child(n) 选中同级别中的第n个标签
		:nth-last-child(n) 选中同级别中的倒数第n个标签
		:only-child 选中父元素中唯一的标签

	2.同类型的第几个
		:first-of-type 选中同级别中同类型的第一个标签
		:last-of-type  选中同级别中同类型的最后一个标签
		:nth-of-type(n) 选中同级别中同类型的第n个标签
		:nth-last-of-type(n)  选中同级别中同类型的倒数第n个标签
		:only-of-type 选中父元素中唯一类型的某个标签
	3. 其余情况
		:nth-child(odd) 选中同级别中的所有奇数
		:nth-child(even) 选中同级别中的所有偶数
		:nth-child(xn+y)
			n是一个计数器, 从0开始递增
			x和y用户自定义
		
2. 属性选择器
	1. [attribute]
		作用:根据指定的属性名称找到对应的标签设置样式
	2. [attribute=value]
		作用: 找到有指定属性且属性的值等于value的标签设置样式
	3. 属性的取值是以什么开头的
		[attribute|=value] CSS2
		[attribute^=value] CSS3
			两者之间的区别:
				CSS2中的只能找到value开头,并且value是被-和其它内容隔开的
				CSS3中的只要是以value开头的都可以找到, 无论有没有被-隔开
	4.属性的取值是以什么结尾的
		[attribute$=value] CSS3
	5.属性的取值是否包含某个特定的值得
		[attribute~=value] CSS2
		[attribute*=value] CSS3
			两者之间的区别:
				CSS2中的只能找到独立的单词, 也就是包含value,并且value是被空格隔开的
				CSS3中的只要包含value就可以找到
		
3. 伪元素选择器		
	before和after创建一个元素，但是属于行内元素
	新创建的元素文档树查找不到，所以称之为伪元素
	语法：element::before{}
		before和after必须有content属性
		befor和after分别在父元素内容的前面和后面插入元素
		伪元素选择器和标签选择器优先级一样，权重为 1
```

# 4. CSS 三大特性

## 			1. 继承性

```
子标签会继承父标签的某些样式，如文本颜色和字号等
子元素可以继承父元素的样式（text-，font-，line-这些元素开头的可以继承，以及color属性） 
```

## 	2. 层叠性

```
相同选择器给设置相同的样式，此时一个样式就会覆盖（层叠）另一个冲突的样式，后来者居上
	层叠性原则：
		1. 样式冲突，就近原则
		2. 样式不冲突，就不会层叠
```

## 	3. 优先级问题

![image-20221005221116072](assets\选择器权重.png)

```
当同一个元素指定多个选择器，就会有优先级的产生。
	1. 选择器相同，则执行层叠性
	2. 选择器不同，则根据选择器权重执行 

优先级比较公式：
	继承< 通配符选择器< 标签选择器< 类选择器< id选择器< 行内样式< !important

权重叠加：
	如果是复合选择器，则会有权重叠加，需要计算权重
	1. div ul li ------> 0,0,0,3 
	2. .nav ul li ------> 0,0,1,2 
	3. a:hover -----—> 0,0,1,1 
	4. .nav a ------> 0,0,1,1
```

# 	4. CSS 字体

```
1. 字体系列属性
	 font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
	如果设置的字体不存在, 那么系统会使用默认的字体来显示
2. 字体大小属性
	font-size: 20px; 
	谷歌浏览器默认文字大小是16px
	单位需要设置，否则无效
3. 字体粗细属性
	font-weight: bold | normal（默认值）| 100~900; 
	400 等同于 bold，700 等同于 normal，不跟单位
	
4. 字体样式属性 
	font-style: normal（默认值）| italic（斜体）;	

5. 字体复合属性
	font: font-style font-weight font-size/line-height font-family; 
	不能更换顺序，并且各个属性间以空格隔开
	必须保留 font-size 和 font-family 属性，否则 font 属性将不起作用
6. 字体图标
	icomoon 字库 http://icomoon.io 
	阿里 iconfont 字库 http://www.iconfont.cn/
```

# 		5. CSS 文本

```
1. 文本颜色
	color: 值;
	color: red;：英文单词写法
	color: rgb(255,0,0)：三原色写法
	color: rgba(255,0,0,1);：三元素+透明度写法
	color: #FF0000;：十六进制写法
2. 文本水平对齐
	text-align: left | right | center;
	
3. 文本装饰
	text-decoration：none（无装饰线） | underline（下划线） | overline（上划线） | line-through（删除线）;

4. 文本缩进
	text-indent: 2px | 2em;
	长度可以是负值
	em 是一个相对单位,且一个em代表缩进一个文字的宽度
	如果当前元素有设置（font-size)字体大小，则相当于当前元素 1 个文字的大小，
	如果当前元素没有设置大小，则会按照父元素的 1 个文字大小

5. 文本行间距
	 line-height: 26px;
```

# 6. CSS背景

```
1. 背景颜色 
 	background-color:颜色值; 
	background-color: rgb(0, 255, 0);
	background-color: rgba(0, 0, 255, 0.7);
2. 背景图片
	background-image : none | url (url) 
	background-image: url(images/girl.jpg);
	background-image: url(http://img4.imgtn.bdimg.com/it/u=2278032206,4196312526&fm=21&gp=0.jpg);
		1.图片的地址必须放在url()中, 图片的地址可以是本地的地址, 也可以是网络的地址
		2.如果图片的大小没有标签的大小大, 那么会自动在水平和垂直方向平铺来填充
		3.如果网页上出现了图片, 那么浏览器会再次发送请求获取图片
3. 背景平铺
	background-repeat: repeat | no-repeat | repeat-x | repeat-y 

4. 背景定位
	background-position: 水平方向 垂直方向;
		1. 水平方向: left center right
		2. 垂直方向: top center bottom
  		3. 同一个标签可以同时设置背景颜色和背景图片, 如果颜色和图片同时存在, 那么图片会覆盖颜色

5. 背景关联		
	background-attachment : scroll | fixed  
		scroll：背景图像随对象内容滚动
		fixed：背景图像固定
	什么是背景关联方式？
		默认情况下背景图片会随着滚动条的滚动而滚动， 
		如果不想让背景图片随着滚动条的滚动而滚动， 那么我们就可以修改背景图片和滚动条的关联方式

6. 背景半透明
		background: rgba(233, 233, 233, .5);
			
7. 背景连写
	background: 背景颜色 背景图片 平铺方式 关联方式 定位方式;
	background: red url(images/girl.jpg) no-repeat fixedleft bottom;

8. 背景尺寸
	background-size：宽度 高度;
	background-size：contain;
	background-size：cover;
		宽度 高度：严格设置宽、高
	contain:包含，等比例缩放，直到不会超出盒子的最大
	cover：覆盖，等比例缩放，直到刚好填满整个盒子没有空白	

8. 背景图片定位区域属性
	告诉系统背景图片从什么区域开始显示,默认情况下就是从padding区域开始显示
		background-origin: padding-box; 内边距区域开始显示
		background-origin: border-box;边框区域开始显示
		background-origin: content-box;内容区域开始显示

9. 背景图片绘制区域属性
	背景绘制区域属性是专门用于指定从哪个区域开始绘制背景的, 默认情况下会从border区域开始绘制背景
	background-clip: padding-box;
	background-clip: border-box;
	background-clip: content-box;

10. 多重背景图片
	background: 
	url("images/animal1.png") no-repeat left top,
	url("images/animal2.png") no-repeat right top,
	url("images/animal3.png") no-repeat left bottom,
	url("images/animal4.png") no-repeat right bottom,
	url("images/animal5.png") no-repeat center center;
	background-image: url("images/animal1.png"), url("images/animal2.png"), url("images/animal3.png");

11. 背景图片和插入图片区别
		1. 背景图片仅仅是一个装饰, 不会占用位置，插入图片会占用位置
		2. 背景图片有定位属性, 所以可以很方便的控制图片的位置，插入图片没有定位属性, 所有控制图片的位置不太方便
		3. 插入图片的语义比背景图片的语义要强, 所以在企业开发中如果你的图片想被搜索引擎收录, 那么推荐使用插入图片
		
12. 背景线性渐变
	background: linear-gradient(red, green);
	background: linear-gradient(to top ,red, green);
	background: linear-gradient(to right ,red, green);
	background: linear-gradient(to left ,red, green);
	background: linear-gradient(to top right ,red, green);
	background: linear-gradient(45deg ,red, green);
	background: linear-gradient(to right, red, green, blue, yellow);
	background: linear-gradient(to right, red 100px, green 200px, blue 300px);
	线性渐变默认情况下会从上至下的渐变，且至少需要传递2个颜色, 至多没有上限，
	可以通过to 关键字的方式修改渐变的方向
	同时也会自动回自动计算纯色和渐变色的范围, 但是我们也可以手动指定
	手动指定的格式: 颜色 范围

13. 背景径向渐变
	background: radial-gradient(red, green)
	background: radial-gradient(at top left ,red, green);
	background: radial-gradient(100px at 200px 100px ,red, green);
	径向渐变默认从中心点向四周扩散，可以通过at 关键字的方式修改开始渐变的位置
	同时径向渐变也可以指定扩散的范围， 如果需要同时指定扩散的位置和扩散的范围, 那么范围必须写到at前面
14. 背景图片input兼容问题
	1.在IE6浏览器下, 如果给input设置背景, 那么背景会随着input中的内容被填满而移出input
	2.解决方案:
		给background设置背景关联的fixed属性即可

15.背景图片精灵图技术
	background-image: url(images/a-z.jpg);
	background-position: -425px -200px;
	CSS精灵图是一种图像合成技术，将网页中的一些小背景图像整合到一张大图中，
	减少请求的次数, 以及降低服务器处理压力
	CSS的精灵图需要配合背景图片和背景定位来使用
```

# 		7. CSS元素显示模式

```
1. 元素显示模式就是标签以什么方式显示
2. HTML将所有的标签分为两类, 分别是容器级和文本级
3. CSS将所有的标签分为两类, 分别是块级元素和行内元素
4. 容器级标签
	div h ul ol dl li dt dd ...
4. 文本级标签
	span p buis stong em ins del ...
5. 块级元素
	p div h ul ol dl li dt dd
块级元素的特点： 
	1. 独占一行
	2. 高度，宽度、外边距以及内边距都可以控制
	3. 宽度默认是容器（父级宽度）的100%
	4. 是一个容器及盒子，里面可以放行内或者块级元素。 	
特殊情况：
	文字类的元素内不能使用块级元素，例如：p段落标签、h标题标签等
6. 行内元素
	a span buis strong em ins del
行内元素的特点：
	1. 相邻行内元素在一行上，一行可以显示多个
	2. 高、宽直接设置无效
	3. 默认宽度就是它本身内容的宽度
	4. 行内元素只能容纳文本或其他行内元素
特殊情况：
	1. 链接<a> 里面不能再放链接 <a> 
	2. 链接 <a> 里面可以放块级元素，但是给 <a> 转换一下块级模式最安全 
7. 行内块元素
	img  input  td  extarea  button  select等
行内块元素的特点：
	1. 和相邻行内元素（行内块）在一行上，但是他们之间会有空白缝隙，一行可以显示多个（行内元素特点）
	2. 默认宽度就是它本身内容的宽度（行内元素特点）
	3. 高度，行高、外边距以及内边距都可以控制（块级元素特点）
特殊情况：
	img标签有行内块元素特点，但是Chrome调试工具中显示结果是inline
8. 元素显示模式转换
	1. 转换为块元素：display: block; 
	2. 换为行内元素：display: inline; 
	3. 转换为行内块：display: inline-block
```

# 8. CSS盒子模型

```
盒子由内容区域（content）、内边距区域（padding）、边框区域（border）、外边距区域（margin）构成
	1. 宽度/高度 == 内容区域
	2. 内边距  == 填充物
	3. 边框  == 盒子自己
	4. 外边距  == 盒子和盒子之间的间隙
元素的宽度和高度：
	盒子宽度= 左右边框+ 左右内边距 + 内容宽度
	盒子高度= 上下边框+ 上下内边距 + 内容宽度

当盒子被border撑大后，如何满足需求？
1. 手动内减
	自己计算多余大小，手动在内容中减去，计算量大，复杂
2. 自动内减
	给盒子设置属性box-sizing:border-box ; 
	box-sizing属性是如何保证增加padding和border之后, 盒子元素的宽度和高度不变
	浏览器会自动计算多余大小，自动在内容中减去

一、盒子模型宽高	
	width: 300px;
	height: 300px;
二、盒子模型box-sizing
	CSS3中新增了一个box-sizing属性
	这个属性可以保证我们给盒子新增padding和border之后, 盒子元素的宽度和高度不变（自动内减）
	box-sizing: border-box;（CSS3盒子）
	
三、边框
1. 同时设置四条边的边框连写：
	border: 边框的宽度 边框的样式 边框的颜色;
2. 分别设置四条边的边框连写：
	border-width: 上 右 下 左;
	border-style: 上 右 下 左;
	border-color: 上 右 下 左;
	border-top-width: 5px;
3. 分别设置四条边的边框不连写：
	border-top-width: 5px;
	border-top-style: solid;
	border-top-color: blue;
	类推
4. 边框合并
	表格的细线边框：border-collapse:collapse; 

四、内边距
	内边距即边框和内容之间的距离就是内边距
1. 内边距不连写：
	padding-top | right | bottom | left: ;
2. 连写
	padding: 上 右 下 左;
3. 右边内边距的误差从何而来?
	1.在企业开发中, 如果一个盒子中存储的是文字, 那么一般情况下我们会以盒子左边的内边距为基准, 
	不会以右边的内边距为基准, 因为这个右边的内边距有误差
	2.右边内边距的误差从何而来? 因为右边如果放不下一个文字, 那么文字就会换行显示, 所以文字和内边距之间的距离就有了误差
	3.顶部的内边距并不是边框到文字顶部的距离, 而是边框到行高顶部的距离

五、外边距
	外边距即标签和标签之间的距离就是外边距
1. 外边距不连写：
     margin-top | right | bottom | left: ;
2. 外边距连写
	margin: 上 右 下 左;
3. 外边距合并问题
	在默认布局的垂直方向上, 默认情况下外边距是不会叠加的, 会出现合并现象, 谁的外边距比较大就听谁的
		
六、清楚标签默认边距

清除所有标签默认边距
	* {  
		padding:0; /* 清除内边距 */  *
		margin:0; /* 清除外边距 */  
	}
在企业开发中为了更好的控制盒子的宽高和计算盒子的宽高等等，所以在企业开发中, 编写代码之前第一件事情就是清空默认的边距
通配符选择器会找到(遍历)当前界面中所有的标签, 所以性能不好
企业开发中可以从这个网址中拷贝
http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css

行内元素的margin和padding无效情况
	1. 水平方向的margin和padding布局中有效！
	2. 垂直方向的margin和padding布局中无效！

七、盒子居中和内容居中
	外边距实现盒子居中：
		margin: 0 auto;
		让盒子自己水平居中
	内容居中：	 
		text-align:center
		设置盒子中存储的文字/图片水平居中
		

八、盒子模型-行高和字号
	行高和盒子高不是同一个概念
	行高指的是每行内容的高度
	盒子高指的是元素的高度

规律:
	1.文字在行高中默认是垂直居中的
	2.想一行文字在盒子中垂直居中, 那么只需要设置这行文字的"行高等于盒子的高"即可

九、盒子模型-还原字体和字号
	1.在企业开发中, 如果一个盒子中存储的是文字, 那么一般情况下我们会以盒子左边的内边距为基准, 
		不会以右边的内边距为基准, 因为这个右边的内边距有误差
	2.右边内边距的误差从何而来? 因为右边如果放不下一个文字, 那么文字就会换行显示, 所以文字和内边距之间的距离就有了误差
	3.顶部的内边距并不是边框到文字顶部的距离, 而是边框到行高顶部的距离

十、盒子模型-margin传递问题
	在父子元素中， 如果给子元素设置了margin-top， 默认会传递到父元素
	解决方案：
		1. 给父元素设置边框
		2. 给父元素添加两行代码
			overflow: hidden;
			*zoom: 1;
```

# 9. 传统网页布局

```
1. 标准流（普通流/文档流）
	标准流就是标签按照规定好默认方式排列
	1. 块级元素会独占一行，从上向下顺序排列
	2. 行内元素会按照顺序，从左到右顺序排列，碰到父元素边缘则自动换行

2. 浮动
	float: none（没有浮动，默认值） | left（左浮动） | right（右浮动）;
	1.什么是浮动元素的脱标?
		当某一个元素浮动之后, 那么这个元素看上去就像被从标准流中删除了一样, 这个就是浮动元素的脱标
	2.浮动元素脱标之后会有什么影响?
		如果前面一个元素浮动了, 而后面一个元素没有浮动 , 那么这个时候前面一个元就会盖住后面一个元素
	3. 浮动元素排序规则
		1. 相同方向上的浮动元素, 先浮动的元素会显示在前面, 后浮动的元素会显示在后面
		2. 不同方向上的浮动元素, 左浮动会找左浮动, 右浮动会找右浮动
		3. 浮动元素浮动之后的位置, 由浮动元素浮动之前在标准流中的位置来确定
		4. 浮动的盒子只会影响浮动盒子后面的标准流,不会影响前面的标准流
	4. 什么是浮动元素贴靠现象?
		1.如果父元素的宽度能够显示所有浮动元素, 那么浮动的元素会并排显示
		2.如果父元素的宽度不能显示所有浮动元素, 那么会从最后一个元素开始往前贴靠
		3.如果贴靠了前面所有浮动元素之后都不能显示, 最终会贴靠到父元素的左边或者右边
	5. 浮动元素高度问题
		1.在标准流中内容的高度可以撑起父元素的高度
		2.在浮动流中浮动的元素是不可以撑起父元素的高度的
	6. 什么是浮动元素字围现象
		浮动元素不会挡住没有浮动元素中的文字, 没有浮动的文字会自动给浮动的元素让位置,这个就是浮动元素字围现象
	7. 浮动元素清除浮动
		浮动盒子脱离标准流而存在，若不清除浮动，可能会对后续盒子布局造成影响
		清除浮动之后，父级会根据浮动的子盒子自动检测高度
        1. 方式一
        	给前面一个父元素设置高度
        2. 方式二
        	给后面的盒子添加clear属性
        	clear属性取值:
    			none: 默认取值, 按照浮动元素的排序规则来排序(左浮动找左浮动, 右浮动找右浮动)
   				left: 不要找前面的左浮动元素
   				right: 不要找前面的右浮动元素
    			both: 不要找前面的左浮动元素和右浮动元素
   			当我们给某个元素添加clear属性之后, 那么这个属性的margin属性就会失效
   		3. 方式三
   			隔墙法
   			1.外墙法
				1.在两个盒子中间添加一个额外的块级元素
				2.给这个额外添加的块级元素设置clear: both;属性
				外墙法它可以让第二个盒子使用margin-top属性
				外墙法不可以让第一个盒子使用margin-bottom属性
			2.内墙法
				1.在第一个盒子中所有子元素最后添加一个额外的块级元素
				2.给这个额外添加的块级元素设置clear: both;属性
				内墙法它可以让第二个盒子使用margin-top属性
				内墙法它可以让第一个盒子使用margin-bottom属性
		4. 方式四
			伪元素法
				利用伪元素选择器清除浮动
    			本质上就是内墙法, 只不过是直接通过CSS代码添加了内墙, 其它特性和内墙法都一样
    			IE6中不支持这种方式, 为了兼容IE6必须给前面的盒子添加*zoom:1;属性
		5. 方式五
			overflow: hidden;
			1. 可以将超出标签范围的内容裁剪掉
			2. 清除浮动
			3. 可以通过overflow: hidden;让里面的盒子设置margin-top之后, 外面的盒子不被顶下来
			
3. 定位
	1.定位组成
		定位 = 定位模式 + 边偏移
	2.定位模式
		选择器 { position: static | relative | absolute |fixed | sticky; } 
		4. 边偏移属性
			{top | bottom | left | right: 属性值;}
			top：顶端偏移量，定义元素相对于其父元素上边线的距离
			bottom：底部偏移量，定义元素相对于其父元素下边线的距离
			left：左侧偏移量，定义元素相对于其父元素左边线的距离
			right：右侧偏移量，定义元素相对于其父元素右边线的距离	
		1. 静态定位static
			静态定位按照标准流特性摆放位置，没有边偏移，就等同于标准流
		2. 相对定位relative
			相对于自己原来的位置来移动，且原来在标准流的位置继续占有，后面的盒子仍然以标准流的方式对待它
			相对定位是不脱离标准流，相对定位中是区分块级元素/行内元素/行内块级元素
		3. 绝对定位 absolute
			绝对定位的元素脱离标准流且不区分块级元素/行内元素/行内块级元素
			1. 绝对定位-参考点
				默认情况下所有的绝对定位的元素, 都会以body作为参考点
				如果一个绝对定位的元素祖先元素是定位流, 那么这个绝对定位的元素就会以定位流的那个祖先元素作为参考点
				否则，默认相对于body来定位
				定位流中的定位指的是绝对定位/相对定位/固定定位等
				定位流中唯独静态定位不行，因为静态定位相当于标准流
			2. 绝对定位-注意事项
				1.如果一个绝对定位的元素是以body作为参考点, 那么其实是以网页首屏的宽度和高度作为参考点, 
				而不是以整个网页的宽度和高度作为参考点
				2.一个绝对定位的元素会忽略祖先元素的padding
			3. 绝对定位-子绝父相
				子元素用绝对定位, 父元素用相对定位（采取子绝父相，原因如下:）
				相对定位弊端:
					相对定位不会脱离标准流, 会继续在标准流中占用一份空间, 所以不利于布局界面
				绝对定位弊端:
               	 	默认情况下绝对定位的元素会以body作为参考点, 所以会随着浏览器的宽度高度的变化而变化
             4. 绝对定位-水平居中
             	设置绝对定位元素的left:50%;
				设置绝对定位元素的 margin-left: -元素宽度的一半px;
				
		4. 固定定位 fixed 
			背景定位可以让背景图片不随着滚动条的滚动而滚动, 而固定定位可以让某个盒子不随着滚动条的滚动而滚动
    			1.固定定位的元素是脱离标准流的, 不会占用标准流中的空间
    			2.固定定位和绝对定位一样不区分行内/块级/行内块级
   				3.IE6不支持固定定位

		5. 定位叠放次序属性
			选择器 { z-index: 1; } 
			数值可以是正整数、负整数或 0, 默认是 auto
			数值越大，盒子越靠上,属性值相同，则按照书写顺序，后来居上
			同时数字后面不能加单位器，且只有定位的盒子才有 z-index 属性 
			元素的层级关系：标准流< 浮动< 定位

4. 定位与浮动压住盒子区别 
		浮动元素不同，只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片） 
		但是绝对定位（固定定位） 会压住下面标准流所有的内容，
		浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的，文字会围绕浮动元素
5. 传统网页布局思路
	1. 垂直的块级盒子显示就用标准流布局
	2. 多个块级盒子水平显示就用浮动布局
	3. 如果元素自由在某个盒子内移动就用定位布局
```

# 10. CSS注释

```
/* 注释内容 */
```

# 11. 网页特效

```
1. 网页特效-过渡
	过渡三要素：
		1. 必须要有属性发生变化
		2. 必须告诉系统哪个属性需要执行过渡效果
		3. 必须告诉系统过渡效果持续时长
	当多个属性需要同时执行过渡效果时用逗号隔开即可
		transition-property: width, background-color;
		transition-duration: 5s, 5s;
	告诉系统哪个属性需要执行过渡效果
		transition-property: width, background-color;
	告诉系统过渡效果持续的时长
		transition-duration: 5s, 5s;
	告诉系统延迟多少秒之后才开始过渡动画
		transition-delay: 2s;
	告诉系统过渡动画的运动的速度
		transition-timing-function: linear | ease-in | ease-out | ease-in-out;
	过渡连写：
		transition: 过渡属性 过渡时长 运动速度 延迟时间;
        	1. 如果想给多个属性添加过渡效果用逗号隔开即可
			2. 连写的时可以省略后面的两个参数, 因为只要编写了前面的两个参数就已经满足了过渡的三要素
			3. 如果多个属性运动的速度/延迟的时间/持续时间都一样, 那么可以简写为
				transition:all 0s;

2. 网页特效-2D转换
	1. 旋转： 
		transform: rotate(45deg);
	2.平移： 
		transform: translate(100px, 0px);
	3.缩放：
		transform: scale(0.5, 0.5); 
		transform: scale(1.5);
	4.旋转中心点
		transform-origin: 200px 0px;（像素单位）
		transform-origin: 50% 50%;（百分比）
		transform-origin: center center;（关键字）
	5.旋转轴向
		父元素：perspective: 500px;（透视属性必须添加到需要呈现近大远小效果的元素的父元素上面）
		子元素：
			transform: rotateZ(45deg); 围绕Z轴进行旋转（默认）
			transform: rotateX(45deg); 围绕X轴进行旋转
			transform: rotateY(45deg);围绕Y轴进行旋转（1个属性单写）
			transform: translateX(100px) rotateY(90deg);（两个属性连写）
			transform: rotateX(360deg) translateZ(100px) scale(2, 1);（三个属性连写）
3. 网页特效-盒子和文字阴影
	1. 盒子阴影
		box-shadow: 水平偏移 垂直偏移 模糊度 阴影扩展 阴影颜色 内外阴影;（默认情况下阴影的颜色和盒子内容的颜色一致）
		box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, .3)
	2. 文字阴影
		text-shadow: 水平偏移 垂直偏移 模糊度 阴影颜色 ;
		text-shadow: 5px 5px 6px rgba(0, 0, 0, .3);

4. 网页特效-动画
	1.过渡和动画之间的异同
		过渡必须人为的触发才会执行动画
		动画不需要人为的触发就可以执行动画
	2. 相同点
		过渡和动画都是用来给元素添加动画的
		过渡和动画都需要满足三要素才会有动画效果
			1. 告诉系统需要执行哪个动画
			2. 告诉系统我们需要自己创建一个名称叫做yjxz的动画
			3. 告诉系统动画持续的时长
	告诉系统多少秒之后开始执行动画:
		animation-delay: 2s;
	告诉系统动画执行的速度:
		animation-timing-function: linear;
	告诉系统动画需要执行几次:
		 animation-iteration-count: 3;
	告诉系统是否需要执行往返动画:
		animation-direction: alternate;
			normal, 默认的取值, 执行完一次之后回到起点继续执行下一次
			alternate, 往返动画, 执行完一次之后往回执行下一次
	告诉系统当前动画是否需要暂停:
		animation-play-state: paused;
			running: 执行动画
		 	paused: 暂停动画
	动画状态:
		1.等待状态
		2.执行状态
		3.结束状态
	animation-fill-mode:
		animation-fill-mode: both;
			none: 不做任何改变
            forwards: 让元素结束状态保持动画最后一帧的样式
            backwards: 让元素等待状态的时候显示动画第一帧的样式
            both: 让元素等待状态显示动画第一帧的样式, 让元素结束状态保持动画最后一帧的样式
		作用：指定动画等待状态和结束状态的样式
	动画模块连写格式:
		animation:动画名称 动画时长 动画运动速度 延迟时间 执行次数 往返动画;
	动画模块连写格式的简写：
		animation:动画名称 动画时长;
	
5. 网页特效-3D转换
		1.什么是2D和3D
			2D就是一个平面, 只有宽度和高度, 没有厚度
			3D就是一个立体, 有宽度和高度, 还有厚度
			默认情况下所有的元素都是呈2D展现的
		2.如何让某个元素呈3D展现
			和透视一样, 想看到某个元素的3d效果, 只需要给他的父元素添加一个transform-style属性, 然后设置为preserve-3d即可
```

盒子阴影：							

​    								 ![image-20221006084826257](assets\盒子阴影.png)  	

文字阴影：

![	](assets\文字阴影.png)

# 12. 补充

```
1. 补充-元素的显示与隐藏 
	1. display 显示隐藏 
			display属性隐藏元素后，不占有原有位置
			display：none
	2. visibility 显示隐藏 
			visibility 属性用于指定一个元素应显示还是隐藏，隐藏元素后占有原有位置
			visibility：visible | hidden ; 
			display 和 visibility 隐藏元素的区别
			如果隐藏元素想要原来位置， 就用 visibility：hidden 
			如果隐藏元素不想要原来位置， 就用 display：none
	3. overflow 溢出显示隐藏 
			visible：不剪切内容也不添加滚动条
			hidden：不显示超过对象尺寸的内容，超出的部分隐藏掉
			scroll：不管超出内容与否，总是显示滚动条
			auto：超出自动显示滚动条，不超出不显示滚动条
	4. 元素透明度实现透明隐藏(但是不完全隐藏)
			opacity: 0~1;
			元素整体(包括内容)一起变透明
			
2. 补充-边框圆角
	border-radius: 左上 右上 右下 左下;
	border-radius:length; 
	border-top-left-radius、border-top-right-radius、border-bottom-right-radius、border-bottom-left-radius
	正方形变为圆形：border-radius: 50%

3. 补充-CSS三角

4. 补充-边框合并
	做细线表格
	border-collapse: collapse;
	
		·
5. 补充-用户界面样式 
	所谓的界面样式，就是更改一些用户操作样式，以便提高更好的用户体验
	1. 鼠标样式和去掉列表中li的样式
		1. 鼠标样式：
			设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状
			cursor: default（小白 默认） | pointer（小手） | move（移动） | text（文本） | not-allowed（禁止）; 
		2. 去掉列表中li的样式
			list-style: none;
	2. 输入表单轮廓和文本域表单防止拖拽
		1.  输入表单轮廓
			轮廓线 outline 
			input {outline: none | 0; } （去掉默认的蓝色边框）	
		2. 文本域表单防止拖拽
			textarea{ resize: none;} 

6. 补充-溢出的文字省略号显示
	1. 单行文本溢出显示省略号 															
		单行文本溢出显示省略号--必须满足三个条件
		white-space: nowrap;(默认 normal 自动换行)（1. 先强制一行内显示文本）
		overflow: hidden;（2. 超出部分隐藏）
		text-overflow: ellipsis;（3. 文字用省略号替代超出的部分）
	2. 多行文本溢出显示省略号 
		多行文本溢出显示省略号，有较大兼容性问题， 适合于webKit浏览器或移动端（移动端大部分是webkit内核）
		overflow: hidden;（1. 超出部分隐藏）
		text-overflow: ellipsis;（2. 文字用省略号）
		display: -webkit-box;（3. 弹性伸缩盒子模型显示）
		-webkit-line-clamp: 2;（4. 限制一个块元素显示的文本的行数）
		-webkit-box-origent: vertical（5. 设置或检索伸缩盒对象的子元素的排列方式）
		
7. 补充-行内元素垂直对齐（补充）
	设置行内元素的垂直对齐方式
	text-align是设置给需要对齐元素的父元素
	vertical-align是设置给需要对齐的那个元素本身
	vertical-align只对行内元素有效
    vertical-align: baseline | top | bottom | text-top | text-bottom;

9. 补充-CSS3图片模糊处理filter函数
	filter: blur(15px);
10. 补充-CSS3宽度calc函数
	width: calc(100% - 30px);

11. 边框图片

	告诉浏览器让哪一张图片成为边框:
	如果只通过source指定了哪一张图片作为边框的图片, 默认情况下会将图片放到边框的四个顶点
	如果设置了边框图片, 那么就不会显示边框颜色, 边框图片的优先级高于边框颜色
		border-image-source: url("images/border.jpg")
	
	告诉浏览器如何对指定的边框图片进行切割:
  	不带单位
   		border-image-slice: 70 70 70 70;
    	border-image-slice: 70 70 70 70 fill
    
   	告诉浏览器边框图片显示的宽度, 并不是指定边框的宽度:
   	如果通过border-image-width指定了边框图片的宽度, 那么默认的边框宽度就会失效
   		border-image-width: 10px;
   		
   	告诉浏览器除了边框图片四个角以外的图片如何填充, 默认是拉伸
   		border-image-repeat: stretch;
   		border-image-repeat: repeat
   		
	告诉浏览器边框图片需要向外移动多少
		border-image-outset: 10px 30px 50px 70px;（上   右   下   左）
	
	边框图片连写：
		border-image: 资源地址 切割方式 填充模式;
		border-image: url("images/border.jpg") 70 fill repeat
```

# 13. CSS属性书写顺序

 	严格遵循：
 	1. 布局定位属性：display / position / float / clear / visibility / overflow（建议 display 第一个写，毕竟关系到模式）
 	2. 自身属性：width / height / margin / padding / border / background 
 	3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word 
 	1. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient 

# 14. 字体图标(不做演示)

```
1. 为什么使用字体图标
	精灵图缺陷：
		1. 图片文件还是比较大的
		2. 图片本身放大和缩小会失真。 
		3.一旦图片制作完毕想要更换非常复杂
		因为精灵图缺陷，出现了一种新的技术解决以上问题，即字体图标技术iconfont，
		字体图标，展示的是图标，本质属于字体
	字体图标优点：
		1. 轻量级：一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器请求
		2. 灵活性：本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果、旋转等
		3. 兼容性：几乎支持所有的浏览器
	字体图标不能替代精灵技术，只是对工作中图标部分技术的提升和优化

如何使用字体图标：
	1.下载字体包：
		icomoon 字库 http://icomoon.io 
		阿里 iconfont 字库 http://www.iconfont.cn/
		登录→选择图标库→选择图标，加入购物车→购物车→添加至项目→下载至本地
		把下载包里面的 fonts 文件夹放入页面根目录下 
字体图标加载的原理（如下图）：
```

​												![image-20221006120949314](assets\字体图标加载原理.png)								

# 		15. Chrome 调试工具

```
1. 打开调试工具 
	F12 键或者右击页面空白处 检查。
2. 使用调试工具 
	1. Ctrl+滚轮：放大开发者工具代码大小
	2. Ctrl + 0：复原浏览器大小
	3. 左边是 HTML 元素结构，右边是 CSS 样式。
	4. 右边 CSS 样式可以改动数值（左右箭头或者直接输入）和查看颜
	5. 如果点击元素，发现右侧没有样式引入，极有可能是类名或者样式引入错误。
	6. 如果有样式，但是样式前面有黄色叹号提示，则是样式属性书写错误
```

# 16. 三类样式表四种使用方法

## 	1.行内样式表（行内式） 

	<div style="color: red; font-size: 12px;">青春不常在，抓紧谈恋爱</div> 

## 	2.内部样式表（嵌入式/内嵌式） 

	CSS 写在style标签中（我的这一节演示中全部为这种样式）
	<style>
		属性：属性值;
	</style>

## 	3.外部样式表（链接式/外联式） 

```
CSS 写在一个单独的.css文件中
<link rel="stylesheet" href="css文件路径"> 
rel：定义当前文档与链接文档之间的关系，指定为“stylesheet"，表示被链接的文档是一个样式表文件
href：链接的样式表文件的URL，既可以是相对路径，也可以是绝对路径
```

## 	4.导入样式表

 	<style>
 	    	@import "导入样式表演示.css";
 	 </style>

## 	优先级问题

```
	行内样式的优先级最高
```

# 17. 快捷操作

```
1. 快速生成CSS样式语法 
	1. 比如 w200 按tab 可以 生成 width: 200px; 
	2. 比如 lh26px 按tab 可以生成 line-height: 26px; 

2. 快速格式化代码
	1. Vscode 快速格式化代码: shift+alt+f 
	2. 设置保存页面的时候自动格式化代码: 
		1）文件 ------.>【首选项】---------->【设置】； 
		2）搜索emmet.include; 
		3）在settings.json下的【工作区设置】中添加以下语句
			"editor.formatOnType": true,
			"editor.formatOnSave": true
3. Emmet语法
```

![image-20221006195257407](assets\快速生成HTML结构语法.png)

