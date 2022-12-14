# 三、移动Web

# （深入学习参考网站，HTML文档已提供）

# 1. 字体图标

## 	1. 精灵图缺陷：

```
1. 图片文件还是比较大的。 
2. 图片本身放大和缩小会失真。 
3.一旦图片制作完毕想要更换非常复杂
	因为精灵图缺陷，出现了一种新的技术解决以上问题，即字体图标技术iconfont，
	字体图标，展示的是图标，本质属于字体
```

## 	2. 字体图标优点：	

```
1. 轻量级：体积小、渲染快、降低服务器请求次数
2. 灵活性：灵活地修改样式，例如：尺寸、颜色等
3. 兼容性：几乎兼容所有主流浏览器
	字体图标不能替代精灵技术，只是对工作中图标部分技术的提升和优化
4. 使用方便：
	1. 下载字体包
	2. 使用字体图标
```

## 		3. 字体图标素材官网（两个）

```
icomoon 字库：http://icomoon.io（全英文，所以我不用）
阿里iconfont 字库：http://www.iconfont.cn/（我这里使用的就是iconfont）
	登录→选择图标库→选择图标，加入购物车→购物车→添加至项目→下载至本地
```

## 	4. 本地上传字体图标

```
官网字库没有我们想要的图标，我们可以通过本地上传自身的图标，达到项目需求！
```

![image-20221030093100851](assets\image-20221030093100851.png)

## 		5. 字体图标加载的原理

​										![image-20221006120949314](assets\字体图标加载原理.png)	



# 2. 视口

```
1. PC端网页和移动端网页的有什么不同？
	PC屏幕大，网页固定版心
	手机屏幕小，网页宽度多数为100%
2. 如何在电脑里面边写代码边调试移动端网页效果？
	谷歌模拟器、火狐模拟器等
3. 屏幕尺寸
		指的是屏幕对角线的长度，一般用英寸来度量
4. PC分辨率
	PC分辨率
		1920* 1080
		1366* 768
		……
	缩放150%
		（1920/150%）*（1080/150%）
	总结：
		硬件分辨率（出厂设置）
		缩放调节的分辨率（软件设置）
5. 分辨率分类
		物理分辨率：生产屏幕时就固定的，不可被改变的
		逻辑分辨率：由软件（驱动）决定的（制作网页是参考逻辑分辨率的）
6. 移动端主流设备分辨率
7. meta标签设置视口宽度，制作适配不同设备宽度的网页
		手机屏幕尺寸都不同，网页宽度为100%
		网页的宽度和逻辑分辨率尺寸相同
8. 默认情况网页宽度是980px
9. 如何使得网页宽度和设备宽度(分辨率)相同？
	添加视口标签
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	视口：显示HTML网页的区域，用来约束HTML尺寸
	viewport：视口
	width=device-width：视口宽度=设备宽度
	initial-scale=1.0：缩放1倍（不缩放）
10.二倍图
	设计稿参考iPhone6/7/8，设备宽度375px产出设计稿
	二倍图设计稿尺寸：750px
```

## 	移动端主流设备分辨率图		![image-20221030094727007](assets\image-20221030094727007.png)

# 3. 流式布局（百分比布局）

​		百分比布局，也叫流式布局，宽度自适应，高度固定

​		max-width 最大宽度（max-height 最大高度）

​		min-width 最小宽度（min-height 最小高度）

# 4. flex布局（重点关注，所以有三个版本调试）

```
flex布局原理：
	伸缩布局=弹性布局=伸缩盒布局=弹性盒布局=flex布局
	当我们为父盒子设为flex布局以后, 子元素的float、clear和vertical-align属性将失效
作用：
	基于Flex 精确灵活控制块级盒子的布局方式，避免浮动布局中脱离文档流现象发生
	Flex布局非常适合结构化布局
设置方式：
	父元素添加display: flex，子元素可以自动的挤压或拉伸
组成部分：
	弹性容器
	弹性盒子
	主轴
	侧轴/ 交叉轴
修改主轴对齐方式属性: justify-content
	flex-start		默认值, 起点开始依次排列
	flex-end		终点开始依次排列center沿主轴居中排列
	space-around	弹性盒子沿主轴均匀排列, 空白间距均分在弹性盒子两侧
	space-between	弹性盒子沿主轴均匀排列, 空白间距均分在相邻盒子之间
	space-evenly	弹性盒子沿主轴均匀排列, 弹性盒子与容器之间间距相等
修改侧轴对齐方式属性:
	align-items（添加到弹性容器）
	align-self：控制某个弹性盒子在侧轴的对齐方式（添加到弹性盒子）
	
	flex-start			默认值, 起点开始依次排列
	flex-end			终点开始依次排列
	center				沿侧轴居中排列
	stretch				默认值, 弹性盒子沿着主轴线被拉伸至铺满容
伸缩比：
	flex : 值（数值(整数)）
	只占用父盒子剩余尺寸
```

