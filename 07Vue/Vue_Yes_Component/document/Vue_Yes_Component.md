# Vue_Yes_Compment（Vue3）

```
放心都有源代码对应，只要学过vue，阅读源代码都不难！
```

# 1. 单页面应用程序

```
1. 什么是单页面应用程序
	单页面应用程序简称SPA，指的是一个Web 网站中只有唯一的一个HTML 页面，所有的功能与交互都在这唯一的一个页面内完成

2. 单页面应用程序的特点
	单页面应用程序将所有的功能局限于一个web 页面中，仅在该web 页面初始化时加载相应的资源（HTML、JavaScript 和CSS）
	一旦页面加载完成了，SPA 不会因为用户的操作而进行页面的重新加载或跳转，
	而是利用JavaScript 动态地变换HTML 的内容，从而实现页面与用户的交互

3. 单页面应用程序的优点
	1. 良好的交互体验
		1. 单页应用的内容的改变不需要重新加载整个页面
		2. 获取数据也是通过Ajax 异步获取
		3. 没有页面之间的跳转，不会出现“白屏现象”
		
	2. 良好的前后端工作分离模式
		1. 后端专注于提供API 接口，更易实现API 接口的复用
		2. 前端专注于页面的渲染，更利于前端工程化的发展
		
	3. 减轻服务器的压力
		1. 服务器只提供数据，不负责页面的合成与逻辑的处理，吞吐能力会提高几倍

4. 单页面应用程序的缺点
	任何一种技术都有自己的局限性，对于SPA 单页面应用程序来说，主要的缺点有如下两个：
		1. 首屏加载慢
			1. 路由懒加载
			2. 代码压缩
			3. CDN 加速
			4. 网络传输压缩
	
		2. 不利于SEO
			SSR 服务器端渲染

5. 如何快速创建vue 的SPA 项目
	vue 官方提供了两种快速创建工程化的SPA 项目的方式：
		1. 基于vite创建SPA 项目
		2. 基于vue-cli创建SPA 项目
```

|                            |        vite        |        vue-cli         |
| :------------------------: | :----------------: | :--------------------: |
|       支持的vue 版本       |    仅支持vue3.x    |     支持3.x 和2.x      |
|      是否基于webpack       |         否         |           是           |
|          运行速度          |         快         |          较慢          |
|         功能完整度         | 小而巧（逐渐完善） |         大而全         |
| 是否建议在企业级开发中使用 |     目前不建议     | 建议在企业级开发中使用 |

# 2. 基于vite创建项目

```
1. 基于vite创建项目步骤
	1. npm init vite-app 项目名称
	2. cd 项目名称
	3. npm install
	4. npm run dev

2. vite 创建的项目结构（图1）
	1. node_modules 	目录用来存放第三方依赖包
	2. public 			公共的静态资源目录
	3. src				项目的源代码目录（程序员写的所有代码都要放在此目录下）
	4. .gitignore 		Git 的忽略文件
	5. index.html 		SPA 单页面应用程序中唯一的HTML 页面
	6. package.json 	项目的包管理配置文件

3. src源代码目录结构（图2）
	1. assets			存放项目中所有的静态资源文件（css、fonts等）
	2. components		存放项目中所有的自定义组件
	3. App.vue 			项目的根组件
	4. index.css 		项目的全局样式表文件
	5. main.js 			整个项目的打包入口文件	
```

## 图1

![image-20221111172623253](assets\image-20221111172623253.png)

## 图2

![image-20221111172800934](assets\image-20221111172800934.png)

# 3. vite 项目的运行流程

```
在工程化的项目中,vue 通过 main.js 把 App.vue 渲染到 index.html 的指定区域中

相关解释：
	1. App.vue 用来编写待渲染的模板结构
	
	2. index.html 中需要预留一个el 区域
	
	3. main.js 把App.vue 渲染到了index.html 所预留的区域中
```

# 3. 组件化开发思想

```
1. 什么是组件化开发
	组件化开发就是根据封装的思想，把页面上可重用的部分封装为组件，从而方便项目的开发和维护

2. 组件化开发的好处
	1. 提高了前端代码的复用性和灵活性
	2. 提升了开发效率和后期的可维护性
```

# 4. Vue组件开发

```
1. vue 中的组件化开发
	1. vue 是一个完全支持组件化开发的框架
	2. vue 中规定组件的后缀名是.vue

2. vue 组件的构成（每个 vue 组件由三部分组成）
	1. template-> 组件的模板结构（必须包含）
	2. script-> 组件的JavaScript 行为（可选）
	3. style-> 组件的样式（可选）

3. 组件的template节点详解
	1. vue 规定：每个组件对应的模板结构，需要定义到<template> 节点中
	2. <template> 是vue 提供的容器标签，只起到包裹性质的作用，并不会被渲染为真正的DOM 元素
	3. 在vue 2.x的版本中，<template> 节点内的DOM 结构仅支持单个根节点,vue3.x的版本开始支持多个根节点
	（解决vue3.x的版本支持多个根节点报红问题，将vetur插件替换成Volar插件）
		

4. 组件的script 节点详解
	1. vue 规定：组件内的<script> 节点是可选的，开发者可以在<script> 节点中封装组件的JavaScript 业务逻辑
	2. script 中的name节点
		1. 可以通过name 节点为当前组件定义一个名称
		2. 在使用vue-devtools 进行项目调试的时候，自定义的组件名称可以清晰的区分每个组件
	3. script 中的data节点
		1. vue 组件渲染期间需要用到的数据，可以定义在data 节点中
		2. vue 规定：组件中的data 必须是一个函数，不能直接指向一个数据对象,否则报错！
				（因为自定义组件可以复用, 为了保证复用时每个组件的数据都是独立的, 所以data必须是一个函数）
	4. script 中的methods节点
		1. 组件中的事件处理函数，必须定义到 methods 节点中

5. 组件的 style 节点详解
	1. vue 规定：组件内的<style> 节点是可选的，开发者可以在<style> 节点中编写样式美化当前组件的UI 结构
		1. 其中<style> 标签上的lang="css" 属性是可选的，它表示所使用的样式语言
		2. 默认只支持普通的css 语法，可选值还有less、scss 等
	
	2. 让 style 中支持less 语法
		1. 运行npm install less -D 命令安装依赖包，从而提供less 语法的编译支持
		2. 在<style> 标签上添加lang="less" 属性，即可使用less 语法编写组件的样式
	
	3. 让 style 中支持 sass 语法（类似操作）
```

