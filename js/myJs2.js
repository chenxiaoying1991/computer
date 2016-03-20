(function(){
    var inner = document.getElementById("inner");
    var imgList = inner.getElementsByTagName("img");
    var ary = ["img/1.jpg", "img/1..jpg", "img/1...jpg","img/1k.jpg"];
    var count = ary.length;
    var step=0;
    var autoTimer=null;
    var tip=document.getElementById("tip");
    var tipList=tip.getElementsByTagName("li");
    //实现动态绑定
    function bindData() {
        var str = "";
        for (var i = 0; i < ary.length; i++) {
            str += "<div><img src='' trueImg='" + ary[i] + "'/></div>";
        }
        str += "<div><img src='' trueImg='" + ary[0] + "'/></div>";
        inner.innerHTML = str;
        inner.style.width = (count + 1) * 960 + "px";
        //焦点
        str="";
        for(var i=0;i<ary.length;i++){
            str+="<li></li>";
        }
        tip.innerHTML=str;
        selectTip();
    }
    bindData();
    //图片延迟加载
    window.setTimeout(lazyImg, 500);
    function lazyImg() {
        for (var i = 0; i < imgList.length; i++) {
            ~function (i) {
                var curImg = imgList[i];
                var oImg = new Image;
                oImg.src = curImg.getAttribute("trueImg");
                oImg.onload = function () {
                    curImg.src = this.src;
                    curImg.style.display = "block";
                };
                window.curImg=curImg;
            }(i);
        }
    }
    //lazyImg();
    //实现焦点样式的选中
    function selectTip(){
        var tempStep=step;
        tempStep>=tipList.length?tempStep=0:null;
        for(var i=0;i<tipList.length;i++){
            tipList[i].className=i===tempStep?"bg":null;
        }
    }
    //实现焦点样式的选中点击切换
    function tipMove(){
        for(var i=0;i<tipList.length;i++){
            var curTip=tipList[i];
            ~function(i){
                curTip.onclick=function(){
                    window.clearInterval(autoTimer);
                    step=i;
                    animate(inner,{left:-step*960},500);
                    selectTip();
                    autoTimer=window.setInterval(autoMove,2000);
                }
            }(i);
        }
    }
    tipMove();
    //实现左右切换
    btnRight.onclick=function(){
        window.clearInterval(autoTimer);
        autoMove();
        autoTimer=window.setInterval(autoMove,2000);
    };
    btnLeft.onclick=function(){
        window.clearInterval(autoTimer);
        step--;
        if(step<0){
            step=count-1;
            inner.style.left=-count*960+"px";
        }
        animate(inner,{left:-step*960},500);
        selectTip();
        autoTimer=window.setInterval(autoMove,2000);
    };

    //实现自动轮播
    function autoMove(){
        step++;
        if(step>count){
            step=1;
            inner.style.left=0;
        }

        animate(inner,{left:-step*960},500);
        selectTip();
    }
    autoTimer=window.setInterval(autoMove,5000);
    inner.onmouseenter=function(){
        window.clearInterval(autoTimer);
    };
    inner.onmouseleave=function(){
        autoTimer=window.setInterval(autoMove,3000);
    };

    /*--------------------------*/
//获取这个盒子
    var topList=document.getElementById("topList");
    var leftBoxSix=document.getElementById("leftBoxSix");


    var curT = document.documentElement.scrollTop || document.body.scrollTop;
    var winH = document.documentElement.clientHeight || document.body.clientHeight;
    var winW=  document.documentElement.clientWidth || document.body.clientWidth;
    function scrollMove() {

        //console.log(curT,winH);
        if(curT>winH/2){
            //这步是为了满足条件时固定定位
            topList.style.position="fixed";
            topList.style.top=0;
        }else{
            //这步是不满足条件是回到原来的定位
            topList.style.position="relative";
        }

    }
    window.onscroll=scrollMove;
    /*----------------------------*/
    // var leftBox=document.getElementById("leftBox");
    // var a=leftBox.clientWidth;
    //var value=winW-a;
    // document.onmousemove=function(e){
    //     var touch= e.clientX;
    //     console.log(touch,value);
    //     if(touch<value){
    //         leftBox.style.display="none";
    //     }else{
    //         leftBox.style.display="block";
    //
    //     }
    // }


    (function() {
        var inner = document.getElementById("inner");
        var imgList = inner.getElementsByTagName("img");
        var ary = ["img/1.jpg", "img/1..jpg", "img/1...jpg", "img/1k.jpg"];
        var count = ary.length;
        var step = 0;
        var autoTimer = null;
        var tip = document.getElementById("tip");
        var tipList = tip.getElementsByTagName("li");
        //实现动态绑定
        function bindData() {
            var str = "";
            for (var i = 0; i < ary.length; i++) {
                str += "<div><img src='' trueImg='" + ary[i] + "'/></div>";
            }
            str += "<div><img src='' trueImg='" + ary[0] + "'/></div>";
            inner.innerHTML = str;
            inner.style.width = (count + 1) * 960 + "px";
            //焦点
            str = "";
            for (var i = 0; i < ary.length; i++) {
                str += "<li></li>";
            }
            tip.innerHTML = str;
            selectTip();
        }

        bindData();
        //图片延迟加载
        window.setTimeout(lazyImg, 500);
        function lazyImg() {
            for (var i = 0; i < imgList.length; i++) {
                ~function (i) {
                    var curImg = imgList[i];
                    var oImg = new Image;
                    oImg.src = curImg.getAttribute("trueImg");
                    oImg.onload = function () {
                        curImg.src = this.src;
                        curImg.style.display = "block";
                    };
                    window.curImg = curImg;
                }(i);
            }
        }

        //lazyImg();
        //实现焦点样式的选中
        function selectTip() {
            var tempStep = step;
            tempStep >= tipList.length ? tempStep = 0 : null;
            for (var i = 0; i < tipList.length; i++) {
                tipList[i].className = i === tempStep ? "bg" : null;
            }
        }

        //实现焦点样式的选中点击切换
        function tipMove() {
            for (var i = 0; i < tipList.length; i++) {
                var curTip = tipList[i];
                ~function (i) {
                    curTip.onclick = function () {
                        window.clearInterval(autoTimer);
                        step = i;
                        animate(inner, {left: -step * 960}, 500);
                        selectTip();
                        autoTimer = window.setInterval(autoMove, 2000);
                    }
                }(i);
            }
        }

        tipMove();
        //实现左右切换
        btnRight.onclick = function () {
            window.clearInterval(autoTimer);
            autoMove();
            autoTimer = window.setInterval(autoMove, 2000);
        };
        btnLeft.onclick = function () {
            window.clearInterval(autoTimer);
            step--;
            if (step < 0) {
                step = count - 1;
                inner.style.left = -count * 960 + "px";
            }
            animate(inner, {left: -step * 960}, 500);
            selectTip();
            autoTimer = window.setInterval(autoMove, 2000);
        };

        //实现自动轮播
        function autoMove() {
            step++;
            if (step > count) {
                step = 1;
                inner.style.left = 0;
            }

            animate(inner, {left: -step * 960}, 500);
            selectTip();
        }

        autoTimer = window.setInterval(autoMove, 5000);
        inner.onmouseenter = function () {
            window.clearInterval(autoTimer);
        };
        inner.onmouseleave = function () {
            autoTimer = window.setInterval(autoMove, 3000);
        };

        /*--------------------------*/
//获取这个盒子
        var topList = document.getElementById("topList");
        //var leftBoxSix=document.getElementById("leftBoxSix");


        var winH = document.documentElement.clientHeight || document.body.clientHeight;
        var winW = document.documentElement.clientWidth || document.body.clientWidth;
        window.onscroll = scrollMove;
        function scrollMove() {
            var curT = document.documentElement.scrollTop || document.body.scrollTop;
            if (curT > winH / 2) {
                //这步是为了满足条件时固定定位
                topList.style.position = "fixed";
                topList.style.top = 0;
                //console.log(curT, winH);
            } else {
                //这步是不满足条件是回到原来的定位
                topList.style.position = "relative";
            }

        }

        /*----------------------------*/
        var leftBox = document.getElementById("leftBox");
        var a = leftBox.clientWidth;
        var value = winW - a;
        document.onmousemove = function (e) {
            var touch = e.clientX;
            //console.log(touch, value);
            if (touch < value) {

                leftBox.style.left="none";
                animate(leftBox, {left: 1400}, 300);
                leftBox.className = "leftBox";

            } else {
                //leftBox.className = "animated rollIn leftBox";
                animate(leftBox, {left: 1307}, 300);

            }


        };
        /*----------------------------------------------*/
        var leftBoxSix = document.getElementById("leftBoxSix");
        leftBoxSix.onclick = function () {
            //生硬的一下回到顶部
            //document.documentElement.scrollTop = 0;
            //document.body.scrollTop = 0;


                //缓慢的回到顶部
            //1)首先获取当前的scrollTop值
            var target = document.documentElement.scrollTop || document.body.scrollTop;

            //2)设定总时间和多长时间走一步,从而计算出我们步长:每一步走多远
            var duration = 500, interval = 10, step = (target / duration) * interval;

            //3)设置一个定时器,让每隔10ms(interval)走一步
            var timer = window.setInterval(function () {
                //当到达终点的时候结束我们的动画
                if (target <= 0) {
                    window.clearInterval(timer);
                   return;
                }
                //每一次都在原有目标值的基础上减去步长,计算出当前距离顶部还有多远
                target -= step;
                document.documentElement.scrollTop = target;
                document.body.scrollTop = target;
            }, interval);
        };
        /*=============================================================*/
        //选项卡部分
    var data=document.getElementById("data");
    var oLis=data.getElementsByTagName("li");
    var oDivs=data.getElementsByTagName("div");
        function chen(n){
            for(var i=0;i<oLis.length;i++){
                oLis[i].className=null;
                oDivs[i].className=null;
            }
            oLis[n].className="europe";
            oDivs[n].className="europe";

        }
        for(var i=0;i<oLis.length;i++){
            ~function(i){
                oLis[i].onclick=function(){
                    chen(i);
                }
            }(i);
        }
/*----------------------------*/
        var text=document.getElementById("text");
        var oUl=text.getElementsByTagName("ul")[0];
        var oLit=oUl.getElementsByTagName("li");
        var oDiv=text.getElementsByClassName("no");
        function bind(a){
            for(var i=0;i<oLit.length;i++){
                oLit[i].className=null;
                oDiv[i].style.display="none";
            }
            oLit[a].className="euk";
            oDiv[a].style.display="block";

        }
        for(var i=0;i<oLit.length;i++){
            ~function(i){
                oLit[i].onclick=function(){
                    bind(i);
                }
            }(i);
        }














    })();
































})();