# 5. rem布局

```
rem单位设置网页元素的尺寸

网页效果：
	屏幕宽度不同，网页元素尺寸不同（等比缩放）
px单位或百分比布局可以实现吗？
	px单位是绝对单位
	百分比布局特点宽度自适应，高度固定
适配方案
	rem
	vw/vh

rem单位
	相对单位
	rem单位是相对于HTML标签的字号计算结果
	1rem = 1HTML字号大小

媒体查询：
	1. 手机屏幕大小不同，分辨率不同，如何设置不同的HTML标签字号？
		媒体查询
		媒体查询能够检测视口的宽度，然后编写差异化的CSS 样式
		当某个条件成立, 执行对应的CSS样式
	2. 设备宽度不同，HTML标签字号设置多少合适？
		设备宽度大，元素尺寸大
		设备宽度小，元素尺寸小
	3. 本次rem布局方案例中，将网页等分成10份，HTML标签的字号为视口宽度的1/10
	
	4. 工作中，如何确定rem的数值
		1. 根据视口宽度，设置不同的HTML标签字号
		2. 书写代码，尺寸是rem单位
			1. 确定设计稿对应的设备的HTML标签字号
				查看设计稿宽度→确定参考设备宽度(视口宽度)→确定基准根字号（1/10视口宽度）
			2. rem单位的尺寸
				N* 37.5=68→N=68/37.5
				rem单位的尺寸=px单位数值/基准根字号

rem常见布局：

	1. less+rem布局：（less预处理器，在预处理器精讲）
		使用less预处理原因：CSS不支持计算写法，通过Less实现
		Less是一个CSS预处理器, Less文件后缀是.less
		扩充了CSS 语言, 使CSS具备一定的逻辑性、计算能力。
		浏览器不识别Less代码，网页要引入对应的CSS文件
		安装vscode插件：Easy Less
		Easy Less作用：less文件保存自动生成css文件
		
	2. flexible.js + rem布局
		flexible.js官网：https://github.com/amfe/lib-flexible
		flexible.js是手淘开发出的一个用来适配移动端的js框架
		核心原理：
			核心原理就是根据不同的视口宽度给网页中html根节点设置不同的font-size
```

# 6. vw/vh布局

```
相对单位
	相对视口的尺寸计算结果
	lvw：viewport width
		1vw=1/100视口宽度
	lvh：viewportheight
		1vh=1/100视口高度
		
	1.确定设计稿对应的vh尺寸（1/100视口高度）
		查看设计稿宽度→确定参考设备高度(视口高度)→确定vh尺寸（1/100视口高度）
	2.vh单位的尺寸=px单位数值/(1/100视口高度
```

# 7. 媒体查询

```
@media mediatype and|not|only (media feature) {
	CSS-Code;
}
	1. @media 开头
	2. mediatype 媒体类型
		all：用于所有设备
		print：用于打印机和打印预览
		scree：用于电脑屏幕，平板电脑，智能手机等
	3. 关键字and not only
		关键字将媒体类型或多个媒体特性连接到一起做为媒体查询的条件
		and：可以将多个媒体特性连接到一起，相当于“且”的意思
		not：排除某个媒体类型，相当于“非”的意思，可以省略
		only：指定某个特定的媒体类型，可以省略
	4. media feature媒体特性必须有小括号包含
		width：定义输出设备中页面可见区域的宽度
		min-width：定义输出设备中页面最小可见区域的宽度
		max-width：定义输出设备中页面最大可见区域宽度
```

```
媒体是用来区分设备类型的，如屏幕设备、打印设备等，其中手机、电脑、平板都属于屏幕设备
```

![image-20221030112402118](assets\image-20221030112402118.png)

```
媒体特性主要用来描述媒体类型的具体特征，如当前屏幕的宽高、分辨率、横屏或竖屏等
```

![image-20221030112249847](assets\image-20221030112249847.png)

```
外链式CSS引入
```

![image-20221030112315934](assets\image-20221030112315934.png)

# 8. Bootstraps3响应式布局

```
中文官网：https://www.bootcss.com/
BootStrap栅格系统布局响应式网页
	栅格化是指将整个网页的宽度分成若干等份
	BootStrap3默认将网页分成12等份

.container类容器的盒子，默认已被指定宽度且居中
.container-fluid类容器的盒子，所有应用该类名的盒子，宽度均为100%
分别使用.row类名和.col类名定义栅格布局的行和列

1. container类自带左右各15px的padding
2. row类作用就是抵消container类的15px的内边距, row有-15px的外边距
3. row类消除父元素的类边距

xs-extra small：超小；sm-small：小；md-medium：中等；lg-large：大；
一列指定多个设备的类名，以便划分不同份数例如class="col-md-4 col-sm-6"
```