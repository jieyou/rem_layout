// https://github.com/jieyou/rem_layout
!function(a,b,c){function q(){var d=Math.min((n?(e.orientation%180?Math.max(e.screen.width,e.screen.height):e.screen.width)/(o?1:devicePixelRatio):e.innerWidth)/(a/b),c);d!=p&&(i.innerHTML="html{font-size:"+d+"px!important;"+l+"}",p=d)}function s(){q(),r++,5>r&&f(s,400)}var j,d=document,e=window,f=setTimeout,g="addEventListener",h=d.head||d.getElementsByTagName("HEAD")[0],i=d.createElement("STYLE"),k="text-size-adjust:100%;",l="-webkit-"+k+"-moz-"+k+"-ms-"+k+"-o-"+k+k,m=navigator.userAgent,n=/android/i.test(m),o=/chrome/i.test(m),p=null,r=0;a=a||320,b=b||16,c=c||32,h.appendChild(i),n?s():q(),d[g]("DOMContentLoaded",q,!1),e[g]("load",q,!1),e[g]("resize",function(){clearTimeout(j),j=f(q,500)},!1)}(
	320, // 设置设计稿基准宽度
	16, // 设置默认根元素font-size 最好设置为16，因为浏览器默认的值就是16，这样代码失效或尚未起效时，不会有布局问题
	32 // 设置最大根元素font-size
);