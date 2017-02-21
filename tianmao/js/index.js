$(function(){

//banner start
// var imgbox=getClass("imgbox")[0];
function move(){
	var imgs=$("a",$(".imgbox")[0]);
	var btnbox=$(".btnbox")[0];
	var btn=$(".btn");
	var banner=$(".bottom1")[0];
	var aur=$(".aur")[0];
	var aul=$(".aul")[0];
	var arr=["#1d5e98","#e8e8e8","#e8e8e8","#71c951","#fed130","#f4bbc1"];
	var num=0;
	function rightMove(type){
		type=type || "right";
		if(type=="right"){
			num++;
		if(num>=imgs.length){
			num=0;
		}
		}
		if(type=="left"){
			num--;
		if(num<=-1){
			num=imgs.length-1;
		}
		}	
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.opacity=0;
			btn[i].className="btn";
		}
		animate(imgs[num],{opacity:1});
		btn[num].className="btn active";
		banner.style.background=arr[num];

	}
	var t=setInterval(rightMove,2000);
	banner.onmouseover=function(){
		clearInterval(t);
		// animate(aul,{opacity:1});
	 //    animate(aur,{opacity:1});
	}
	banner.onmouseout=function(){
		t=setInterval(rightMove,2000);
		// animate(aul,{opacity:0});
	 //    animate(aur,{opacity:0});
	}
	for(var i=0;i<btn.length;i++){
	  	 btn[i].aa=i;
	  	 btn[i].onmouseover=function(){
	  	 	for(var j=0;j<imgs.length;j++)
	  	 	{
	  	 		 // animate(imgs[j],{opacity:0});
	  	 		  imgs[j].style.opacity=0;
	         	 btn[j].className="btn";
	  	 	}
	  	 	 imgs[this.aa].style.opacity=1;
	         btn[this.aa].className="btn active";
	         num=this.aa;
	         banner.style.background=arr[num];

	  	 }
	}

	// aur.onclick=function(){
	// 	rightMove("right");
	// }

	// aul.onclick=function(){
	// 	rightMove("left");
	// }

	//banner end
	//遮罩  start
	var box=$(".box");
	var zhezhao=$(".box-guanzhu");
	for(i=0;i<box.length;i++){
		box[i].aa=i;
		box[i].onmouseover=function(){
			zhezhao[this.aa].style.display="block";
		}
		box[i].onmouseout=function(){
			zhezhao[this.aa].style.display="none";
		}
       }
}
move();
//遮罩  end
//搜索
function sousuo(){
	var box5=$(".box5")[0];
	var qinzi=$(".qinzi1");
	 var btn3=$("li",$(".jump")[0]);
	 var btn4=$("#jumpsmall");
	 var btn6=$("#jumpsmall1");	 
	 var btn5=$(".jump")[0];
	var arr=["#f7a945","#19c8a9","#f15453","#64c333","#0aa6e8","#ea5f8d","#dd2727","#dd2727"];
	var flag=true;
	var flag1=true;
	var flag2=true;
	var flag3=true;	
	var now=0;
    document.documentElement.scrollTop=1;
	window.onscroll=function(){
		var tops=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
		// document.title=tops;	
		if(tops>=1200){
			if(flag){
				animate(btn5,{left:0},300);				
				flag=false;
			}
			
		}else{
			animate(btn5,{left:-50},300);
			flag=true;
		}
		
		for(var i=0;i<qinzi.length;i++){

		// console.log(qinzi[i].offsetTop);
		if(tops>=qinzi[i].offsetTop-400){
			now=i;
			for(var j=0;j<btn3.length;j++){
				btn3[j].style.background="#333";
			}
			btn3[i].style.background=arr[i];

		}
	   }
		if(tops>=1200){
				if(flag1){
					animate(box5,{top:0},300);				
					flag1=false;
				}
				
			}else{
				animate(box5,{top:-50},300);
				flag1=true;
			}

			if(tops>=1200){
				if(flag2){
					animate(btn4,{left:0},300);				
					flag2=false;
				}
				
			}else{
				animate(btn4,{left:-50},300);
				flag2=true;
			}

			if(tops>=1200){
				if(flag3){
					animate(btn6,{left:0},300);				
					flag3=false;
				}
				
			}else{
				animate(btn6,{left:-50},300);
				flag3=true;
			}
			for (var i = 0; i < qinzi.length; i++) {
		if(qinzi[i].offsetTop<=tops+document.documentElement.clientHeight){
			 var imgs=$("img",qinzi[i]); //集合
			 for (var j = 0; j < imgs.length; j++) {
			 	imgs[j].src=imgs[j].getAttribute("src-data"); 
			//imgs[j].setAttribute("src",imgs[j].getAttribute("src-data"));
			 };
		}
	};
  }
  var ot=document.documentElement.scrollTop?  
        document.documentElement:document.body;
 for(var i=0;i<btn3.length;i++){
 	btn3[i].aa=i;
 	btn3[i].onmouseover=function(){
 		for(var j=0;j<btn3.length;j++){
 			if(now!=j){
 			btn3[j].style.background="#626262";}
 		}

 		this.style.background=arr[this.aa];
 	}
 	btn3[i].onmouseout=function(){
 		if(this.aa!=now){
 			btn3[this.aa].style.background="#626262";
 		}
 	}
 	btn3[i].onclick=function(){
 		// ot.scrollTop=qinzi[this.aa].offsetTop;
 		animate(ot,{scrollTop:qinzi[this.aa].offsetTop},300);
 	}
  }
  btn6.onclick=function(){
  		animate(document.body,{scrollTop:0},300);
		animate(document.documentElement,{scrollTop:0},300);
  }


}
sousuo();	
//左移
function zuoyi(a){

	var left25=$("img",$(".cx")[a]);//zheli 多选上了，这里把右边的也选上了，试一下用subline补全标签看看
	// console.log(left25.length,a)
	for (var i = 0; i < left25.length; i++) {
		left25[i].bb=i
	    left25[i].onmouseover=function(){
		animate(left25[this.bb],{right:11},300);
	}
	}
	for (var i = 0; i < left25.length; i++) {
		left25[i].bb=i
	    left25[i].onmouseout=function(){
		animate(left25[this.bb],{right:1},300);
	}
	}    
}
var qinzi=$(".qinzi");
  for (var i = 0; i < qinzi.length; i++) {
	    zuoyi(i);
	}
function dazao1(){
	var left212=$("img",$(".qin-buttom-q12")[0]);
	for (var i = 0; i < left212.length; i++) {
		left212[i].aa=i
	    left212[i].onmouseover=function(){
		animate(left212[this.aa],{left:80},300);
	}
	}
	for (var i = 0; i < left212.length; i++) {
		left212[i].aa=i
	    left212[i].onmouseout=function(){
		animate(left212[this.aa],{left:70},300);
	}
	}
}
dazao1();
function fangda(){
	var left211=$(".left21");
	for (var i = 0; i < left211.length; i++) {
		left211[i].aa=i;
	    left211[i].onmouseover=function(){
			animate(left211[this.aa],{height:150,width:150,left:41,bottom:2},300);
		}
		left211[i].onmouseout=function(){
			animate(left211[this.aa],{height:140,width:140,left:40,bottom:2},300);
		}
	}
	    
}
 fangda();
function zhezho(){
	var zhezhao=$(".banner-buttom-right")[0];
	zhezhao.onmouseover=function(){
		animate(zhezhao,{opacity:0.9},300);
	}
	zhezhao.onmouseout=function(){
		animate(zhezhao,{opacity:0.5},300);
	}
}
zhezho();	
function zhezho1(){
	var zhezhao1=$(".hotbig1")[0];
	zhezhao1.onmouseover=function(){
		animate(zhezhao1,{opacity:0.9},300);
	}
	zhezhao1.onmouseout=function(){
		animate(zhezhao1,{opacity:0.6},300);
	}
}
zhezho1();
function zhezho2(){
	var zhezhao2=$(".qinzi-buttom-w");
	for (var i = 0; i < zhezhao2.length; i++) {
		zhezhao2[i].aa=i;
	
	zhezhao2[i].onmouseover=function(){
		animate(zhezhao2[this.aa],{opacity:0.7},300);
	}
	zhezhao2[i].onmouseout=function(){
		animate(zhezhao2[this.aa],{opacity:0.9},300);
	}}
}
    zhezho2();	

	
//品牌
function brandhover(){
	var box=$(".pinpaibottom-11");
	for(var i=0;i<box.length;i++){
		box[i].index=i;
		box[i].onmouseover=function(){
			animate(box[this.index],{opacity:0.8},200);
			// zhezhao[this.index].style.opacity=1;
		}
		box[i].onmouseout=function(){
			animate(box[this.index],{opacity:1},200);
		}
	}
}
brandhover();
//猜你喜欢
function bhover(){
	var box3=$(".too");
	for(var i=0;i<box3.length;i++){
		box3[i].index=i;
		box3[i].onmouseover=function(){
			animate(box3[this.index],{opacity:0.8},200);
			// zhezhao[this.index].style.opacity=1;
		}
		box3[i].onmouseout=function(){
			animate(box3[this.index],{opacity:1},200);
		}
	}
}
bhover();
// function mao(){
// 	var ba=$(".banner-top-right")[0];
// 	var baba=$("li",ba);
// 	var ba1=$(".ba1")[0];
// 	var ba2=$(".ba2")[0];
// 	var ba3=$(".ba3")[0];
// 	var ba4=$(".ba4")[0];
// 	var ba5=$(".ba5")[0];
// 	var ba6=$(".ba6")[0];
// 	var ba7=$(".ba7")[0];
// 	var ba8=$(".ba8")[0];
// 	var ba9=$(".ba9")[0];
// 	var ba10=$(".ba10")[0];
// 	for (var i = 0; i < baba.length; i++) {
// 		baba[0].onmouseover=function(){
// 			animate(ba1,{top:-22,display:"block"},500);
// 		}
// 		baba[0].onmouseout=function(){
// 			ba1.style.display="none";
// 			animate(ba1,{top:0},500);
// 		}
// 		baba[1].onmouseover=function(){
// 			animate(ba2,{top:-22,display:"block"},500);
// 		}
// 		baba[1].onmouseout=function(){
// 			ba2.style.display="none";
// 			animate(ba2,{top:0},500);
// 		}
// 		baba[2].onmouseover=function(){
// 			animate(ba3,{top:-22,display:"block"},500);
// 		}
// 		baba[2].onmouseout=function(){
// 			ba3.style.display="none";
// 			animate(ba3,{top:0},500);
// 		}
// 		baba[3].onmouseover=function(){
// 			animate(ba4,{top:-22,display:"block"},500);
// 		}
// 		baba[3].onmouseout=function(){
// 			ba4.style.display="none";
// 			animate(ba4,{top:0},500);
// 		}
// 		baba[4].onmouseover=function(){
// 			animate(ba5,{top:-22,display:"block"},500);
// 		}
// 		baba[4].onmouseout=function(){
// 			ba5.style.display="none";
// 			animate(ba5,{top:0},500);
// 		}
// 		baba[5].onmouseover=function(){
// 			animate(ba6,{top:-22,display:"block"},500);
// 		}
// 		baba[5].onmouseout=function(){
// 			ba6.style.display="none";
// 			animate(ba6,{top:0},500);
// 		}
// 		baba[6].onmouseover=function(){
// 			animate(ba7,{top:-22,display:"block"},500);
// 		}
// 		baba[6].onmouseout=function(){
// 			ba7.style.display="none";
// 			animate(ba7,{top:0},500);
// 		}
// 		baba[7].onmouseover=function(){
// 			animate(ba8,{top:-22,display:"block"},500);
// 		}
// 		baba[7].onmouseout=function(){
// 			ba8.style.display="none";
// 			animate(ba8,{top:0},500);
// 		}
// 		baba[8].onmouseover=function(){
// 			animate(ba9,{top:-22,display:"block"},500);
// 		}
// 		baba[8].onmouseout=function(){
// 			ba9.style.display="none";
// 			animate(ba9,{top:0},500);
// 		}
// 		baba[9].onmouseover=function(){
// 			animate(ba10,{top:-22,display:"block"},500);
// 		}
// 		baba[9].onmouseout=function(){
// 			ba10.style.display="none";
// 			animate(ba10,{top:0},500);
// 		}
// 	}

// }
// mao();
// function small9(){
// 	var smalls9=$(".smalls9")[0];
// 	smalls9.onclick=function(){
// 		animate(document.body,{scrollTop:0},300);
// 		animate(document.documentElement,{scrollTop:0},300);
// 	}
// }
// small9();
function righttanchu(){
	var rnav=$(".rightnav_35");
	var tcbox=$(".rightnav_tanchu");
	for(var i=0;i<tcbox.length;i++){
		tcbox[i].className="rightnav_tanchu rightnav_tanchu_"+(i+1);
		rnav[i].index=i;
		rnav[i].onmouseover=function(){
			tcbox[this.index].style.display="block";
			animate(tcbox[this.index],{right:25,opacity:1},300);
		}
		if(i==7){
			rnav[i].onmouseout=function(){
				tcbox[this.index].style.display="none";
			}
		}else{
			rnav[i].onmouseout=function(){
				var aa=this.index;
				animate(tcbox[this.index],{right:60,opacity:0},300,function(){
					tcbox[aa].style.display="none";
				});
			}
		}
	}

	function tcboxXS(){
		for(var i=0;i<tcbox.length;i++){
			tcbox[i].style.display="none";
		}
	}
	//回到顶部
	// rnav[rnav.length-1].onclick=
}

righttanchu();
function mao(){
	var ba=$(".banner-top-right")[0];
	var baba=$("li",ba);
	var ba1=$(".ba1")[0];
	var ba2=$(".ba2")[0];
	var ba3=$(".ba3")[0];
	var ba4=$(".ba4")[0];
	var ba5=$(".ba5")[0];
	var ba6=$(".ba6")[0];
	var ba7=$(".ba7")[0];
	var ba8=$(".ba8")[0];
	var ba9=$(".ba9")[0];
	var ba10=$(".ba10")[0];
	for (var i = 0; i < baba.length; i++) {
		baba[0].onmouseover=function(){
			animate(ba1,{top:-22,display:"block"},500);
		}
		baba[0].onmouseout=function(){
			ba1.style.display="none";
			animate(ba1,{top:0},500);
		}
		baba[1].onmouseover=function(){
			animate(ba2,{top:-22,display:"block"},500);
		}
		baba[1].onmouseout=function(){
			ba2.style.display="none";
			animate(ba2,{top:0},500);
		}
		baba[2].onmouseover=function(){
			animate(ba3,{top:-22,display:"block"},500);
		}
		baba[2].onmouseout=function(){
			ba3.style.display="none";
			animate(ba3,{top:0},500);
		}
		baba[3].onmouseover=function(){
			animate(ba4,{top:-22,display:"block"},500);
		}
		baba[3].onmouseout=function(){
			ba4.style.display="none";
			animate(ba4,{top:0},500);
		}
		baba[4].onmouseover=function(){
			animate(ba5,{top:-22,display:"block"},500);
		}
		baba[4].onmouseout=function(){
			ba5.style.display="none";
			animate(ba5,{top:0},500);
		}
		baba[5].onmouseover=function(){
			animate(ba6,{top:-22,display:"block"},500);
		}
		baba[5].onmouseout=function(){
			ba6.style.display="none";
			animate(ba6,{top:0},500);
		}
		baba[6].onmouseover=function(){
			animate(ba7,{top:-22,display:"block"},500);
		}
		baba[6].onmouseout=function(){
			ba7.style.display="none";
			animate(ba7,{top:0},500);
		}
		baba[7].onmouseover=function(){
			animate(ba8,{top:-22,display:"block"},500);
		}
		baba[7].onmouseout=function(){
			ba8.style.display="none";
			animate(ba8,{top:0},500);
		}
		baba[8].onmouseover=function(){
			animate(ba9,{top:-22,display:"block"},500);
		}
		baba[8].onmouseout=function(){
			ba9.style.display="none";
			animate(ba9,{top:0},500);
		}
		baba[9].onmouseover=function(){
			animate(ba10,{top:-22,display:"block"},500);
		}
		baba[9].onmouseout=function(){
			ba10.style.display="none";
			animate(ba10,{top:0},500);
		}
	}

}
mao();
})