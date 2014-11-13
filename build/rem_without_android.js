// https://github.com/jieyou/rem_layout
!function(a,b,c){function n(){var d=Math.min(e.innerWidth/(a/b),c);d!=m&&(i.innerHTML="html{font-size:"+d+"px!important;"+l+"}",m=d)}var j,d=document,e=window,f=setTimeout,g="addEventListener",h=d.head||d.getElementsByTagName("HEAD")[0],i=d.createElement("STYLE"),k="text-size-adjust:100%;",l="-webkit-"+k+"-moz-"+k+"-ms-"+k+"-o-"+k+k,m=null;a=a||320,b=b||16,c=c||32,h.appendChild(i),n(),d[g]("DOMContentLoaded",n,!1),e[g]("load",n,!1),e[g]("resize",function(){clearTimeout(j),j=f(n,500)},!1)}(
	320, // 设置设计稿基准宽度
	16, // 设置默认根元素font-size 最好设置为16，因为浏览器默认的值就是16，这样代码失效或尚未起效时，不会有布局问题
	32 // 设置最大根元素font-size 它的作用是，当用户用非常宽的屏幕（pad、pc）访问页面时，不至于使得根元素的font-size超过这个值
);