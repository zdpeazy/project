<!--t<?php
	require_once "jssdk-php/jssdk.php";
	$jssdk = new JSSDK("wxac7c3150cc3d04eb", "b27b745439ba8153f684c19256d12dc2");
	$signPackage = $jssdk -> GetSignPackage();
?>t-->
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
    <link rel="stylesheet" href="style/index.css" />
    <script>
        (function(doc,win){var docEl=doc.documentElement,resizeEvt='orientationchange'in window?'orientationchange':'resize',recalc=function(){var clientWidth=docEl.clientWidth;if(!clientWidth)return;docEl.style.fontSize=50*(clientWidth/640)+'px'};if(!doc.addEventListener)return;win.addEventListener(resizeEvt,recalc,false);doc.addEventListener('DOMContentLoaded',recalc,false)})(document,window);
    </script>
    <script>
		var content = {
			title: '', 
			link: '', 
			imgUrl: '', 
			desc: "",
		}
		var contentCir = {
			title: '', 
			link: '', 
			imgUrl: '', 
			desc: "",
		}
	</script>
</head>
<body>
	<div class="loading-wrap"><img src="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Floading.gif"/><div class="percentLoading"></div></div>
	<div class="index-wrap">
		
	</div>
<script src="js/jqueryAll.min.js"></script>
<script src="js/jweixin-1.0.0.js"></script>
<script type="text/javascript" src="js/soundjs-0.6.2.min.js" ></script>
<script type="text/javascript" src="js/preloadjs-0.6.2.min.js" ></script>
<script type="text/javascript" src="js/fastclick.js" ></script>
<script src="js/script.js"></script>
<!--<script>
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
</script>-->
</body>
</html>