# 5. 组件的基本使用上

```
1. 组件的注册
	1. vue 中组件的引用原则：先注册后使用
	2. 注册组件的两种方式
		1. 全局注册的组件，可以在全局任何一个组件内使用（图1）
		2. 局部注册的组件，只能在当前注册的范围内使用（图2）
	3. 应用场景：
		1. 如果某些组件在开发期间的使用频率很高，推荐全局注册
		2. 如果某些组件只在特定的情况下会被用到，推荐局部注册
	
	4. 组件注册时命名（两种方式）
		1. kebab-case命名法（俗称短横线命名法，例如my-swiper 和my-search）
		2. PascalCase命名法（俗称帕斯卡命名法或大驼峰命名法，例如MySwiper和MySearch）
		3. 两种注册方式特点：
			1. 短横线命名法的特点：
				必须严格按照短横线名称进行使用
			2. 帕斯卡命名法的特点：
				既可以严格按照帕斯卡名称进行使用，又可以转化为短横线名称进行使用（实际开发推荐使用的命名方案）
	5. 通过 name 属性注册组件（图3）
		除了可以直接提供组件的注册名称之外，还可以把组件的name 属性作为注册后组件的名称

2. 组件间的样式冲突
	1. 样式冲突问题
		默认情况，写在.vue 组件中的样式会全局生效（即会影响所有组件样式）
		原因：
			1. 单页面应用程序中，所有组件的DOM 结构，都是基于唯一的index.html 页面进行呈现
			2. 每个组件中的样式，都会影响整个index.html 页面中的DOM 元素
	2. 解决样式冲突问题
		1. 为每个组件分配唯一的自定义属性，在编写组件样式时，通过属性选择器来控制样式的作用域：（图4）
		2. vue 为 style 节点提供了scoped属性，进而样式冲突问题：（图5）
	3. 样式穿透问题
		1. 如果给当前组件的style 节点添加了 scoped 属性，则当前组件的样式对其子组件不生效
		2. 如果想让某些样式对子组件生效，可以使用/deep/ 深度选择器
		注意：/deep/是vue2.x 中实现样式穿透的方案，在vue3.x 中推荐使用:deep()替代/deep/（图6）
```

## 图1

![image-20221111181452061](assets\image-20221111181452061.png)

![image-20221111181653591](assets\image-20221111181653591.png)

## 图2

![image-20221111182013264](assets\image-20221111182013264.png)

## 图3

![image-20221111182513210](assets\image-20221111182513210.png)

## 	图4

![image-20221111182740607](assets\image-20221111182740607.png)

## 	图5

![image-20221111182916234](assets\image-20221111182916234.png)

## 图6



![image-20221111183020770](assets\image-20221111183020770.png)

## 1. 组件中的props

```
1. 为了提高组件的复用性，在封装vue 组件时需要遵守如下的原则：
	1. 组件的DOM 结构、Style 样式要尽量复用
	2. 组件中要展示的数据，尽量由组件的使用者提供

2. 什么是组件的props
	1. props 是组件的自定义属性，组件的使用者可以通过props 把数据传递到子组件内部，供子组件内部进行使用
	2. props 的作用：父组件通过props 向子组件传递要展示的数据
	3. props 的好处：提高了组件的复用性
```

### 	1. 在组件中声明props

![image-20221111183448220](assets\image-20221111183448220.png)

### 	2. 无法使用未声明的props

![image-20221111183530349](assets\image-20221111183530349.png)

### 3. 动态绑定props 的值

![image-20221111183605971](assets\image-20221111183605971.png)

### 4. props 的大小写命名

![image-20221111183640790](assets\image-20221111183640790.png)

## 2. Class 与 Style 绑定

### 	1.  动态绑定 HTML 的 class

#### 			1. 三元表达式语法

![image-20221111193527773](assets\image-20221111193527773.png)

#### 		2. 数组语法

![image-20221111193729767](assets\image-20221111193729767.png)

#### 		3. 对象语法

![image-20221111193924535](assets\image-20221111193924535.png)

### 	2. 动态绑定 HTML 的 style

#### 			1. 对象语法绑定内联的style

```
vue2学过其它绑定，这里提供最佳绑定方案！
```

![image-20221111194313671](assets\image-20221111194313671.png)

# 6. 组件的基本使用下

## 	1. props 验证

```
1. 什么是props 验证
	props 验证指的是：在封装组件时对外界传递过来的props 数据进行合法性的校验，从而防止数据不合法的问题
	使用数组类型的props 节点的缺点：无法为每个prop 指定具体的数据类型

2. 对象类型的props 节点
	使用对象类型的props 节点，可以对每个prop 进行数据类型的校验

3. props 验证
	1. 基础的类型检查（组件的属性指定基础的校验类型，从而防止组件的使用者为其绑定错误类型的数据）
	2. 多个可能的类型（组件的某个prop 属性值的类型不唯一，可通过数组的形式，为其指定多个可能的类型）
	3. 必填项校验（组件的某个prop 属性是必填项，必须让组件的使用者为其传递属性的值）
	4. 属性默认值（封装组件时，可为某个prop 属性指定默认值）
	5. 自定义验证函数（封装组件时，为prop 属性指定自定义的验证函数，从而对 prop 属性的值进行更加精确的控制）
```

### 1. 基础的类型检查

