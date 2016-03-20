(function(){
    function getCss(curEle,attr){
        var val=reg=null;
        if("getComputedStyle"in window){
            val=window.getComputedStyle(curEle,null)[attr];
        }else{
            if(attr==="opacity"){
                val=curEle.currentStyle["filter"];
                reg=/^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
                val=reg.test(val)?reg.exec(val)[1]/100:1;

            }else{
                val=curEle.currentStyle[attr];
            }
        }
        reg=/^-?\d+(\.\d+)?(pt|px|em|rem)?$/;
        return reg.test(val)?parseFloat(val):val;

    }
    //设置样式
    function setCss(curEle,attr,value){
        if(attr==="Float"){
            curEle["style"]["cssFloat"]=value;
            curEle["style"]["styleFloat"]=value;
            return;
        }
        if(attr==="opacity"){
            value>1?value=1:null;
            value<0?value=0:null;
            curEle["style"]["opacity"]=value;
            curEle["style"]["filter"]="alpha(opacity="+value*100+")";
            return;
        }
        var reg=/^(width|height(padding|margin(Top|Left|Right|Bottom))|top|left|right|bottom)$/;
        if(reg.test(attr)){
            reg=/^-?\d+(\.\d+)?$/;
            if(reg.test(value)){
                curEle["style"][attr]=value+"px";
            }
        }
        curEle["style"][attr]=value;
    }
    var zhufengEffect={
        Linear:function(t,b,c,d){
            return c*t/d+b;
        }
    };
    //动画效果
    function animate(curEle,tarObj,duration,effect,callBack){
        effect=zhufengEffect.Linear;
        //多方向距离目标位置的距离
        var times= 0,beginObj={},changeObj={};
        for(var key in tarObj){
            if(tarObj.hasOwnProperty(key)){
                beginObj[key]=getCss(curEle,key);
                changeObj[key]=tarObj[key]-beginObj[key];

            }
        }
        //动画效果的操作
        window.clearInterval(curEle.times);
        curEle.times=window.setInterval(function(){
            times+=10;
            //到达目标
            if(times>=duration){
                window.clearInterval(curEle.times);
                for(var key in tarObj){
                    if(tarObj.hasOwnProperty(key)){
                        setCss(curEle,key,tarObj[key]);

                    }
                }
                typeof callBack==="function"?callBack.call(curEle):null;
                return;
            }
            //没有到达
            for(key in changeObj){
                if(changeObj.hasOwnProperty(key)){
                    var cur=effect(times,beginObj[key],changeObj[key],duration);
                    setCss(curEle,key,cur)
                }
            }




        },10)







    }



    window.animate=animate;
})();