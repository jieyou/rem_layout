# 移动端网页使用REM布局最佳实践
# rem layout on mobile webpages

rem即“相对root元素（html）的font-size的倍数”，即：如果为html设置font-szie为16px，为页面中某个span设置font-size为2rem，那么这个span的字体大小实际即为16px*2=32px。

随着iPhone6与6plus的发布，iPhone也终于不总是返回css像素为320了，而是分别返回375、414（假设设备方向为纵向，即肖像模式）。

在移动端，经典的布局方式是用“px结合[弹性盒](https://developer.mozilla.org/zh-CN/docs/CSS/Tutorials/Using_CSS_flexible_boxes)” 实现的。此时考虑一个页面：

	<!DOCTYPE HTML>
	<html lang="zh">
	<head>
	<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
		<title>rem</title>
		<style>
			html,body{margin: 0;padding: 0;}
		</style>
	</head>
	<body>
		<div id="wrapper">
			<!-- content text -->
			<p style="
		    	font-size:16px;
			">一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十</p>
			<!-- icon -->
			<img src="up.png" alt="向上" style="position:fixed;
		   	    bottom:10px;right:10px;width:48px;height:48px;
			">
			<!-- photo -->
			<img src="p1.jpg" alt="向上" style="margin:0 auto;display:block;
		    	width:300px;height:200px;
			">
		</div>
	</body>
	</html>	

这个页面中，所有的元素都是px布局，没有使用弹性盒布局。那么它在iPhone5或5s上的样子是：

![iPhone5或5s](http://192.168.0.113/~qinjieyou/test/rem/px_5.jpg)

在iPhone6上的样子是：

![iPhone6](http://192.168.0.113/~qinjieyou/test/rem/px_6.jpg)

在iPhone6plus上的样子是：

![iPhone6plus](http://192.168.0.113/~qinjieyou/test/rem/px_6p.jpg)

我们可以看到，在更大的屏幕上，字体大小和图片、按钮大小并没有发生变化，更大的屏幕能容纳更多的字。

这种经典的方式是无可厚非的，当然有的同学会说，可以给中间的风景图设置弹性盒布局或百分比布局，让它能横向充满整个屏幕。

如果我们换个思路，假设使用大屏幕手机的人并不是希望能在一个页面中展示更多的文字，而是希望展示与小屏幕同样多的文字，但文字的实际大小放大一些