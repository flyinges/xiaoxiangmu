$(document).ready(function(){
		//上导航
    $(".zyx_spfltop").clone(true).prependTo(".zyx_tdh").css({position:"absolute",left:"0px",top:"5px"});
    $(".zyx_searchTop").clone(true).prependTo(".zyx_tdh").css({position:"absolute",left:"385px",top:"8px"});
    $(".zyx_tdh>.zyx_spfltop>.zyx_spfllist").css({display:"none"});
    $(".zyx_tdh>.zyx_spfltop").hover(function(){
    	$(".zyx_tdh>.zyx_spfltop>.zyx_spfllist").css({display:"block"});
    },function(){
        $(".zyx_tdh>.zyx_spfltop>.zyx_spfllist").css({display:"none"});
    })
// 广告关闭
	$(".close").click(function(){
		$(".close").hide();
		$(".zyx_guang").hide();
	})
	//国美会员
	function guomei(){
		var n=0;
	    $(".right").click(function(){
	    	
	      	n++;
	      	if(n<3){
	        	$(".he").animate({marginLeft:-290*n},500);
	      	}
	    })

	    $(".left").click(function(){
	    	n--;
			if(n<0){
				n=0;
	  			return;
			}
	       $(".he").animate({marginLeft:-290*n},500);
	    })
	}
	guomei();
//nav
    function bannertop(){
	    var now=0;
	    var next=0;
	    function move(type){
	       var type=type||"r";
	       if(type=="t"){
	       	  next--;
	          if(next<0){
	             next=$(".zyx_toplunbo li").size()-1;
	          }
	          $(".zyx_toplunbo li").eq(next).css("top",-40);
	          $(".zyx_toplunbo li").eq(now).animate({top:40}).end().eq(next).animate({top:0});
	       }else if(type=="r"){
	          next++;
	          if(next>=$(".zyx_toplunbo li").size()){
	            next=0;
	          }
	          $(".zyx_toplunbo li").eq(next).css("top",40);
	          $(".zyx_toplunbo li").eq(now).animate({top:-40}).end().eq(next).animate({top:0});
	       }
	       now=next;
	    }
	    var t=setInterval(move,4000);
	    $(".zyx_toptbtn").click(function(){
	    	move("t");
	    })
	    $(".zyx_topbbtn").click(function(){
	    	move("r");
	    })
    }
    bannertop();
    //banner商品分类
    $(".zyx_spfllist li").each(function(index,val){
        $(this).hover(function(){
        	$(".zyx_listshowleft").eq(index).show();
        	$(".zyx_listshowright").eq(index).show();
        },function(){
            $(".zyx_listshowleft").eq(index).hide();
            $(".zyx_listshowright").eq(index).hide();
        });
    })
    function banner(){
	    var now=0;
	    var next=0;
	    var flag=true;
	    var bannerbg=["#e0e0e0","#b9150c","#f23031","#870011","#fdd691","#920aea","#ca091a","#e61413"];
	    function move(type){
	       var type=type||"rr";
	       if(type=="ll"){
	       	  next--;
	          if(next<0){
	             next=$(".zyx_bannerimg a").size()-1;
	          }
	       }else if(type=="rr"){
	          next++;
	          if(next>=$(".zyx_bannerimg a").size()){
	             next=0;
	          }
	       }
	       $(".zyx_bannerimg a").eq(now).fadeOut(500).end().eq(next).fadeTo(500,1,function(){flag=true});
	       $(".zyx_btn li").eq(now).removeClass().end().eq(next).addClass("zyx_first");
	       $(".zyx_bannerbigbox").css({background:bannerbg[next]});
	       now=next;
	    }
	    var t=setInterval(move,2000);
	    $(".zyx_bannerimg").hover(function(){
	    	clearInterval(t);
	    },function(){
	        t=setInterval(move,2000);
	    })
	    $(".zyx_leftbtn").click(function(){
	    	if(flag){
	    		flag=false;
	    	    move("ll");
	    	}
	    })
	    $(".zyx_rightbtn").click(function(){
	    	if(flag){
	    		flag=false;
	    	    move("rr");
	    	}
	    })
	    //小按钮
	    $(".zyx_btn li").hover(function(){
		        next=$(this).index();
		        if(next!=now){
			    	$(".zyx_bannerimg a").eq(now).fadeOut(500).end().eq(next).fadeTo(500,1);
			        $(".zyx_btn li").eq(now).removeClass().end().eq(next).addClass("zyx_first");
			        $(".zyx_bannerbigbox").css({background:bannerbg[next]});
		        }else{
		        	return
		        }
		        now=next; 

	    })
	}
	banner();
	//全部遮罩
    var t1;
    $(".zyx_zhezhao").each(function(index,val){
    	$(".zyx_zhezhao").eq(index).mouseover(function(){
    		 clearTimeout(t1);
    		 t1=setTimeout(function(){
    		 	$(".zyx_zhezhao").eq(index).fadeTo(400,1).delay(300).fadeTo(300,0);
    		 },200);    
    	})
    })
    //猜你喜欢
    $(".fades").each(function(index,dom){
	    var num1=0;
	    var num2=0;
	    var flag=true;
	    function opac(type){
	        if(type=="zuo"){
	       	  num2--;
	          if(num2<0){
	             num2=$(dom).find(".opacs").size()-1;
	          }
	        }else if(type=="you"){
	          num2++;
	          if(num2>=$(dom).find(".opacs").size()){
	             num2=0;
	          }
	        }
	        $(dom).find(".opacs").eq(num1).fadeOut(500).end().eq(num2).fadeTo(500,1,function(){flag=true});
	        num1=num2;
	    }
	    $(dom).find(".l_anniu s").click(function(){ 
	    	if(flag){
	           flag=false;
	           opac("you");
	    	}
	    })
	    $(dom).find(".r_anniu s").click(function(){ 
	    	if(flag){
	           flag=false;
	           opac("zuo");
	    	}
	    })
    })
    //右侧导航外部
    $(".zyx_show").each(function(index,val){
    	$(".zyx_show").eq(index).hover(function(){
            $(".zyx_show s").eq(index).show();
            $(".zyx_shows").eq(index).css({borderLeft:"1px solid #e6e6e6"});
            $(".zyx_shows").eq(index).animate({width:80,left:-81},150);
        },function(){
            $(".zyx_show s").eq(index).hide();
            $(".zyx_shows").eq(index).animate({width:0,left:0},150);
            $(".zyx_shows").eq(index).css({borderLeft:""});
        })
    })
    $(".zyx_appma").hover(function(){
    	$(".zyx_appmaimg").animate({width:140,left:-140},100);
    })
    $(".apphide").hover(function(){
    	$(".zyx_appmaimg").animate({width:0,left:0},100);
    })
    //点击回到顶部
	$(".ftb,#ftb,#zuoce_dh_tbtn,#zuoce_dh_bbtn").click(function(e){
	  	   if(e.target.className=="ftb"||e.target.id=="ftb"||e.target.id=="zuoce_dh_tbtn"||$(e.target).parent().parent().get(0).id=="zuoce_dh_tbtn"){
	  	   	   $("html,body").animate({scrollTop:0});
	  	   }else{
               $("html,body").animate({scrollTop:8500});
	  	   }
	})
	// 楼层选项卡开始和小banner
	function floor(){
		// 楼层1
		$(".zyx_lc").each(function(lcnum){
	        function lc(lcnum){
	            // 中部轮播
	            var t=setInterval(move,5000);
	            var num=0;
	            function move(type){
	                type=type||"right";
	                if(type=="left"){
	                    num--;
	                    if(num<0){
	                        num=2;
	                    };
	                    $(".zyx_lc_bottom_right_big_picbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
	                     $(".zyx_lc_bottom_right_big_btnbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
	                }else if(type=="right"){
	                    num++;
	                    if(num>=3){
	                        num=0;
	                    };
	                     $(".zyx_lc_bottom_right_big_picbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
	                     $(".zyx_lc_bottom_right_big_btnbox").eq(lcnum).children().removeClass().eq(num).addClass("first");
	                }
	            }
	            // 中部选项卡
	            $(".zyx_lc_bottom_right_big_btnbox").eq(lcnum).children().mouseover(function(){
	                $(".zyx_lc_bottom_right_big_btnbox").eq(lcnum).children().removeClass().eq($(this).eq(lcnum).index()).addClass("first");
	                $(".zyx_lc_bottom_right_big_btnbox").eq(lcnum).children().removeClass().eq($(this).eq(lcnum).index()).addClass("first");
	                num=$(this).eq(lcnum).index();
	            })
	            // 左右按钮
	            $(".zyx_lc_bottom_right_big_left").eq(lcnum).click(function(){
	                move("left");
	            })
	            $(".zyx_lc_bottom_right_big_right").eq(lcnum).click(function(){
	                move("right");
	            })
	            // 移入移出
	            $(".zyx_lc_bottom_right_big").eq(lcnum).hover(function(){
	                    clearInterval(t)
	                    $(".zyx_lc_bottom_right_big_right").eq(lcnum).css({"display":"block"})
	                    $(".zyx_lc_bottom_right_big_left").eq(lcnum).css({"display":"block"})
	                },
	                function(){
	                    $(".zyx_lc_bottom_right_big_right").eq(lcnum).css({"display":"none"})
	                    $(".zyx_lc_bottom_right_big_left").eq(lcnum).css({"display":"none"});
	                    t=setInterval(move,5000);
	                }
	            )
	            // 整体选项卡
	            var nub=0;
	            $(".zyx_lc_top ul").eq(lcnum).children().hover(function(){
	                $(".zyx_lc_top ul").eq(lcnum).children().removeClass("first").eq($(this).index()).addClass("first");
	                $(".zyx_lc_bottom").eq(lcnum).children(".zyx_lc_bottom_right").removeClass("first").eq($(this).index()).addClass("first");
	                nub=$(this).index();
	            })
	            // 整体右侧按钮
	            $(".zyx_lc_bottom").eq(lcnum).children(".zyx_lc_bottom_right").children(".zyx_lc_bottom_right_xiaokuai").click(function(){
	                nub++;
	                if(nub>=7){
	                    nub=0;
	                };
	                $(".zyx_lc_top ul").eq(lcnum).children().removeClass("first").eq(nub).addClass("first");
	                $(".zyx_lc_bottom").eq(lcnum).children(".zyx_lc_bottom_right").removeClass("first").eq(nub).addClass("first");
	            })
	            // 整体右侧移入移出
	            $(".zyx_lc_bottom").eq(lcnum).children(".zyx_lc_bottom_right").hover(function(){
	                    $(".zyx_lc_bottom").eq(lcnum).children(".zyx_lc_bottom_right").children(".zyx_lc_bottom_right_xiaokuai").css({"display":"block"})
	                },
	                function(){
	                   $(".zyx_lc_bottom").eq(lcnum).children(".zyx_lc_bottom_right").children(".zyx_lc_bottom_right_xiaokuai").css({"display":"none"})
	                }
	            )
	        }
       		 lc(lcnum)
    	})
    	$(".zyx_floor2").each(function(lc2num){
        	function lc2(lc2num){
            // 中部轮播
            var t=setInterval(move,5000);
            var num=0;
            function move(type){
                type=type||"right";
                if(type=="left"){
                    num--;
                    if(num<0){
                        num=2;
                    };
                    $(".zyx_floor2_bottom_right_big_picbox").eq(lc2num).children().removeClass().eq(num).addClass("first");
                     $(".zyx_floor2_bottom_right_big_btnbox").eq(lc2num).children().removeClass().eq(num).addClass("first");
                }else if(type=="right"){
                    num++;
                    if(num>=3){
                        num=0;
                    };
                     $(".zyx_floor2_bottom_right_big_picbox").eq(lc2num).children().removeClass().eq(num).addClass("first");
                     $(".zyx_floor2_bottom_right_big_btnbox").eq(lc2num).children().removeClass().eq(num).addClass("first");
                }
            }
            // 中部选项卡
            $(".zyx_floor2_bottom_right_big_btnbox").eq(lc2num).children().mouseover(function(){
                $(".zyx_floor2_bottom_right_big_btnbox").eq(lc2num).children().removeClass().eq($(this).eq(lc2num).index()).addClass("first");
                $(".zyx_floor2_bottom_right_big_btnbox").eq(lc2num).children().removeClass().eq($(this).eq(lc2num).index()).addClass("first");
                num=$(this).eq(lc2num).index();
            })
            // 左右按钮
            $(".zyx_floor2_bottom_right_big_left").eq(lc2num).click(function(){
                move("left");
            })
            $(".zyx_floor2_bottom_right_big_right").eq(lc2num).click(function(){
                move("right");
            })
            // 移入移出
            $(".zyx_floor2_bottom_right_big").eq(lc2num).hover(function(){
                    clearInterval(t)
                    $(".zyx_floor2_bottom_right_big_right").eq(lc2num).css({"display":"block"})
                    $(".zyx_floor2_bottom_right_big_left").eq(lc2num).css({"display":"block"})
                },
                function(){
                    $(".zyx_floor2_bottom_right_big_right").eq(lc2num).css({"display":"none"})
                    $(".zyx_floor2_bottom_right_big_left").eq(lc2num).css({"display":"none"});
                    t=setInterval(move,5000);
                }
            )
            // 整体选项卡
            var nub=0;
            $(".zyx_floor2_top ul").eq(lc2num).children().hover(function(){
                $(".zyx_floor2_top ul").eq(lc2num).children().removeClass("first").eq($(this).index()).addClass("first");
                $(".zyx_floor2_bottom").eq(lc2num).children(".zyx_floor2_bottom_right").removeClass("first").eq($(this).index()).addClass("first");
                nub=$(this).index();
            })
            // 整体右侧按钮
            $(".zyx_floor2_bottom").eq(lc2num).children(".zyx_floor2_bottom_right").children(".zyx_floor2_bottom_right_xiaokuai").click(function(){
                nub++;
                if(nub>=7){
                    nub=0;
                };
                $(".zyx_floor2_top ul").eq(lc2num).children().removeClass("first").eq(nub).addClass("first");
                $(".zyx_floor2_bottom").eq(lc2num).children(".zyx_floor2_bottom_right").removeClass("first").eq(nub).addClass("first");
            })
            // 整体右侧移入移出
            $(".zyx_floor2_bottom").eq(lc2num).children(".zyx_floor2_bottom_right").hover(function(){
                    $(".zyx_floor2_bottom").eq(lc2num).children(".zyx_floor2_bottom_right").children(".zyx_floor2_bottom_right_xiaokuai").css({"display":"block"})
                },
                function(){
                   $(".zyx_floor2_bottom").eq(lc2num).children(".zyx_floor2_bottom_right").children(".zyx_floor2_bottom_right_xiaokuai").css({"display":"none"})
                }
	            )
	        }
	        lc2(lc2num)
    	})
	}
    floor()
    // 楼层选项卡结束
 	// 楼层跳转开始
 	function tiao(){
 		var flag=true;
 		var ch=$(window).height();  
		var floortop=$(".zyx_floor").offset().top;
		$(window).scroll(function(){
			var tops=$(window).scrollTop();
			if(tops>1200){
				$(".zyx_floornav").css({display:"block"});
			}else{
				$(".zyx_floornav").css({display:"none"});
			}
			if(tops>500){
				$(".zyx_top_dh").css({display:"block"});
			}else{
				$(".zyx_top_dh").css({display:"none"});
			}
			if(flag){
				$(".zyx_floor").each(function(index){
					var floorHeight=$(".zyx_floor").eq(index).offset().top;
					if(tops>floorHeight-ch/2+130){
						$(".zyx_floornav span").css({color:""}).eq(index).css({color:"#e7101e"});
						$(".zyx_floornav p").css({color:""}).eq(index).css({color:"#e7101e"});
		                $(".zyx_floornav b").css({opacity:0}).eq(index).css({opacity:1});
		            }					
				})
			}
		})
		if(flag){
			$(".zyx_floornav li").each(function(index){
				$(this).click(function(){
	            	flag=false;
	           	  	$(".zyx_floornav span").css({color:""}).eq(index).css({color:"#e7101e"});
				  	$(".zyx_floornav p").css({color:""}).eq(index).css({color:"#e7101e"});
		            $(".zyx_floornav b").css({opacity:0}).eq(index).css({opacity:1});
	           	  	$("html,body").animate({scrollTop:$(".zyx_floor").eq(index).offset().top},500,function(){flag=true});
	           })
			})
		}
		$(".zyx_floornav_top").click(function(){
			$("html,body").animate({scrollTop:0})
		})
		$(".zyx_floornav_bottom").click(function(){
			$("html,body").animate({scrollTop:7527})
		})
 	}
 	tiao()

 	// 楼层跳转结束

})