![image-20221111215510972](assets\image-20221111215510972.png)

### 2. 多个可能的类型

​	![image-20221111215547890](assets\image-20221111215547890.png)

### 3. 必填项校验

![image-20221111215635569](assets\image-20221111215635569.png)

### 4. 属性默认值

![image-20221111215729301](assets\image-20221111215729301.png)

### 5. 自定义验证函数

![image-20221111215815101](assets\image-20221111215815101.png)

## 	2. 计算属性和方法

```
查看vue2非组件化篇章介绍
```

![image-20221111220332125](assets\image-20221111220332125.png)

![image-20221111220546376](assets\image-20221111220546376.png)

## 3. 自定义事件

```
1. 为什么需要自定义事件
	在封装组件时，为了让组件的使用者可以监听到组件内状态的变化，此时需要用到组件的自定义事件

2. 自定义事件的3 个使用步骤
	1. 在封装组件时：
		1. 声明自定义事件（必须事先在emits节点中声明）
		2. 触发自定义事件（在emits节点下声明的自定义事件，可以通过this.$emit('自定义事件的名称')方法进行触发）
	2. 在使用组件时：
		3. 监听自定义事件（在使用自定义的组件时，可以通过v-on的形式监听自定义事件）

3. 自定义事件形参（在调用this.$emit() 方法触发自定义事件时，可以通过第 2 个参数为自定义事件传参）
```

### 1. 声明自定义事件

![image-20221111221052857](assets\image-20221111221052857.png)



### 	2. 触发自定义事件

![image-20221111221134480](assets\image-20221111221134480.png)

### 	3. 监听自定义事件

![image-20221111221215693](assets\image-20221111221215693.png)

### 	4. 自定义事件传参

![image-20221111221254653](assets\image-20221111221254653.png)

## 4. 组件上的v-model

```
1. 为什么需要在组件上使用v-model
	1. v-model 是双向数据绑定指令，当需要维护组件内外数据的同步时，可在组件上使用 v-model 指令
	2. 外界数据的变化会自动同步到 子组件 中
	3. 子组件 中数据的变化，也会自动同步到外界

2. 在组件上使用v-model 的步骤
		1. 在v-bind: 指令之前添加v-model 指令
		2. 在子组件中声明emits自定义事件，格式为update:xxx
		3. 调用$emit() 触发自定义事件，更新父组件中的数据
```

## 5. 两个案例

```
助力开发灵感，阅读源代码不难！
```

# 7. 组件的的高级使用上

## 	1. watch侦听器

```
1. 什么是 watch 侦听器
	watch 侦听器允许开发者监视数据的变化，从而针对数据的变化做特定的操作
	例如：监视用户名的变化并发起请求，判断用户名是否可用

2. 侦听器语法（图1）

3. 使用 watch 检测用户名是否可用（图2）
	监听 username 值的变化，并使用 axios 发起 Ajax 请求，检测当前输入的用户名是否可用：

4. immediate 选项（图3）
	默认情况下，组件在初次加载完毕后不会调用 watch 侦听器，如果想让 watch 侦听器立即被调用，则需要使用 immediate 选项

5. deep 选项（图4）
	当 watch 侦听的是一个对象，如果对象中的属性值发生了变化，则无法被监听到，此时需要使用deep 选项

6. 监听对象单个属性的变化（图5）
	如果只想监听对象中单个属性的变化，则可以按照图5的方式定义 watch 侦听器

7. 计算属性和侦听器侧重的应用场景不同：
	1. 计算属性侧重于监听多个值的变化，最终计算并返回一个新值
	2. 侦听器侧重于监听单个数据的变化，最终执行特定的业务处理，不需要有任何返回值
```

### 图1

![image-20221111205842845](assets\image-20221111205842845.png)

### 图2

![image-20221111210050630](assets\image-20221111210050630.png)

### 	图3

![image-20221111210157712](assets\image-20221111210157712.png)

### 图4

![image-20221111210418359](assets\image-20221111210418359.png)

### 图5

![image-20221111210515745](assets\image-20221111210515745.png)

## 2. 组件的生命周期

```
1. 组件运行的过程
	组件的生命周期指的是：组件从创建-> 运行（渲染）-> 销毁的整个过程，强调的是一个时间段

2. 如何监听组件的不同时刻
	1. 当组件在内存中被创建完毕之后，会自动调用 created 函数
	2. 当组件被成功的渲染到页面上之后，会自动调用 mounted 函数
	3. 当组件被销毁完毕之后，会自动调用 unmounted 函数

3. 如何监听组件的更新
	当组件的 data 数据更新之后，vue 会自动重新渲染组件的 DOM 结构，从而保证 View 视图展示的数据和 Model 数据源保持一致
	当组件被重新渲染完毕之后，会自动调用updated生命周期函数

4. 组件的生命周期
	官网文档：https://www.vue3js.cn/docs/zh/guide/instance.html#生命周期图示
```

| 生命周期函数  |           执行时机           | 所属阶段 | 执行次数 |      应用场景       |
| :-----------: | :--------------------------: | :------: | :------: | :-----------------: |
| beforeCreate  |   在内存中开始创建组件之前   | 创建阶段 | 唯一1次  |          -          |
|    created    |    组件在内存中创建完毕后    | 创建阶段 | 唯一1次  | 发ajax 请求初始数据 |
|  beforeMount  |  在把组件初次渲染到页面之前  | 创建阶段 | 唯一1次  |          -          |
|    mounted    |  组件初次在页面中渲染完毕后  | 创建阶段 | 唯一1次  |    操作DOM 元素     |
| beforeUpdate  |     在组件被重新渲染之前     | 运行阶段 | 0 或多次 |          -          |
|    updated    | 组件在页面中被重新渲染完毕后 | 运行阶段 | 0 或多次 |          -          |
| beforeUnmount |       在组件被销毁之前       | 销毁阶段 | 唯一1次  |          -          |
|   unmounted   |  组件被销毁后（页面和内存）  | 销毁阶段 | 唯一1次  |          -          |

