window.onload =  function () {
    // 1.初始化顶部的菜单
    initCityMenu();
    // 2.初始化顶部广告
    // initAd();
    // 3.初始化顶部导航
    initNav();
    // 4.初始化Banner
    initBanner();
    // 5.初始化Banner的选项卡
    initBannerTab();
    // 6.初始化秒杀区域
    initSeckill();
    // 7.初始化楼层菜单
    initFloorMenu();
    let oNavBack = document.querySelector(".nav-back");
    oNavBack.onclick = function () {
        moveTo(0);
    }
    let oNavClose = document.querySelector(".nav-close");
    let oNavRight = document.querySelector(".nav-right");
    let oLvLogo = document.querySelector(".lv-logo");
    oNavClose.onclick = function () {
        linearAnimation(oNavRight, {"right": -36}, function () {
            linearAnimation(oLvLogo, {"right": 0});
        });
    }
    oLvLogo.onclick = function () {
        linearAnimation(oLvLogo, {"right": -73}, function () {
            linearAnimation(oNavRight, {"right": 0});
        });
    }
}
function initFloorMenu(){
    // 0.拿到需要操作的元素
    let oSeckill = document.querySelector(".seckill");
    let seckillOffsetY = oSeckill.offsetTop;
    let oNavLeft = document.querySelector(".nav-left");
    let oNavItems = document.querySelectorAll(".nav-left>li");
    let oSections = document.querySelectorAll(".section");
    let currentItem = oNavItems[0];
    let oLastSection = document.querySelector(".section6");
    // console.log(oNavItems, oSections);
    // 1.监听网页的滚动
    window.onscroll = throttle(function () {
        // 2.拿到滚动出去的偏移位
        let offsetY = getPageScroll().y + 70;
        // 3.控制楼层菜单的显示
        if(offsetY >= seckillOffsetY){
            oNavLeft.style.display = "block";
        }else{
            oNavLeft.style.display = "none";
        }
        // 4.控制楼层菜单的选中
        for(let i = 0; i < oSections.length; i++){
            let oSection = oSections[i];
            let sectionOffsetY = oSection.offsetTop;
            let item = oNavItems[i];
            let itemOffsetY = item.offsetTop;

            if(offsetY >= sectionOffsetY - itemOffsetY){
                currentItem.className = "";
                item.className = "active";
                currentItem = item;
            }
        }
        // 5.控制楼层菜单是否需要跟随滚动
        let lastOffsetY = oLastSection.offsetTop;
        if(offsetY > lastOffsetY){
            oNavLeft.style.top = lastOffsetY - offsetY + "px";
        }else{
            oNavLeft.style.top = "70px";
        }
    }, 50);

    // 2.监听所有楼层菜单的点击事件
    for(let i = 0; i < oNavItems.length; i++){
        let item = oNavItems[i];
        item.onclick = function () {
            let oSection = oSections[i];
            let sectionOffsetY = oSection.offsetTop;
            // window.scrollTo(0, sectionOffsetY - 70 - this.offsetTop);
            moveTo(sectionOffsetY - 70 - this.offsetTop);
        }
    }
}
let timerId = null;
function moveTo(target) {
    clearInterval(timerId);
    timerId = setInterval(function () {
        let begin = getPageScroll().y;
        let step = (target - begin) * 0.3;
        begin += step;
        if(Math.abs(Math.floor(step)) <= 1){
            clearInterval(timerId);
            window.scrollTo(0, target);
            return;
        }
        window.scrollTo(0, begin);
    }, 50);
}
function initSeckill() {
    let obj = initSeckillJsonData();
    let oSeckillIn = document.querySelector(".seckill-in");
    let html = template('miaosha', obj);
    oSeckillIn.innerHTML = html;

    // 1.拿到所有的菜单
    let oTabItems = document.querySelectorAll(".seckill-tab>li");
    let currentItem = oTabItems[0];
    let oLine = document.querySelector(".seckill-top>p");
    let oBottoms = document.querySelectorAll(".seckill-bottom");
    let currentBottom = oBottoms[0];
    // 2.监听移入事件
    for(let i =0; i < oTabItems.length; i++){
        let item = oTabItems[i];
        item.index = i;
        item.onmouseenter = function () {
            currentItem.className = "";
            this.className = "active";
            currentItem = this;

            oLine.style.left = this.offsetLeft + "px";

            currentBottom.className = currentBottom.className.replace("active", "");
            let oBottom = oBottoms[this.index];
            oBottom.className = oBottom.className + " active";
            currentBottom = oBottom;
        }
    }
}
function initBannerTab() {
    // 1.拿到所有的菜单
    let oTabItems = document.querySelectorAll(".tab-left>li");
    let oTabContents = document.querySelectorAll(".tab-right>div");
    let currentItem = oTabItems[0];
    let currentContent = oTabContents[0];
    // 2.注册点击事件
    for(let i = 0; i < oTabItems.length; i++){
        let item = oTabItems[i];
        item.index = i;
        item.onclick = function () {
            currentItem.className = "";
            this.className = "active";
            currentItem = this;

            currentContent.className = "";
            let content = oTabContents[this.index];
            content.className = "active";
            currentContent = content;
        }
    }
}
function initBanner() {
    let timerId = changeBanner();
    let oBannerWrap = document.querySelector(".banner");
    oBannerWrap.onmouseenter = function () {
        clearInterval(timerId);
    }
    oBannerWrap.onmouseleave = function () {
        timerId = changeBanner();
    }
}
function changeBanner() {
    // 1.拿到所有的banner图片
    let oBanners = document.querySelectorAll(".banner-box>li");
    let oNumbers = document.querySelectorAll(".banner-number>li");
    // 2.拿到第一张图片
    let currentBanner = oBanners[0];
    let currentNumber = oNumbers[0];
    // 3.显示第一张图片
    // currentBanner.style.opacity = "1";
    // currentNumber.className = "active";
    // 4.监听索引的移入事件
    for(let i = 0; i < oNumbers.length; i++){
        let oNumber = oNumbers[i];
        oNumber.index = i;
        oNumber.onmouseenter = function () {
            // console.log(this.index);
            currentNumber.className = "";
            this.className = "active";
            currentNumber = this;

            currentBanner.style.opacity = "0";
            let oBanner = oBanners[this.index];
            oBanner.style.opacity = "1";
            currentBanner = oBanner;
        }
    }
    // 5.实现自动轮播
    let index = 0;
    let count = oBanners.length;
    let timerId = setInterval(function () {
        currentBanner.style.opacity = "0";
        currentNumber.className = "";
        index++;
        if(index === count){
            index = 0;
        }
        let oBanner = oBanners[index];
        oBanner.style.opacity = "1";
        currentBanner = oBanner;

        let oNumber = oNumbers[index];
        oNumber.className = "active";
        currentNumber = oNumber;
    }, 2000);
    return timerId;
}
function initNav() {
    let obj = initNavJsonData();
    let oNavIn = document.querySelector(".nav-in");
    for(let i = 0; i < obj.navs.length; i++){
        let oLi = document.createElement("li");
        oNavIn.appendChild(oLi);
        let oA = document.createElement("a");
        oA.innerText = obj.navs[i].title;
        oLi.appendChild(oA);
        if(obj.navs[i].subTitle.length !== 0){
            let oI = document.createElement("i");
            oA.appendChild(oI);
        }
    }
    let oNav = document.querySelector(".nav");
    let oLis = document.querySelectorAll(".nav-in>li");
    let oArrow = document.querySelector(".nav-arrow");
    let oSubNavP = document.querySelector(".sub-nav>p");
    let oSubNav = document.querySelector(".sub-nav");
    let currentLi = null;
    for(let i = 0; i < oLis.length; i++){
        let oLi = oLis[i];
        oLi.onmouseenter = function () {
            oSubNav.style.display = "none";
            if(obj.navs[i].subTitle.length !== 0){
                oSubNav.style.display = "block";
            }

            if(currentLi !== null){
                currentLi.className = "";
            }
            this.className = "selected";
            let offsetX = this.offsetLeft + this.offsetWidth / 2;
            oArrow.style.left = offsetX - oArrow.offsetWidth / 2 + "px";

            oSubNavP.innerHTML = "";
            for(let j = 0; j < obj.navs[i].subTitle.length; j++){
                let oA = document.createElement("a");
                oA.innerText = obj.navs[i].subTitle[j];
                oSubNavP.appendChild(oA);
            }
            oSubNavP.style.left = offsetX - oSubNavP.offsetWidth / 2 + "px";
            currentLi = this;
        }
    }
    oNav.onmouseleave = function () {
        oSubNav.style.display = "none";
        let oLi = document.querySelector("li.selected");
        oLi.className = "";
    }
}
function initAd() {
    let oAd = document.querySelector(".ad");
    let oImg = document.querySelector(".ad-in>img");
    let oAdCloseBtn = document.querySelector(".ad-btn");
    linearAnimation(oAd, {"height": 400}, function () {
        // alert("动画执行完毕了");
        setTimeout(function () {
            linearAnimation(oAd, {"height": 60}, function () {
                // alert("动画执行完毕了");
                oImg.src = "images/small-ad.jpg";
                oAdCloseBtn.style.display = "block";
            });
        }, 2000);
    });
    oAdCloseBtn.onclick = function () {
        // oAd.style.height = "0px";
        linearAnimation(oAd, {"height": 0}, function () {
            oAd.parentNode.removeChild(oAd);
        });
    }
}
function initCityMenu() {
    // http://pv.sohu.com/cityjson
    // var returnCitySN = {"cip": "58.34.162.216", "cid": "310000", "cname": "上海市"};
    let oCityName = document.querySelector(".city>b");
    oCityName.innerText = returnCitySN["cname"];
    let obj = initCityJsonData();
    let html = template('cityes', obj);
    let oCity = document.querySelector(".city");
    oCity.innerHTML = oCity.innerHTML + html;

    let oDiv = document.querySelector(".city>div");
    oCity.onclick = function () {
        if(this.className.includes("active")){
            this.className = this.className.replace("active", "");
            oDiv.style.display = "none";
        }else{
            this.className = this.className + " active";
            oDiv.style.display = "block";
        }
    }
}
function initCityJsonData() {
    let str = `{
  "cityes": [
    {
      "area": "华北",
      "list": [
        "北京",
        "天津",
        "太原",
        "唐山",
        "呼和浩特",
        "包头",
        "石家庄",
        "呼伦贝尔",
        "大同",
        "济南",
        "青岛",
        "日照",
        "烟台"
      ]
    },
    {
      "area": "华东",
      "list": [
        "上海",
        "南京",
        "杭州",
        "合肥",
        "厦门",
        "南昌",
        "苏州",
        "无锡",
        "宁波",
        "常州",
        "嘉兴",
        "南通",
        "扬州",
        "镇江",
        "绍兴",
        "温州",
        "金华",
        "台州",
        "盐城",
        "泰安",
        "芜湖",
        "黄山",
        "阜阳",
        "福州",
        "赣州",
        "宜春",
        "婺源",
        "泰州"
      ]
    },
    {
      "area": "东北",
      "list": [
        "沈阳",
        "大连",
        "哈尔滨",
        "长春",
        "齐齐哈尔",
        "延边"
      ]
    },
    {
      "area": "华中",
      "list": [
        "武汉",
        "洛阳",
        "张家界",
        "长沙",
        "郑州",
        "焦作",
        "宜昌",
        "神农架",
        "南阳"
      ]
    },
    {
      "area": "华南",
      "list": [
        "广州",
        "深圳",
        "南宁",
        "桂林",
        "海口",
        "三亚",
        "珠海",
        "清远",
        "东莞"
      ]
    },
    {
      "area": "西南",
      "list": [
        "成都",
        "重庆",
        "昆明",
        "丽江",
        "大理",
        "西双版纳",
        "香格里拉",
        "贵阳",
        "拉萨",
        "九寨沟",
        "西昌"
      ]
    },
    {
      "area": "西北",
      "list": [
        "西安",
        "银川",
        "西宁",
        "乌鲁木齐",
        "兰州",
        "嘉峪关",
        "榆林",
        "延安",
        "喀什",
        "喀纳斯"
      ]
    },
    {
      "area": "港澳台",
      "list": [
        "中国香港",
        "中国澳门",
        "中国台湾"
      ]
    }
  ]
}`;
    return JSON.parse(str);
}
function initNavJsonData() {
    let str = `{
  "navs":[
    {
      "title": "首页",
      "subTitle": []
    },
    {
      "title": "出境游",
      "subTitle": ["出境首页", "邮轮", "签证", "境外玩乐", "WIFI/电话卡", "定制游"]
    },
    {
      "title": "国内游",
      "subTitle": ["国内首页", "机酒自由行", "超级自由行", "定制游"]
    },
    {
      "title": "周边游",
      "subTitle": ["周边游首页", "酒店+景点", "周边跟团", "定制游"]
    },
    {
      "title": "景点门票",
      "subTitle": ["国内门票", "境外门票"]
    },
    {
      "title": "酒店",
      "subTitle": ["国内酒店", "境外酒店"]
    },
    {
      "title": "定制游",
      "subTitle": ["个人定制游", "企业定制游"]
    },
    {
      "title": "自驾游",
      "subTitle": ["自驾首页", "定制游"]
    },
    {
      "title": "亲子游",
      "subTitle": []
    },
    {
      "title": "邮轮",
      "subTitle": ["邮轮首页", "日本航线", "海外航线"]
    },
    {
      "title": "机票",
      "subTitle": ["国内机票", "国际·港澳台机票"]
    },
    {
      "title": "火车票",
      "subTitle": []
    },
    {
      "title": " 特卖会",
      "subTitle": []
    },
    {
      "title": "金融",
      "subTitle": ["小驴白条", "礼品卡"]
    },
    {
      "title": "旅游攻略",
      "subTitle": ["目的地", "游记", "问答"]
    }
  ]
}`;
    return JSON.parse(str);
}
function initSeckillJsonData() {
    let str = `{
  "miaosha": [
    {
      "title": "今日必抢",
      "list": [
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-09-19/0f509447-40e3-4e69-b5ca-f1ccd3fc4e50_300_200.jpg",
          "type": "酒店套餐",
          "des": "茅山2天1晚【5.28-31爆款抢购，超长有效期，支持改期一次】句容茅山涵田半岛酒店景观房1晚＋双早双晚+茅山风景区/伏热花海二选一",
          "price": "¥599"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2019-05-20/a8f9e58e-6637-4eac-956b-19a13c00ffbe_300_200.jpg",
          "type": "景区门票",
          "des": "上海迪士尼乐园",
          "price": "¥74"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2019-05-15/aec6bc8c-ad51-410f-a944-df8a9cda95f1_300_200.jpg",
          "type": "跟团游",
          "des": "朱家角古镇，深坑精灵之城1日 纯玩跟团游(  游佘山森林公园，览世界海拔最低酒店、体验刺激玻璃栈道)",
          "price": "¥99"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-29/fe4fb464-0fc6-4100-b415-8e7318dbeb2b_300_200.jpg",
          "type": "酒店套餐",
          "des": "横店2天1晚【下单立减200，独家特惠套餐】住1晚四星影视主题酒店百老汇大厦+3景点＋梦幻谷",
          "price": "¥1210"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-12-29/21415a82-3831-4983-b26c-62f16ff857ee_300_200.jpg",
          "type": "跟团游",
          "des": "【驴妈妈臻选】【提前60天报名，立减1000元每单，2人起订】北欧四国+双峡湾+皇后岛10日8晚经典游",
          "price": "¥13999"
        }
      ]
    },
    {
      "title": "品质优选",
      "list": [
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2016-02-02/ff9f7185-ff1d-49bc-a8f3-87c8e172ce3f_300_200.jpg",
          "type": "酒店套餐",
          "des": "【乐玩同里，美食之旅】【同里2天1晚自由行特卖】住同里湖度假村二期1晚＋含双人自助早餐＋双人自助晚餐带你体验亲子酒店界的海底捞",
          "price": "¥1058"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-11-28/d3f9e1ad-7bf2-4245-a5c5-4c6c1ab049af_300_200.jpg",
          "type": "酒店套餐",
          "des": "【无锡特卖】住无锡希尔顿逸林酒店1晚含双早＋享酒店周日-周四中餐套餐、周五-周六自助晚餐；享酒店恒温泳池，先进健身房，免费停车",
          "price": "¥735"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2017-01-09/e1ee33f4-cdd8-44ad-b441-90a3db6ed07d_300_200.jpg",
          "type": "酒店套餐",
          "des": "【横店自由行特卖·住一晚送一晚】住2晚横店官方酒店＋横店景点6选4＋梦幻谷＋赠随行儿童门票1套、大智禅寺、公交IC卡",
          "price": "¥1288"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2016-07-05/1a35f90b-1323-43e3-b319-fa100f7da20a_300_200.jpg",
          "type": "酒店套餐",
          "des": "【昆山兰博基尼2天1晚自由行特卖】住昆山托尼洛·兰博基尼酒店精致房＋双人早餐＋（双人自助晚餐／蒙特利／锦溪古镇／趣乐儿童游乐中心／重元寺）5选1",
          "price": "¥658"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2016-02-19/9777f90a-8f71-471f-a53d-495980a9a168_300_200.jpg",
          "type": "自由行",
          "des": "杭州2天1晚【桐庐市中心酒店·298元起】桐庐开元名都大酒店＋可自选自助晚餐＋深奥古村＋芦茨湾＋免费健身房＋免费停车场",
          "price": "¥298"
        }
      ]
    },
    {
      "title": "亲子/自驾",
      "list": [
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2019-01-08/54abcf17-43f4-446a-b68a-0fb0827544d7_300_200.jpg",
          "type": "酒店套餐",
          "des": "南通2天1晚【迎海踏春】恒大海上威尼斯（恒大酒店）含双早+放飞童梦套餐/踏春亲海游园记套餐套餐多选一+享“碧海银沙”，恒温泳池，健身房",
          "price": "¥1099"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2016-09-19/98282bf9-f439-42ac-a467-3b52bec1ae48_300_200.jpg",
          "type": "酒店套餐",
          "des": "上海2天1晚【住驴小玩房车】东平国家森林公园景区内房车双早＋免东平国家森林公园门票2张+小电瓶车接送各1次＋崇明大米1份＋文具礼盒套装3选1",
          "price": "¥520"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2015-09-22/f1313097-9599-4864-8845-10f000120f31_300_200.jpg",
          "type": "自由行",
          "des": "【随心任性，饕餮美食，宁波2天1晚自由行特卖】住宁波凯洲皇冠假日酒店，享双人海鲜自助晚餐＋酒店双早，免费体验酒店健身房，游泳池，WIFI",
          "price": "¥698"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2018-11-28/cb662da5-bad1-4902-a781-f7f5eb8ad331_300_200.jpg",
          "type": "酒店套餐",
          "des": "【凯蒂猫乐园 自由行特卖】安吉银润锦江城堡主题酒店2天1晚亲子梦幻萌之旅，游杭州Hello Kitty乐园 体验梦幻亲子之旅，免费享酒店停车，泳池，健身房等设施！",
          "price": "¥1108"
        },
        {
          "img": "http://pics.lvjs.com.cn/pics//uploads/pc/place2/2016-07-05/1a35f90b-1323-43e3-b319-fa100f7da20a_300_200.jpg",
          "type": "酒店套餐",
          "des": "昆山2天1晚 【昆山兰博基尼2天1晚自由行特卖】,入住昆山托尼洛·兰博基尼酒店 + 双人早餐＋（双人自助晚餐／蒙特利亲子主题乐园／锦溪＋双人美美哒下午茶／周庄）项目自选＋WIFI＆游泳池＆健身房＆停车等",
          "price": "¥658"
        }
      ]
    }
  ]
}`;
    return JSON.parse(str);
}