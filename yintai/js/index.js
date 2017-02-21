$(function(){
function selectCard3(){
	var btn=$("li",$(".tuijian-card-nav")[0]);//选项卡标题
	var card=$(".card-imgsbox");//选项卡盒子
	var shover=$("s",$(".tuijian-card-nav")[0])//三角
	for(var i=0;i<card.length;i++){
		btn[i].index=i;
		btn[i].onmouseover=function(){
			for(var j=0;j<card.length;j++){
				card[j].style.display="none";
				shover[j].style.opacity="0";
				btn[j].style.borderBottom="4px solid #333";
			}
			card[this.index].style.display="block";
			shover[this.index].style.opacity="1";
			this.style.borderBottom="4px solid #e5004f";
		}
	}
}
selectCard3()
//banner轮播效果
function banner(){
	var bannerImg=$("a",$(".class-imgs-imgs")[0]);
	var imgbox=$(".banner-imgs")[0];//
	var bannerbox=$(".banner-imgbox")[0];
	var imgbg=$(".banner-imgbox-bgbox");//设置背景的盒子
	var lbtn=$(".banner-btnleft")[0];
	var rbtn=$(".banner-btnright")[0];
	var btn=$("li",$(".banner-btnbox")[0]);
	var rightimg=$(".banner-right")[0];//banner右边的图片
	var leftnav=$(".banner-leftnav")[0];//banner左边的导航盒子
	var num=0;//控制轮播的下标
	var now=0;
	var btnFlag=true;
	function lunbo(type){
		type=type||"right";
		if(!btnFlag){
			return false;
		}
		btnFlag=false;

		if(type=="right"){
			num++;
			if(num>=bannerImg.length){
				num=0;
			}
		}else if(type=="left"){
			num--;
			if(num<=-1){
				num=bannerImg.length-1;
			}
		}
		
		for(var j=0;j<bannerImg.length;j++){
			if(j!=now){
				bannerImg[j].style.opacity="0";
				imgbg[j].style.opacity="0";
			}
			btn[j].className="";
		}

		animate(bannerImg[now],{opacity:0},300);
		animate(imgbg[now],{opacity:0},300);
		animate(imgbg[num],{opacity:1},300);
		animate(bannerImg[num],{opacity:1},300,function(){
			btnFlag=true;
		});
		btn[num].className="act";
		now=num;
	}
	var t=setInterval(lunbo,3000);
	lbtn.onclick=function(){
		lunbo("left");
	}
	rbtn.onclick=function(){
		lunbo("right");
	}
	for(var k=0;k<btn.length;k++){
		btn[k].index=k;
		btn[k].onmouseover=function(){
			num=this.index-1;
			lunbo();
		}
	}
	hover(bannerbox,function(){
		lbtn.style.display="block";
		rbtn.style.display="block";
		clearInterval(t);
		rightimg.onmouseover=function(){
			lbtn.style.display="none";
			rbtn.style.display="none";
			animate(rightimg,{right:10},200);
		}
		rightimg.onmouseout=function(){
			lbtn.style.display="block";
			rbtn.style.display="block";
			animate(rightimg,{right:-1},300);
		}
		leftnav.onmouseover=function(){
			lbtn.style.display="none";
			rbtn.style.display="none";
		}
		leftnav.onmouseout=function(){
			lbtn.style.display="block";
			rbtn.style.display="block";
		}
	},function(){
		lbtn.style.display="none";
		rbtn.style.display="none";
		t=setInterval(lunbo,3000);
	}
	);
}
banner();

//banner左边导航
function bannerLeftNav(){
	var yiji=$(".banner-leftnav-yiji");
	var erji=$(".banner-leftnav-erji");
	var yijihover=$(".banner-leftnav-yiji-hover");
	var t;

	//二级菜单
	for(var i=0;i<yiji.length;i++){
		yiji[i].index=i;
		// banner左边导航图片精灵
		var yijiImg=$("s",yijihover[i])[0];
		yijiImg.className="banner-leftnav-icon"+(i+1);

		hover(yiji[i],function(){
			erji[this.index].style.display="block";//二级菜单出现
		},function(){
			erji[this.index].style.display="none";
		});		
	}
}
bannerLeftNav()
//xuanxiang
function xuanxiang(){
	var title=$("li",$(".title")[0]);
	var titl=$("img",$(".title")[0]);
	var con=$(".con");
	for(var i=0;i<title.length;i++){
		title[i].bb=i;
		title[i].onmouseover=function(){		
			for(j=0;j<con.length;j++){
				con[j].style.display="none";
				titl[j].style.display="none";
				title[j].className="";
			}
			con[this.bb].style.display="block";
			titl[this.bb].style.display="block";
			this.className="acti2";
		}
	}
}
xuanxiang();
//xuanxiang
//xuanxiang2
function xuanxiang2(){
	var title1=$("li",$(".xbox-right-21")[0]);
	var tit=$("img",$(".xbox-right-21")[0]);
	var con1=$(".xbox-right-22");
	for(var i=0;i<title1.length;i++){
		title1[i].aa=i;
		title1[i].onmouseover=function(){		
			for(j=0;j<con1.length;j++){
				con1[j].style.display="none";
				tit[j].style.display="none";
				title1[j].className="";
			}
			con1[this.aa].style.display="block";
			tit[this.aa].style.display="block";
			this.className="ac";
		}
	}
}
xuanxiang2();
//top start
// bian start
function con1(){
 var con1=$(".con1");
	var t=$(".line-top");
	var t1=$(".line-left");
	var t2=$(".line-bottom");
	var t3=$(".line-rigth");
	for(var i=0;i<con1.length;i++){
		con1[i].aa=i;
		hover(con1[i],function(){
			animate(t[this.aa],{width:con1[this.aa].offsetWidth},500);
			animate(t2[this.aa],{width:con1[this.aa].offsetWidth},500);
			animate(t1[this.aa],{height:con1[this.aa].offsetHeight},500);
			animate(t3[this.aa],{height:con1[this.aa].offsetHeight},500);
		},function(){
			animate(t[this.aa],{width:0},500);
			animate(t2[this.aa],{width:0},500);
			animate(t1[this.aa],{height:0},500);
			animate(t3[this.aa],{height:0},500);
		})
	}
}
con1();
// bian end
// aaaaa
function con2(){
    var con1=$(".xbox-right-22-1");
	var t=$(".line-top1");
	var t1=$(".line-left1");
	var t2=$(".line-bottom1");
	var t3=$(".line-rigth1");
	for(var i=0;i<con1.length;i++){
		con1[i].aa=i;
		hover(con1[i],function(){
			animate(t[this.aa],{width:con1[this.aa].offsetWidth},500);
			animate(t2[this.aa],{width:con1[this.aa].offsetWidth},500);
			animate(t1[this.aa],{height:con1[this.aa].offsetHeight},500);
			animate(t3[this.aa],{height:con1[this.aa].offsetHeight},500);
		},function(){
			animate(t[this.aa],{width:0},500);
			animate(t2[this.aa],{width:0},500);
			animate(t1[this.aa],{height:0},500);
			animate(t3[this.aa],{height:0},500);
		})
	}
}
con2();
// aaaaa
// 选项卡遮罩
function zhezhao(){
	var img=$("img",$(".xbox-right-22")[0]);
	for (var i = 0; i < img.length; i++) {
		img[i].aa=i;
		img[i].onmouseover=function(){
			animate(img[this.aa],{opacity:0.7});
		}
		img[i].onmouseout=function(){
			animate(img[this.aa],{opacity:1});
		}
	}
}
zhezhao();
//dibushang
function dibushang(){
	var dibu=$(".dibushang-1");
	for (var i = 0; i < dibu.length; i++) {
		dibu[i].aa=i;
		dibu[i].onmouseover=function(){
			animate(dibu[this.aa],{opacity:0.7},300);
		}
		dibu[i].onmouseout=function(){
			animate(dibu[this.aa],{opacity:1},300);
		}
	}
}
dibushang();
//biankuang
function con3(){
 var floor=$(".floor-rigth-1");
	var t4=$(".line-top2");
	var t5=$(".line-left2");
	var t6=$(".line-bottom2");
	var t7=$(".line-rigth2");
	for(var i=0;i<floor.length;i++){
		floor[i].aa=i;
		hover(floor[i],function(){
			animate(t4[this.aa],{width:floor[this.aa].offsetWidth},500);
			animate(t6[this.aa],{width:floor[this.aa].offsetWidth},500);
			animate(t5[this.aa],{height:floor[this.aa].offsetHeight},500);
			animate(t7[this.aa],{height:floor[this.aa].offsetHeight},500);
		},function(){
			animate(t4[this.aa],{width:0},500);
			animate(t6[this.aa],{width:0},500);
			animate(t5[this.aa],{height:0},500);
			animate(t7[this.aa],{height:0},500);
		})
	}
}
con3();
//kouceng
function loucengbox(){
	var floormiddle=$(".floor-middle");
	for (var i = 0; i < floormiddle.length; i++) {
		louceng1(i);
	}
	function louceng1(i){
		var btn=$(".btn1",floormiddle[i]);
		var imgbox=$(".imgsbox",floormiddle[i])[0];
		var imgboxw=imgbox.offsetWidth;
		var imgs=$("img",imgbox);
		var aul=$(".aul1",floormiddle[i])[0];
		var aur=$(".aur1",floormiddle[i])[0];
		var now=0;
		var next=1;
		imgs[1].style.left=imgboxw+"px";
		floormiddle[i].onmouseover=function(){
			animate(aul,{opacity:1});
			animate(aur,{opacity:1});
		}
		floormiddle[i].onmouseout=function(){
			animate(aul,{opacity:0});
			animate(aur,{opacity:0});
		}
		aul.onclick=btn[0].onmouseover=function(){
			if(now==1){
				imgs[next].style.left=-imgboxw;
				imgs[now].style.left="0px";
				animate(imgs[now],{left:imgboxw},300);
				animate(imgs[next],{left:0},300);
				btn[now].className="btn1";
			    btn[next].className="btn1 active1";
				now=0;
				next=1;
			}	
		}
		aur.onclick=btn[1].onmouseover=function(){
		    if(now==0){
		    	imgs[next].style.left=imgboxw;
				imgs[now].style.left="0px";
				animate(imgs[now],{left:-imgboxw},300);
				animate(imgs[next],{left:0},300);
				btn[now].className="btn1";
			    btn[next].className="btn1 active1";
				now=1;
				next=0;
		    }
		}
	}
}
loucengbox();
//固定
function tr(){
   var rld=$(".guding")[0];
   var rflag=true;
   var rflag2=true;
   var floor1=$(".floor");
   var d=$("li",rld);
   d[0].style.opacity=1;
   var now=0;
   document.documentElement.scrollTop=1;
   window.onscroll=function(){
   var tops=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
        if (tops>=1000){
            if (rflag){
              	animate(rld,{opacity:1});
               	rflag=false;
               	rflag2=true;
            }      
        }else{
            if(rflag2){
	            animate(rld,{opacity:0});
	            rflag=true;
	            rflag2=false;
           }
        }
        for(var i=0;i<floor1.length;i++){
           if(tops>=floor1[i].offsetTop-400){	
              for(var j=0;j<d.length;j++){
                 d[j].style.opacity=0;
              }
              now=i;
              d[i].style.opacity=1;
           }
        } 
        //图片的按需加载
       for (var i = 0; i < floor1.length; i++) {
	 		if(floor1[i].offsetTop<=tops+document.documentElement.clientHeight){
		 		var imgs=$("img",floor1[i]); //集合
		 		for (var j = 0; j < imgs.length; j++){
		 			imgs[j].src=imgs[j].getAttribute("src-data"); 
		 		};
			}
		};     
    } 
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      for (var i = 0; i < d.length; i++) {
      d[i].aa=i;
      d[i].onmouseover=function(){
         for(var j=0;j<d.length;j++){
            if (now!=j) {
               d[j].style.opacity=0;
            }
         }
         this.style.opacity=1;
      }
      d[i].onmouseout=function(){ 
         if (this.aa!=now) {
               this.style.opacity=0;
            }
        }
       d[i].onclick=function(){
       		// obj.scrollTop=floor1[this.aa].offsetTop;
         	animate(obj,{scrollTop:floor1[this.aa].offsetTop-50},300);
      }
      	d[d.length-1].onclick=function(){
      		animate(obj,{scrollTop:1},300);
      	}
   	}  
}
tr();
function clnzLunbologo(){
	var bigbox=$(".floor-lef-2");
	for(var i=0;i<bigbox.length;i++){
		lunbo(i)
	}
	function lunbo(i){
		var logobox=$(".floor-lef-3",bigbox[i]);
		var lbtn=$(".floor-leflbtn",bigbox[i])[0];
		var rbtn=$(".floor-lefrbtn",bigbox[i])[0];
		var now=0;
		var next=0;
		var ow=bigbox[0].offsetWidth;
		for(var j=1;j<logobox.length;j++){
			logobox[j].style.left=ow+"px";
		}
		function huantu(type){
			var type=type||"right";
			if(type=="right"){
				next++;
				if(next>=logobox.length){
					next=0;
				}
				logobox[now].style.left=7;
				logobox[next].style.left=ow+"px";
				animate(logobox[now],{left:-ow},300)
				animate(logobox[next],{left:7},300);
			}else if(type=="left"){
				next--;
				if(next<=-1){
					next=logobox.length-1;
				}
				logobox[now].style.left=7;
				logobox[next].style.left=-ow+"px";
				animate(logobox[now],{left:ow},300)
				animate(logobox[next],{left:7},300);
			}
			now=next;
		}
		lbtn.onclick=function(){
			huantu("left");
		}
		rbtn.onclick=function(){
			huantu("right");
		}
	}
}
clnzLunbologo();
function gouwu(){
	var se=$(".search-right2")[0];
	var ce=$(".search-right2-1")[0];
	se.onmouseover=function(){
		ce.style.display="block";
	}
	se.onmouseout=function(){
		ce.style.display="none";
	}
}
gouwu();
function topnavlist(){
	var shouye=$("s",$(".shouye")[0])[0];
	var weixin=$(".weixin")[0];
	var shouji=$(".shouji")[0];
	var weixina=$(".weixinact")[0];
	var shoujia=$(".shoujiact")[0];
	shouye.onmouseover=function(){
		shouye.className="shouyeact";
	}
	shouye.onmouseout=function(){
		shouye.className="yintaisy";
	}
	weixin.onmouseover=function(){
		weixina.style.display="block";
	}
	weixina.onmouseover=function(){
		weixina.style.display="block"
	}
	weixina.onmouseout=function(){
		weixina.style.display="none";
	}
	shouji.onmouseover=function(){
		shoujia.style.display="block";
	}
	shoujia.onmouseover=function(){
		shoujia.style.display="block"
	}
	shoujia.onmouseout=function(){
		shoujia.style.display="none";
	}
	//我的银泰下拉列表
	var wodeyt=$(".wodeyt")[0];//我的银泰当行标题
	var wodeyta=$(".wodeytact")[0];//我的银泰鼠标移入下拉列表盒子
	hover(wodeyt,function(){
		wodeyta.style.display="block";
		wodeyta.style.height=35*7+"px";
	},function(){
		wodeyta.style.display="none";
	})
}
topnavlist();

})