## 3. 组件之间的数据共享

```
1. 组件之间的关系：
	1. 父子关系
	2. 兄弟关系
	3. 后代关系

2. 父组件向子组件共享数据（代码演示）
	父组件通过v-bind 属性绑定向子组件共享数据，同时，子组件需要使用 props 接收数据！

2. 子组件向父组件共享数据（代码演示）
	子组件通过自定义事件的方式向父组件共享数据

3. 父子组件之间数据的双向同步（代码演示）
	父组件在使用子组件期间，可以使用v-model 指令维护组件内外数据的双向同步：

4. 兄弟组件之间的数据共享
	兄弟组件之间实现数据共享的方案是EventBus,可以借助于第三方的包 mitt 来创建 eventBus 对象，从而实现兄弟组件之间的数据共享
		1. 安装mitt 依赖包
			npm install mitt@2.1.0
		2. 创建公共的 EventBus 模块
			在项目中创建公共的 eventBus 模块
		3. 在数据接收方自定义事件
			在数据接收方，调用bus.on('事件名称', 事件处理函数) 方法注册一个自定义事件
		4. 在数据接发送方触发事件
			在数据发送方，调用bus.emit('事件名称', 要发送的数据) 方法触发自定义事件

5. 后代关系组件之间的数据共享
	后代关系组件之间共享数据，指的是父节点的组件向其子孙组件共享数据
	此时组件之间的嵌套关系比较复杂，可以使用provide和inject实现后代关系组件之间的数据共享
		1. 父节点通过provide共享数据
			父节点的组件可以通过provide 方法，对其子孙组件共享数据
		2. 子孙节点通过inject接收数据
			子孙节点可以使用inject数组，接收父级节点向下共享的数据
		3. 父节点对外共享响应式的数据
			父节点使用provide 向下共享数据时，可以结合computed 函数向下共享响应式的数据
		4. 子孙节点使用响应式的数据
			如果父级节点共享的是响应式的数据，则子孙节点必须以.value 的形式进行使用

6. 全局数据共享Vuex
	vuex 是终极的组件之间的数据共享方案（全局数据共享）
	在企业级的vue 项目开发中，vuex 可以让组件之间的数据共享变得高效、清晰、且易于维护
```

## 4. vue 3.x 中全局配置axios

```
1. 为什么要全局配置axios
	在实际项目开发中，几乎每个组件中都会用到axios 发起数据请求，此时会遇到如下两个问题：
		1. 每个组件中都需要导入 axios（代码臃肿）
		2. 每次发请求都需要填写完整的请求路径（不利于后期的维护）
2. 如何全局配置 axios
	在 main.js 入口文件中，通过 app.config.globalProperties 全局挂载axios
```

## 5. 一个案例

```
助开发灵感，阅读源代码不难！
```

# 8. 组件的的高级使用下

## 1. ref 引用

```
1. 什么是ref 引用
	1. ref 用来辅助开发者在不依赖于 jQuery 的情况下，获取 DOM 元素或组件的引用
	2. 每个 vue 的组件实例上，都包含一个 $refs 对象，里面存储着对应的 DOM 元素或组件的引用
	3. 默认情况下，组件的 $refs 指向一个空对象

2. 使用 ref 引用 DOM 元素，从而达到对该DOM元素进行相关操作（图1）

3. 使用ref 引用组件实例，从而达到对该组件实例进行相关操作（图2）
```

### 图1

![image-20221111224123307](assets\image-20221111224123307.png)

### 图2

![image-20221111224225977](assets\image-20221111224225977.png)

## 2. this.$nextTick(cb)方法

```
1. 组件的$nextTick(cb)方法，会把 cb 回调推迟到下一个DOM 更新周期之后执行

2. 等组件的DOM 异步地重新渲染完成后，再执行 cb 回调函数

3. 从而能保证 cb 回调函数可以操作到最新的 DOM 元素
```

## 3. 动态组件

```
1. 什么是动态组件
	动态组件指的是动态切换组件的显示与隐藏，vue 提供了一个内置的<component> 组件，专门用来实现组件的动态渲染（vue2提到过）

2. 如何实现动态组件渲染
	1. <component> 是组件的占位符
	2. 通过 is 属性动态指定要渲染的组件名称
	3. <component is="要渲染的组件的名称"></component>
```

## 4. 插槽

```
1. 什么是插槽
	介绍看vue2章节总结

2. 后备内容
	封装组件时，可以为预留的<slot> 插槽提供后备内容（默认内容）
	组件的使用者没有为插槽提供任何内容，则后备内容会生效

3. 具名插槽
	1. 什么是具名插槽
		封装组件时需要预留多个插槽节点，则需要为每个<slot> 插槽指定具体的name 名称，这种带有具体名称的插槽叫做“具名插槽”！
		没有指定name 名称的插槽，会有隐含的名称“default”
	2. 如何使用具名插槽
		<template> 元素上使用v-slot指令，并以v-slot 的参数的形式提供其名称
		跟v-on 和v-bind 类似，v-slot 也有缩写，即把参数之前的所有内容(v-slot:) 替换为字符#
		例如：v-slot:header可以被重写为#header
	
		
4. 作用域插槽
	1. 什么是作用域插槽
		封装组件时，可以为预留的<slot> 插槽绑定 props 数据，这种带有props 数据的<slot> 叫做“作用域插槽”
	2. 作用域插槽对外提供的数据对象，可以使用解构赋值简化数据的接收过程
	3. 声明作用域插槽
		在封装MyTable 组件的过程中，可以通过作用域插槽把表格每一行的数据传递给组件的使用者
	4. 使用作用域插槽
		在使用MyTable 组件时，自定义单元格的渲染方式，并接收作用域插槽对外提供的数据
```

## 4. 自定义指令

