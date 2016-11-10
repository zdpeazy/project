<?php
	require_once "jssdk-php/jssdk.php";
	$jssdk = new JSSDK("wxac7c3150cc3d04eb", "b27b745439ba8153f684c19256d12dc2");
	$signPackage = $jssdk -> GetSignPackage();
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>STOMP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="format-detection" content="email=no" />
   <!-- <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="">-->
    <link rel="stylesheet" href="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Findex.css" />
    <script>
        (function(doc,win){var docEl=doc.documentElement,resizeEvt='orientationchange'in window?'orientationchange':'resize',recalc=function(){var clientWidth=docEl.clientWidth;if(!clientWidth)return;docEl.style.fontSize=16*1.333*(clientWidth/320)+'px'};if(!doc.addEventListener)return;win.addEventListener(resizeEvt,recalc,false);doc.addEventListener('DOMContentLoaded',recalc,false)})(document,window);
    </script>
    <script>
		var content = {
			title: '破铜烂铁大作战', 
			link: 'http://stomp.yhmlshow.com/MusicGames', 
			imgUrl: 'http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Flogo.png', 
			desc: "STOMP破铜烂铁25周年全球北京站，快加入我们吧！",
		}
		var contentCir = {
			title: 'STOMP破铜烂铁25周年全球北京站，快加入我们吧！', 
			link: 'http://stomp.yhmlshow.com/MusicGames', 
			imgUrl: 'http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Flogo.png', 
			desc: "STOMP破铜烂铁25周年全球北京站，快加入我们吧！",
		}
	</script>
</head>
<body>
	<div class="loading-wrap"><img src="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Floading.gif"/><div class="percentLoading"></div></div>
	<div class="index-wrap">
		<div class="screenwrap">
			<img src="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Fscreen-left.png" class="sl"  /><img src="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Fscreen-right.png" class="sr"  />
		</div>
	</div>
<script src="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2FjqueryAll.min.js"></script>
<script src="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Fjweixin-1.0.0.js"></script>
<script type="text/javascript" src="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Fsoundjs-0.6.2.min.js" ></script>
<script type="text/javascript" src="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Fpreloadjs-0.6.2.min.js" ></script>
<script type="text/javascript" src="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Ffastclick.js" ></script>
<script src="js/script.js"></script>
<script>
	wx.config( {
		debug: false,
		appId:<?php echo "'".$signPackage["appId"]."'" ?>,
		timestamp:<?php echo "'".$signPackage["timestamp"]."'" ?>,
		nonceStr:<?php echo "'".$signPackage["nonceStr"]."'" ?>,
		signature:<?php echo "'".$signPackage["signature"]."'" ?>,
		jsApiList: [ //需要使用的网页服务接口
			'checkJsApi', //判断当前客户端版本是否支持指定JS接口
			'onMenuShareTimeline', //分享到朋友圈
			'onMenuShareAppMessage', //分享给朋友
			'onMenuShareQQ', //分享到QQ
			'onMenuShareWeibo' //分享到微博
		]
	});
	wx.ready(function() {
		wx.onMenuShareTimeline(content);
		wx.onMenuShareAppMessage(content);
	});
	wx.error(function(res) {});
</script>
</body>
</html>