$(function(){
  function guanggao(){
  	var guanggao=$(".zyx_guanggao")[0];
    var guang=$(".zyx_guang")[0];
    var close=$(".close")[0];
    close.onclick=function(){
	    guang.style.display="none";
	   close.style.display="none";
    }
  }
  guanggao();
  function guomeihuiyuan(){
  var bigbox=$(".zyx_headerl3")[0];
  var imgbox=$(".he")[0];
  var imgL=$("li",imgbox);
  var left=$(".left")[0];
  var right=$(".right")[0];
  var n=0;
    right.onclick=function(){
      n++;
      if(n<3){
        animate(imgbox,{marginLeft:-290*n});
      }
    }
    left.onclick=function(){
    n--;
if(n<0){n=0;
  return;
}
       animate(imgbox,{marginLeft:-290*n});
    }

  }
guomeihuiyuan();



})