```
1. 为什么要自定义指令
	vue官方提供的v-for、v-model、v-if 等常用内置指令无法满足用户需求时，可以根据自定义指令扩展功能
	
2. 什么是自定义指令（vue自定义指令分为两类）
	1. 私有自定义指令
	2. 全局自定义指令

3. 声明私有自定义指令的语法（图1）
	在每个vue 组件中，可以在directives节点下声明私有自定义指令

4. 使用自定义指令
	在使用自定义指令时，需要加上v-前缀

5. 声明全局自定义指令的语法
	全局共享的自定义指令需要通过“单页面应用程序的实例对象”进行声明

6. 指令的参数值
	在绑定指令时，可以通过“等号”的形式为指令绑定具体的参数值

5.  updated 和 mounted 函数
		mounted 函数只在元素第一次插入 DOM 时被调用，当 DOM 更新时 mounted 函数不会被触发
		updated 函数会在每次 DOM 更新完成后被调用
```

# 9. vue路由基本用法

```
1. 什么是路由（路由（router）就是对应关系，路由分为两大类）
	1. 后端路由
		后端路由是指当改变url地址时,浏览器会向服务器发送请求,服务器根据这个url,返回不同的资源内容（无非就是我们通俗的接口）
	2. 前端路由
		前端路由是指通过一定的技术手段,在跳转路由时不在向服务器发送请求, 而在在浏览器端进行处理
		例如：
			SPA 指的是一个web 网站只有唯一的一个HTML 页面，所有组件的展示与切换都在这唯一的一个页面内完成，
			此时，不同组件之间的切换需要通过前端路由来实现，所以在SPA 项目中，不同功能之间的切换，要依赖于前端路由来完成！
        	在Vue中开发中前端路由简单理解就是 Hash 地址 与 组件之间的对应关系

2. 前端路由的工作方式
	用户点击了页面上的路由链接，导致了URL 地址栏中的Hash 值发生了变化，
	前端路由监听了到Hash 地址的变化，前端路由把当前Hash 地址对应的组件渲染都浏览器中

3. vue-router
	1. 什么是vue-router
		vue-router是vue.js 官方给出的路由解决方案，它只能结合vue 项目进行使用，能够轻松的管理SPA 项目中组件的切换
	2. vue-router 的版本（目前有3.x的版本和4.x的版本）
		vue-router 3.x 只能结合vue2进行使用（官网：https://router.vuejs.org/zh/）
		vue-router 4.x 只能结合vue3进行使用（官网：https://next.router.vuejs.org）

4. vue-router 4.x 的基本使用步骤（vue-router 4.x只能在vue3中使用）
	1. 在项目中安装vue-router
		npm install vue-router@next -S
	2. 定义路由组件
		在项目中定义一些组件，使用vue-router 控制它们的展示与切换
	3. 声明路由链接和占位符
		使用<router-link> 标签来声明路由链接，并使用<router-view>标签来声明路由占位符
	4. 创建路由模块
		1. 从vue-router 中按需导入两个方法（图1）
		2. 导入需要使用路由控制的组件（图2）
		3. 创建路由实例对象（图3）
		4. 向外共享路由实例对象（图4）
		5. 在main.js 中导入并挂载路由模块（图5）
	5. 导入并挂载路由模块
		app.use() 方法用来挂载“第三方的插件模块”
```

## 图1

![image-20221112114839722](assets\image-20221112114839722.png)

## 图2

![image-20221112114904334](assets\image-20221112114904334.png)

## 图3

![image-20221112115046818](assets\image-20221112115046818.png)

## 图4

![image-20221112115119374](assets\image-20221112115119374.png)

## 图5

![image-20221112115143098](assets\image-20221112115143098.png)

# 10. vue路由高级用法

## 1. 路由重定向

```
路由重定向是指用户在访问地址A 的时候，强制用户跳转到地址C ，从而展示特定的组件页面。

通过路由规则的redirect属性，指定一个新的路由地址，可以很方便地设置路由的重定向：
```

![image-20221112115242329](assets\image-20221112115242329.png)

## 2. 路由高亮

```
将激活的路由链接进行高亮显示（两种方式）
	1. 使用默认的高亮class 类
	2. 自定义路由高亮的class 类
```

### 	1. 默认的高亮class 类

```
被激活的路由链接，默认会应用一个叫做router-link-active的类名，
开发者可以使用此类名选择器，为激活的路由链接设置高亮的样式：
```

![image-20221112115338789](assets\image-20221112115338789.png)

### 2. 自定义路由高亮的class 类

```
在创建路由的实例对象时，开发者可以基于linkActiveClass属性，自定义路由链接被激活时所应用的类名：
```

![image-20221112115414364](assets\image-20221112115414364.png)

## 3. 嵌套路由

```
通过路由实现组件的嵌套展示，叫做嵌套路由（两种方式）
	1. 声明子路由链接和子路由占位符
	2. 在父路由规则中，通过children属性嵌套声明子路由规则
```

### 	1. 声明子路由链接和子路由占位符

```
在About.vue 组件中，声明tab1 和tab2 的子路由链接以及子路由占位符
```

![image-20221112115542438](assets\image-20221112115542438.png)

### 2. 通过children属性声明子路由规则

```
在router.js 路由模块中，导入需要的组件，并使用children 属性声明子路由规则（其中子路由规则的path 不要以/ 开头）
```

![image-20221112115621511](assets\image-20221112115621511.png)

## 4. 动态路由

### 		1. 什么是动态路由

```
动态路由指的是把 Hash 地址中可变的部分定义为参数项，从而提高路由规则的复用性，
在vue-router 中使用英文的冒号（:）来定义路由的参数项
```

![image-20221112115740253](assets\image-20221112115740253.png)

### 	2. $route.params 参数对象

```
通过动态路由匹配的方式渲染出来的组件中，可以使用 $route.params 对象访问到动态匹配的参数值
```

![image-20221112115808028](assets\image-20221112115808028.png)

