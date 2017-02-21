$(function(){
function denglv(){
    var topnav1=$(".topnav1")[0];
    var topnav2=$(".topnav2")[0];
    var nav3=$(".nav3")[0];
    var nav4=$(".nav4")[0];
    topnav1.onmouseover=function(){
        nav4.style.display="block";
        topnav2.style.display="block";
        nav3.style.display="block";
    }
    topnav1.onmouseout=function(){
        nav4.style.display="none";
    }
}
denglv();
function shouji(){
    var nav112=$(".nav112")[0];
    var nav5=$(".nav5")[0];
    var nav51=$(".nav51")[0];
    var nav52=$(".nav52")[0];
    nav112.onmouseover=function(){
        nav5.style.display="block";
        nav51.style.display="block";
        nav52.style.display="block";
    }
    nav112.onmouseout=function(){
        nav5.style.display="none";
    }
}
shouji();
//banner start
function banner(){
    var imgs=$("a",$(".imgbox")[0]);
    var btn=$(".btn");
    var aul=$(".leftbtn")[0];
    var aur=$(".rightbtn")[0];
    var banner=$(".banner")[0];
    var now=0;
    var next=0;
    for(var i=1;i<imgs.length;i++){
        imgs[i].style.left="740px";
    }
    function aa(type){
        type=type||"right";
        if(type=="right"){
           next=now+1;
          if(next>=imgs.length){
             next=0;
           }
            imgs[next].style.left="740px";
            animate(imgs[now],{left:-740},300);
            animate(imgs[next],{left:0},300,function(){
               flag=true;});
        }else if(type=="left"){
            next=now-1;
           if(next<=-1){
              next=imgs.length-1;
            }
            imgs[next].style.left="-740px";
            animate(imgs[next],{left:0},300);
            animate(imgs[now],{left:740},300,function(){
               flag=true;});
        }
        btn[now].className="btn";
        btn[next].className="btn active";
        now=next;
    }
    var t=setInterval(aa,2000);
    banner.onmouseover=function(){
        clearInterval(t);
        animate(aul,{opacity:1});
        animate(aur,{opacity:1});
    }
    banner.onmouseout=function(){
        t=setInterval(aa,2000);
        animate(aul,{opacity:0});
        animate(aur,{opacity:0});
    }
    aul.onclick=function(){
        if(flag){
            flag=false;
            aa("left");
        } 
    }
    aur.onclick=function(){
        if(flag){
            flag=false;
            aa("right");
        }
    }
    for(var j=0;j<btn.length;j++){
        btn[j].aa=j;
        btn[j].onmouseover=function(){
            if(this.aa>now){
            imgs[this.aa].style.left="740px";
            animate(imgs[now],{left:-740},300);
            animate(imgs[this.aa],{left:0},300,function(){
                flag=true;});
            }else if(this.aa<now){
            imgs[this.aa].style.left="-740px";
            animate(imgs[this.aa],{left:0},300);
            animate(imgs[now],{left:740},300,function(){
                flag=true;});
            }
        btn[now].className="btn";
        btn[this.aa].className="btn active";
        now=this.aa;       
        }
    }
}
banner();
function caidan(){
    var biaoti=$(".biaoti2",$("biaotibig")[0]);
    var btnbox1=$(".btnbox1");
    var btn1=$(".btn1");
    for(i=0;i<biaoti.length;i++){
        biaoti[i].aa=i;
        biaoti[i].onmouseover=function(){
            for(j=0;j<btnbox1.length;j++){
                btnbox1[j].style.display="none";
            }
            btnbox1[this.aa].style.display="block";
        }
        biaoti[i].onmouseout=function(){
            for (var k = 0; k < btnbox1.length; k++){
                btnbox1[k].cc=k;
                btnbox1[k].onmouseover=function(){
                    btnbox1[this.cc].style.display="block";
                
                btnbox1[this.cc].onmouseout=function(){
                    btnbox1[this.cc].style.display="none";
                }
                }
            }
            btnbox1[this.aa].style.display="none";
        }
    }
}
caidan();
function pao(){
    var shangbox=$(".shangbox")[0];
    var shang=$(".shang")[0];
    var shang1=$(".shang1");
    var left=$(".lefts")[0];
    var right=$(".rigths")[0];
    var t9=setInterval(move,1200);
    var flag=true;
    var width=parseInt(getStyle(shang1[0],"width"));
    function move(){
            animate(shang,{left:-width},500,function(){
            var first=getFirst(shang);
            shang.appendChild(first);
            shang.style.left=0;
            flag=true;
        })
    }
    shangbox.onmouseover=function(){
        clearInterval(t9);
    }
    shangbox.onmouseout=function(){
        t9=setInterval(move,1200);
    }
    right.onclick=function(){
        if(flag){
            flag=false;
            move();
        }   
    }
    left.onclick=function(){
        if(flag){
            flag=false;
        var last=getLast(shang);
        var first=getFirst(shang);
        insertBefore(last,first);
        shang.style.left=-width+"px";
        animate(shang,{left:0},500);
        flag=true;
        }
    }
}
pao();
function zuoyi(a){
    var zuoyi=$("img",$(".h4g-buttomboth-2")[a]);
    for (var i = 0; i < zuoyi.length; i++){
        zuoyi[i].aa=i;
        zuoyi[i].onmouseover=function(){
            animate(zuoyi[this.aa],{right:6},300);
        }
    }
        for (var i = 0; i < zuoyi.length; i++) {
        zuoyi[i].onmouseout=function(){
            animate(zuoyi[this.aa],{right:1},300);
        }
    }
}
for (var i = 0; i <6;i++) {
       zuoyi(i);
}
function zuoyi1(b){
    var zuoyi1=$("img",$(".phone-buttom-12")[b]);
    for (var i = 0; i < zuoyi1.length; i++) {
        zuoyi1[i].aa=i;
        zuoyi1[i].onmouseover=function(){
            animate(zuoyi1[this.aa],{right:6},300);
        }
    }
        for (var i = 0; i < zuoyi1.length; i++){
        zuoyi1[i].onmouseout=function(){
            animate(zuoyi1[this.aa],{right:1},300);
        }
    }
}
for (var j = 0; j <4;j++) {
       zuoyi1(j);
}
function zuoyi2(b){
    var zuoyi2=$("img",$(".yewu-buttomboth-2")[b]);
    for (var i = 0; i < zuoyi2.length; i++){
        zuoyi2[i].aa=i;
        zuoyi2[i].onmouseover=function(){
            animate(zuoyi2[this.aa],{right:6},300);
        }
    }
        for (var i = 0; i < zuoyi2.length; i++) {
        zuoyi2[i].onmouseout=function(){
            animate(zuoyi2[this.aa],{right:1},300);
        }
    }
}
   for (var k = 0; k <6;k++) {
       zuoyi2(k);
   }
function zuoyi3(b){
    var zuoyi3=$("img",$(".banner-right1")[b]);
    for (var i = 0; i < zuoyi3.length; i++){
        zuoyi3[i].aa=i;
        zuoyi3[i].onmouseover=function(){
            animate(zuoyi3[this.aa],{width:52,height:44},300);
        }
    }
    for (var i = 0; i < zuoyi3.length; i++) {
        zuoyi3[i].onmouseout=function(){
        animate(zuoyi3[this.aa],{width:50,height:42},300);
        }
    }
}
for (var g = 0; g <6;g++) {
   zuoyi3(g);
}
function guding(){
    var fox1=$(".fox1")[0];
    fox1.onmouseover=function(){
        animate(fox1,{right:59},300);
    }
    fox1.onmouseout=function(){
        animate(fox1,{right:0},300);
    }
}
guding();
function guding1(){
    var fox2=$(".fox2")[0];
    fox2.onmouseover=function(){
        animate(fox2,{right:59},300);
    }
    fox2.onmouseout=function(){
        animate(fox2,{right:0},300);
    }
}
guding1();
function guding3(){
    var fox3=$(".fox3")[0];
    fox3.onmouseover=function(){
        animate(fox3,{right:59},300);
    }
    fox3.onmouseout=function(){
        animate(fox3,{right:0},300);
    }
}
guding3();
var zileft=$(".indexgg-jiantou-left")[0];
    var ziright=$(".indexgg-jiantou-right")[0];
    var aa=$(".aa");
    var now=0;
    var next=0;
    var ziflag=true;
    zileft.onclick=function(){
        if(ziflag){
            ziflag=false;
            next++;
            now=next-1;
            if(next>aa.length-1){
                next=0;
                now=aa.length-1;
            }
            aa[now].style.opacity=0;
            aa[next].style.opacity=1;
            ziflag=true;
        }

    }
    ziright.onclick=function(){
        if(ziflag){
            ziflag=false;
            next--;
            now=next+1;
            if(next<0){
                now=0;
                next=aa.length-1;
            }
            aa[now].style.opacity=0;
            aa[next].style.opacity=1;
            ziflag=true;
        }
    }
    var city=$(".logo-xialakuang")[0];
    var cityla=$(".city")[0];
    city.onclick=function(){
        cityla.style.display="block";
    }
    document.body.onclick=function(e){
        var eve=e||window.event;
        var obj=eve.srcElement||eve.target;
        if(obj.className=="logo-xialakuang"){
            cityla.style.display="block";
        }else{
            cityla.style.display="none";
        }
    }
})
//banner end