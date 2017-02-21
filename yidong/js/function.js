//2016.8.5
//1.解决获取类名的兼容问题
//classname: 以哪个类名找元素
//father:父容器
function getClass(classname,father){

	father=father||document;
	if(father.getElementsByClassName){
		return father.getElementsByClassName(classname);
	}else{
		var newarr=[];
		var all=father.getElementsByTagName("*");
		for(i=0;i<all.length;i++){
			if(checkpre(all[i].className,classname)){
				newarr.push(all[i]);
			}
		}
	 return newarr;
	}
}
function checkpre(str,classname){
	var arr=str.split(" ");
	for(var i in arr){
		if(arr[i]==classname){
			return true;
		}
	}
	return false;
}
//2016.8.5
//2.获取样式的兼容函数
//obj：对象
//attr：属性
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];

	}else{
		return getComputedStyle(obj,null)[attr];
	}

}


//2016.8.8
//3.获取元素的兼容函数
//"#box" id ".box"类名 "a"
function $(selecter,father){
	if(typeof selecter=="string"){
	father=father||document;
	selecter=selecter.replace(/^\s*|\s*$/g,"");
    if(selecter.charAt(0)=="."){//类名
    	 return getClass(selecter.slice(1),father);
    }else if(selecter.charAt(0)=="#"){//id
    	return document.getElementById(selecter.slice(1));
    }else if(/^[a-z]+\d*$/g.test(selecter)){//标签名
    	return father.getElementsByTagName(selecter);

    }
    }else if(typeof selecter=="function"){
	window.onload=function(){
		selecter();
	}
}

}


//2016.8.10
//4.获取节点中的子节点
//father:父节点
//type："a" 子节点只有元素节点
//       "b"子节点中包含元素节点和非空的文本节点
function getChilds(father,type){
	type=type||"a";
     var all=father.childNodes;
     var newarr=[];
     for (var i = 0; i < all.length; i++) {
     	if(type=="a"){
     	   if(all[i].nodeType==1){
     		 newarr.push(all[i]);
         }
     	}else if(type=="b"){//元素+非空的文本节点
     		if(all[i].nodeType==1 || (all[i].nodeType==3 && all[i].nodeValue.replace(/^\s*|\s*$/g,"")!="")){
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
//8. 获取下一个兄弟节点
function getNext(obj){
	var next=obj.nextSibling;
	if(!next){
			return false;
		}
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
	var pre=obj.previousSibling;
	if(!pre){
			return false;
		}
	while(pre.nodeType==3 || pre.nodeType==8){
		pre=pre.nextSibling;
		if(!pre){
			return false;
		}
	}
	return pre;
}
function insertBefore(newobj,beforeobj){
      var parent=beforeobj.parentNode;//父节点
      parent.insertBefore(newobj,beforeobj);
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
//11.绑定事件的兼容函数
function addEvent(obj,event,fun){
	if(obj.attachEvent){
		obj.attachEvent("on"+event,function(){
			fun.call(obj)
		});
	}else{
		obj.addEventListener(event,fun,false);
	}

}

 //2016.8.15
//12.兼容鼠标滚轮的函数
function mouseWheel(obj,upfun,downfun){
	if(obj.attachEvent){
		obj.attachEvent("onmousewheel",scrollFn);//IE,opera
	}else if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);//chrome,safari  -webkit-
		obj.addEventListener("DOMMouseScroll",scrollFn,false);//firefox  -moz-
	}
	function scrollFn(e){
		var eve=e||window.event;
		if(eve.preventDefault){
			eve.preventDefault();
		}else{
			eve.returnValue=false;
		}
		var fangxiang=eve.wheelDelta||eve.detail;
		//FF 向上-3         向下3
		//IE 向上120        向下-120
		//chrome 向上 120   向下-120
		if(fangxiang==-3 || fangxiang==120){
			if(upfun){
			  upfun();
		    }
	    }
	    if(fangxiang==3 || fangxiang==-120){
	    	if(downfun){
	    		downfun();
	    	}
	    }

	}
}