### 3. 使用props 接收路由参数

```
为简化路由参数的获取形式，vue-router 允许在路由规则中开启 props 传参
```

![image-20221112115836685](assets\image-20221112115836685.png)

## 5. 编程式导航

```
通过调用 API 实现导航的方式，叫做编程式导航，与之对应的，通过点击链接实现导航的方式，叫做声明式导航

例如：
	普通网页中点击<a> 链接、vue 项目中点击<router-link> 都属于声明式导航
	普通网页中调用location.href 跳转到新页面的方式，属于编程式导航
```

### 		1. vue-router 中的编程式导航API

```
vue-router 提供了许多编程式导航的API，其中最常用的两个API 分别是：
	1. this.$router.push('hash 地址')
		跳转到指定Hash 地址，从而展示对应的组件
	2. this.$router.go(数值n)
		实现导航历史的前进、后退
```

### 		2. $router.push

```
调用this.$router.push() 方法，可以跳转到指定的hash 地址，从而展示对应的组件页面
```

![image-20221112120806763](assets\image-20221112120806763.png)

### 		3. $router.go

```
调用this.$router.go() 方法，可以在浏览历史中进行前进和后退
```

![image-20221112120909025](assets\image-20221112120909025.png)

## 6. 命名路由

```
通过name 属性为路由规则定义名称的方式，叫做命名路由（其中命名路由的name 值不能重复，必须保证唯一性！）
```

![image-20221112120950360](assets\image-20221112120950360.png)

### 		1. 使用命名路由实现声明式导航

```
为<router-link> 标签动态绑定 to 属性的值，并通过 name 属性指定要跳转到的路由规则，
期间还可以用 params 属性指定跳转期间要携带的路由参数
```

![image-20221112121038037](assets\image-20221112121038037.png)

### 		2. 使用命名路由实现编程式导航

```
调用 push 函数期间指定一个配置对象，name是要跳转到的路由规则、params是携带的路由参数：
```

![image-20221112121117816](assets\image-20221112121117816.png)

## 	7. 导航守卫

### 	1. 导航守卫的作用

```
导航守卫可以控制路由的访问权限
```

![image-20221112121205126](assets\image-20221112121205126.png)

![image-20221112121223161](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221112121223161.png)

### 	2. 如何声明全局导航守卫

```
全局导航守卫会拦截每个路由规则，从而对每个路由进行访问权限的控制
```

![image-20221112121304446](assets\image-20221112121304446.png)

### 3. 守卫方法的3 个形参

```
1. 在守卫方法中如果不声明next 形参，则默认允许用户访问每一个路由！

2. 在守卫方法中如果声明了next 形参，则必须调用next() 函数，否则不允许用户访问任何一个路由！
```

![image-20221112121336487](assets\image-20221112121336487.png)

### 4. next 函数的3 种调用方式

```
直接放行：next()

强制其停留在当前页面：next(false)

强制其跳转到登录页面：next('/login')
```

![image-20221112121451677](assets\image-20221112121451677.png)

### 5. 结合token 控制后台主页的访问权限

![image-20221112121536377](assets\image-20221112121536377.png)

# 11. 相关案例

```
以下是一些效果案例，助力开发灵感，某些案例自己解读源码！（例如：路由案例，自己解读源码）
```

## 	1. 任务列表案例（todos）

**![image-20221114092207507](assets\image-20221114092207507.png)**

## 2. 水果列表案例（computed-study）

![image-20221114092744928](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221114092744928.png)

## 3. 购物车案例（code-cart）

![image-20221114092312193](assets\image-20221114092312193.png)

## 4. Table案例（table-demo）![image-20221114092432660](assets\image-20221114092432660.png)

## 5. 用户管理案例（code-router）

![image-20221114121844347](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221114121844347.png)

# 12. Vue2 组件化开发

```
以上都是本人基于vite创建项目，也是Vue3组件化开发相关学习，其实 Vue2 与 Vue3 使用类似，只是某部分功能方言不同！
例如：
	3.x 新增的功能：
		例如：组合式API、多根节点组件、更好的TypeScript 支持等
		
	3.x 废弃 2.x 的一些旧功能：
		例如：过滤器、不再支持$on，$off 和$once 实例方法等例如：Vue以下就是对Vue

本人最初学习也是基于Vue2的html学习的，以下就是基于Vue2进行组件化开发的相关操作介绍！
```

## 1. vue-cli脚手架

### 	1. vue-cli脚手架创建项目

```
1. 什么是vue-cli
	vue-cli（vue 脚手架）是vue 官方提供的、快速生成vue 工程化项目的工具

2. 特点：
	1. 开箱即用
	2. 基于 webpack
	3. 功能丰富且易于扩展
	4. 支持创建 vue2 和 vue3 的项目

3. vue-cli中文官网：https://cli.vuejs.org/zh/
	（vue-cli配置官网：https://cli.vuejs.org/config）

4. 安装vue-cli（vue-cli 是基于Node.js 开发出来的工具，因此需要使用npm 将它安装为全局可用的工具）
	npm install -g @vue/cli（全局安装 vue-cli）
	vue --version（查看 vue-cli 的版本，检验vue-cli 是否安装成功）

5. 解决Windows PowerShell 不识别vue命令的问题

	1. 默认情况下，在 PowerShell 中执行 vue --version 命令会提示如下的错误消息：（图1）
	
	2. 解决方案如下：（图2）
		1. 以管理员身份运行PowerShell
		2. 执行 set-ExecutionPolicy RemoteSigned 命令
		3. 输入字符Y，回车即可

6. 创建项目（vue-cli 提供了创建项目的两种方式）
	
	1. vue ui（基于可视化面版创建vue项目）
			1. 步骤1：在终端下运行vue ui 命令，自动在浏览器中打开创建项目的可视化面板：
			2. 步骤2：在详情页面填写项目名称：
			3. 步骤3：在预设页面选择手动配置项目：
			4. 步骤4：在功能页面勾选需要安装的功能（Choose Vue Version、Babel、CSS 预处理器、使用配置文件）：
			5. 步骤5：在配置页面勾选vue 的版本和需要的预处理器：
			6. 步骤6：将刚才所有的配置保存为预设（模板），方便下一次创建项目时直接复用之前的配置：
			7. 步骤7：创建项目并自动安装依赖包：
		vue ui 的本质：
			通过可视化的面板采集到用户的配置信息后，在后台基于命令行的方式自动初始化项目：
		项目创建完成后，自动进入项目仪表盘：
		
	2. vue create 项目名称（基于命令行方式创建 vue 项目）
			1. 步骤1：在终端下运行vue create demo2命令，基于交互式的命令行创建vue 的项目：
			2. 步骤2：选择要安装的功能：
			3. 步骤3：使用上下箭头选择vue 的版本，并使用回车键确认选择：
			4. 步骤4：使用上下箭头选择要使用的css 预处理器，并使用回车键确认选择：
			5. 步骤5：使用上下箭头选择如何存储插件的配置信息，并使用回车键确认选择：
			6. 步骤6：是否将刚才的配置保存为预设：
			7. 步骤7：选择如何安装项目中的依赖包：
			8. 步骤8：开始创建项目并自动安装依赖包：
			9. 步骤9：项目创建完成：
```

