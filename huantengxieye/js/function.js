//2016.8.4
//1. 解决获取类名的兼容问题
//classname:哪个类名找元素
//father: 父容器，获取的范围
function getClass(classname,father){
	father=father||document;        //参数的初始化
	if(document.getElementsByClassName){
		return father.getElementsByClassName(classname);
	}else{
		var all=father.getElementsByTagName("*");
        var newarr=[];
        for(var i=0;i<all.length;i++){
        	if(checkPre(all[i].className,classname)){
        		newarr.push(all[i]);
        	}
        };
        return newarr;
	}
}

function checkPre(str,classname){
	var arr=str.split(" ");
	for(var i in arr){
		if(arr[i]==classname){
			return true;
		}
	}
    return false;
}


/**********************************************************************/
//2016.8.5
//2.获取样式的兼容问题 
//object:哪个对象找元素
//attr:属性
function getStyle(obj,attr){
     if(obj.currentStyle){
     	return obj.currentStyle[attr];
     }else{
     	return getComputedStyle(obj,null)[attr];
     }
}


/***********************************************************************/
//2016.8.8
//3.获取元素的兼容函数
//$ "#" id   "." 类名   "div"
//selector:当它为字符串时，获取元素
//         当它为函数，实现页面的加载完成
function $(selector,father){
    if(typeof selector=="string"){
        father=father||document;     
        selector=selector.replace(/^\s*|\s*$/g,"")   // 解决空格问题（即使有空格也可以应用）
        if(selector.charAt(0)=="."){ //类名
           return getClass(selector.slice(1),father);

        }else if(selector.charAt(0)=="#"){ //id名
           return document.getElementById(selector.slice(1));

        }else if(/^[a-z]+\d*$/g.test(selector)){ //标签名    
           return father.getElementsByTagName(selector);
        }
    }else if(typeof selector=="function"){
        window.onload=function(){
            selector()
        }
    }

}
//正则：一个定规则的表达式对象

/*******************************************************/
//2016.8.10
//4.获取元素中的子节点
//father :父节点
//type  ："a"  子节点只有元素节点
//        "b"  子节点有元素节点与非空的元素节点
function getChilds(father,type){
    type=type||"a";
    var all=father.childNodes;
    var newarr=[];
    for(var i=0;i<all.length;i++){
        if(type=="a"){
           if(all[i].nodeType==1){
                newarr.push(all[i]);
           } 
        }else if(type=="b"){     //元素+非空的文本节点
            if(all[i].nodeType==1 || (all[i].nodeType==3 && all[i].nodeVale.replace(/^\s*|\s*$/g,"")
                !="")){
                newarr.push(all[i]);
            }
        }
        
    }
    return newarr;
}

//5.获取第一个子节点
function getFirst(father){
    return getChilds(father)[0];
}

//6.获取最后一个子节点
function getLast(father){
    return getChilds(father)[getChilds(father).length-1];
}

//7.获取指定的子节点
function getNum(father,num){
    return getChilds(father)[num];
}
//8.获取下一个兄弟节点
function getNext(obj){
    if(!next){
        return false;
    }
    var next=obj.nextSibling;
    while(next.nodeType==3 || next.nodeType==8){
        next=next.nextSibling;
        if(!next){
            return false;
        }
    }
    return next;
}
//9.获取上一个兄弟节点
function getPre(obj){
    if(!pre){
        return false;
    }
    var pre=obj.previousSibling;
    while(obj.nodeType==3 || obj.nodeType==8){
        pre=pre.previousSibling;
        if(!pre){
            return false;
        }
    }
    return pre;
}
//2016.8.11
//10.把一个元素插入到某一个元素之后
function insertAfter(father,newobj,oldobj){
    var next=getNext(oldobj);
    if(next){
        father.insertBefore(newobj,next);
    }else{
        father.appendChild(newobj);
    }

}
/*******************************************************/
//2016.8.11
//11.绑定事件的兼容函数
function addEvent(obj,event,fun){
    if(obj.attachEvent){       //IE
        obj.attachEvent("on"+event,function(){
            fun.call(obj);        //解决IE8报错问题（匿名函数里再调用）
        });
    }else{        //FF
        obj.addEventListener(event,fun,false);
    }

}
/*******************************************************/
//2016.8.12
//12.兼容鼠标滚轮的函数
//upfun,downfun:回调函数
//attachEvent   IE添加事件
//addEventListener  FF添加事件   false:布尔值
function mouseWheel(obj,upfun,downfun){
    if(obj.attachEvent){   //IE
        obj.attachEvent("onmousewheel",scrollFn); 
        //IE、opera   onmousewheel：事件   scrollFn：事件处理程序 
    }else if(obj.addEventListener){  //现代
        obj.addEventListener("mousewheel",scrollFn,false);  //chrome,safari  -webkit-
        obj.addEventListener("DOMMouseScroll",scrollFn,false); //firefox  -moz-
    }

    function scrollFn(e){   //定义事件处理程序
        var eve=e||window.event;
        if(eve.preventDefault){
            eve.preventDefault();
        }else{
            eve.returnValue=false;
        }

        var fangxiang=eve.wheelDelta||eve.detail;
        // alert(fangxiang);
        //FF 向上  -3  ; 向下  3
        //IE 向上  120  ;向下  -120
        //chrome 向上  120  ;向下  -120
        if(fangxiang==-3||fangxiang==120){
            if(upfun){
              upfun();  
            }
        }
        if(fangxiang==3||fangxiang==-120){
            if(downfun){
              downfun();  
            }
        }
        
    }
}

/*****************************************************/
//2016.8.16
//13.判断某个元素是否包含有另外一个元素

 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }


/*****************************************************/
//2016.8.16
//14.判断鼠标是否真正的从外部移入，或者是真正的移出到外部；

  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }

/*****************************************************/
//2016.8.16
//15.鼠标移入移出事件

// obj   要操作的对象
// overfun   鼠标移入需要处理的函数
// outfun     鼠标移除需要处理的函数

function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/