##### 	图1

![image-20221114102138472](assets\image-20221114102138472.png)

##### 	图2

![image-20221114102202667](assets\image-20221114102202667.png)

#### 1. 可视化面板创建项目

##### 	步骤1

![image-20221114102819722](assets\image-20221114102819722.png)

##### 	步骤2

![image-20221114102843598](assets\image-20221114102843598.png)

##### 	步骤3

![image-20221114102904637](assets\image-20221114102904637.png)

##### 	步骤4

![image-20221114102939096](assets\image-20221114102939096.png)

##### 	步骤5

![image-20221114103025425](assets\image-20221114103025425.png)

##### 	步骤6

![image-20221114103111457](assets\image-20221114103111457.png)

##### 	步骤7

![image-20221114103302182](assets\image-20221114103302182.png)

##### 	vue ui 的本质：

![image-20221114103501096](assets\image-20221114103501096.png)

##### 	项目仪表盘：

![image-20221114103626421](assets\image-20221114103626421.png)

#### 2. 命令行创建项目

##### 		步骤1

![image-20221114103918537](assets\image-20221114103918537.png)

##### 	步骤2

![image-20221114103952544](assets\image-20221114103952544.png)

##### 	步骤3

![image-20221114104022103](assets\image-20221114104022103.png)

##### 	步骤4

![image-20221114104044836](assets\image-20221114104044836.png)

##### 	步骤5

![image-20221114104122331](assets\image-20221114104122331.png)

##### 	步骤6

![image-20221114104153661](assets\image-20221114104153661.png)

##### 	步骤7

![image-20221114104220891](assets\image-20221114104220891.png)

##### 	步骤8

![image-20221114104250891](assets\image-20221114104250891.png)

##### 	步骤9

![image-20221114104320718](assets\image-20221114104320718.png)

### 2. 梳理vue2 项目的基本结构

![image-20221114104436662](assets\image-20221114104436662.png)

### 3. 分析main.js 中的主要代码

![image-20221114104551027](assets\image-20221114104551027.png)

### 4. 在vue2 的项目中使用路由

```
在vue2 的项目中，只能安装并使用3.x版本的vue-router

版本3 和版本4 的路由最主要的区别：创建路由模块的方式不同！
```

#### 	1. 4.x 版本的路由如何创建路由模块

```
基于vue3组件化开发项目已经提供了 4.x 版本的路由如何创建路由模块并且演示，本人不做详细说明！
```

![image-20221114105144153](assets\image-20221114105144153.png)

#### 	2. 3.x 版本的路由如何创建路由模块

```
3.x 版本的路由如何创建路由模块
	1. 步骤1：npm i vue-router@3.4.9 -S（在vue2 的项目中安装3.x 版本的路由）
	2. 步骤2：在src -> components 目录下，创建需要使用路由切换的组件（图1）
	3. 步骤3：在src 目录下创建router -> index.js 路由模块（图2）
	4. 步骤4：在main.js 中导入路由模块，并通过router属性进行挂载（图3）
	5. 步骤5：在App.vue 根组件中，使用<router-view> 声明路由的占位符（图4）
```

##### 	图1

![image-20221114105415860](assets\image-20221114105415860.png)

##### 	图2

![image-20221114105508454](assets\image-20221114105508454.png)

##### 图3

![image-20221114105551336](assets\image-20221114105551336.png)

##### 图4

![image-20221114105636093](assets\image-20221114105636093.png)

### 5. 组件库

```
1. 什么是vue 组件库
	在实际开发中，前端开发者可以把自己封装的.vue 组件整理、打包、并发布为npm 的包，从而供其他人下载和使用，
	这种可以直接下载并在项目中使用的现成组件，就叫做vue 组件库

2. vue 组件库和 bootstrap 的区别（vue3组件化开发所学时已经涉及bootstrap4.x UI框架的使用，
							以及前面本人所学栅格系统时也涉及过bootstrap3.x版本的使用，具体区别与详细使用待本人深入学习）
	二者之间存在本质的区别：
		bootstrap 只提供了纯粹的原材料（css 样式、HTML 结构以及JS 特效），需要由开发者做进一步的组装和改造
		vue 组件库是遵循 vue 语法、高度定制的现成组件，开箱即用

3. 最常用的 vue 组件库
	1. PC 端 vue 组件库
		1. Element UI（https://element.eleme.cn/#/zh-CN）
			Element UI 是饿了么前端团队开源的一套 PC 端 vue 组件库，支持在vue2 和vue3 的项目中使用：
				1. vue2的项目使用旧版的Element UI（https://element.eleme.cn/#/zh-CN）
				2. vue3的项目使用新版的Element Plus（https://element-plus.gitee.io/#/zh-CN）
			
		2. View UI（http://v1.iviewui.com/）
	2. 移动端 vue 组件库
		1. Mint UI（http://mint-ui.github.io/#!/zh-cn）
		2. Vant（https://vant-contrib.gitee.io/vant/#/zh-CN/）
```

### 6. vue2 中使用 vue 组件库

```
学会了 vue2 版本 使用 element-ui 组件库的使用方法，其他vue组件库使用方法类似操作！
	例如：利用 vue2/vue3 版本 使用 PC端 vue 组件库的使用以及移动端 vue 组件库的使用与之类似操作，官网学习即可！
	所以本人本次只提供了 vue2 中使用 PC端的vue组件库 element-ui 的使用步骤：

1. element-ui的使用步骤：
	1. npm i element-ui -S（在vue2 的项目中安装element-ui）
	2. 引入element-ui（两种引入方式，一次性完全引入所有element-ui组件，或者根据需求只按需引入用到的element-ui组件（推荐））
		1. 完整引入：操作简单，但是会额外引入一些用不到的组件，导致项目体积过大
		2. 按需引入：操作相对复杂，但是只会引入用到的组件，能起到优化项目体积的目的
```

#### 1. 完整引入

```
在main.js 中写入以下内容
```

![image-20221114112111812](assets\image-20221114112111812.png)

#### 2. 按需引入

```
借助babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的
	使用步骤：
		1. 步骤1：npm install babel-plugin-component -D（安装babel-plugin-component）
		2. 步骤2：修改根目录下的babel.config.js 配置文件，新增plugins节点如下（如图1）
		3. 步骤3：如果你只希望引入部分组件，比如Button，那么需要在main.js 中写入以下内容（如图2）
	把组件的导入和注册封装为独立的模块：
		在 src 目录下新建element-ui/index.js 模块，并声明如下的代码（图3）
```

##### 图1

![image-20221114112354987](assets\image-20221114112354987.png)

##### 图2

![image-20221114112459201](assets\image-20221114112459201.png)

##### 图3

![image-20221114113117285](assets\image-20221114113117285.png)

### 7. axios 拦截器

```
1. 不同版本下使用axios：
	1. 在 vue3 的项目中全局配置axios（具体回顾本人上面vue3知识对axios的代码使用）
	2. 在 vue2 的项目中全局配置axios
		需要在main.js入口文件中，通过Vue 构造函数的prototype 原型对象全局配置axios

2. 什么是拦截器？
	拦截器（Interceptors）会在每次发起 ajax 请求和得到响应的时候自动被触发（图3）

3. 配置请求拦截器
	通过axios.interceptors.request.use(成功的回调, 失败的回调) 可以配置请求拦截器（其中失败的回调函数可以被省略！）
	1. 请求拦截器–Token 认证
	2. 请求拦截器–展示Loading 效果
		借助于element ui 提供的 Loading 效果组件（https://element.eleme.cn/#/zh-CN/component/loading）

4. 配置响应拦截器
	通过axios.interceptors.response.use(成功的回调, 失败的回调) 可以配置响应拦截器（失败的回调函数可以被省略！）
		1. 响应拦截器–关闭Loading 效果
			调用Loading 实例提供的close() 方法即可关闭Loading 效果
```

#### 1. 在 vue3 的项目中全局配置axios

![image-20221114113556337](assets\image-20221114113556337.png)

#### 2. 在 vue2 的项目中全局配置axios

![image-20221114113712797](assets\image-20221114113712797.png)

![image-20221114113828443](assets\image-20221114113828443.png)

#### 3. 配置请求拦截器

![image-20221114114200292](assets\image-20221114114200292.png)

##### 1. 请求拦截器–Token 认证

![image-20221114114444776](assets\image-20221114114444776.png)

##### 	2. 请求拦截器–展示Loading 效果

![image-20221114114537189](assets\image-20221114114537189.png)

#### 4. 配置响应拦截器

![image-20221114114718210](assets\image-20221114114718210.png)

##### 	1. 响应拦截器–关闭Loading 效果

![image-20221114114835344](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20221114114835344.png)

### 8. proxy 跨域代理

#### 	1. 接口的跨域问题

```
vue 项目运行的地址：http://localhost:8080/
API 接口运行的地址：https://www.escook.cn/api/users

由于当前的API 接口没有开启CORS 跨域资源共享，因此默认情况下，上面的接口无法请求成功！
```

![image-20221114121130443](assets\image-20221114121130443.png)

#### 2. 通过代理解决接口的跨域问题

```
通过vue-cli 创建的项目在遇到接口跨域问题时，可以通过代理的方式来解决：

1. 把 axios 的请求根路径设置为 vue 项目的运行地址（接口请求不再跨域）
2. vue 项目发现请求的接口不存在，把请求转交给 proxy 代理
3. 代理把请求根路径替换为 devServer.proxy 属性的值，发起真正的数据请求
4. 代理把请求到的数据，转发给 axio
```

![image-20221114121358411](assets\image-20221114121358411.png)

#### 3. 在项目中配置 proxy 代理

```
在项目中配置 proxy 代理步骤：
1. 步骤1：在main.js 入口文件中，把 axios 的请求根路径改造为当前 web 项目的根路径：
2. 步骤2：在项目根目录下创建vue.config.js 的配置文件，并声明如下的配置
	1. devServer.proxy 提供的代理功能，仅在开发调试阶段生效
	2. 项目上线发布时，依旧需要 API 接口服务器开启 CORS 跨域资源共享
```

##### 1. 步骤1

![image-20221114121446464](assets\image-20221114121446464.png)

##### 2. 步骤2

![image-20221114121543036](assets\image-20221114121543036.png)

## 9. 用户列表案例（code-users）

![image-20221114133245846](assets\image-20221114133245846.png)
