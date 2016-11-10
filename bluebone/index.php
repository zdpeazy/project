<?php
	require_once "jssdk-php/jssdk.php";
	$jssdk = new JSSDK("wxd8f18290e7acf76f", "24fb7fd054821997bdb4ad19b164eb10");
	$signPackage = $jssdk -> GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no">
		<title></title>
		<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<link rel="stylesheet" href="css/index.css" />
		<link rel="stylesheet" href="css/swiper.min.css" />
		<script>(function(doc,win){var docEl=doc.documentElement,resizeEvt='orientationchange'in window?'orientationchange':'resize',recalc=function(){var clientWidth=docEl.clientWidth;if(!clientWidth)return;docEl.style.fontSize=16*1.333*(clientWidth/320)+'px'};if(!doc.addEventListener)return;win.addEventListener(resizeEvt,recalc,false);doc.addEventListener('DOMContentLoaded',recalc,false)})(document,window);</script>
	</head>
	<body>
	<div class="swiper-container">
		<div class="loading">
			<div class="percent">0%</div>
		</div>
		<div class="diban"></div>
		<div class="dibant"></div>
		<div class="dibanb"></div>
        <div class="swiper-wrapper">
			<div class="swiper-slide slide0">
				<div class="slide0_bg"></div>
				<div class="movepage swiper-button-next"></div>
				<div class="title"><i></i></div>
			</div>
            <div class="swiper-slide slide1">
				<div class="cd"></div>
            	<div class="title"><i></i></div>
            	<div class="container"></div>
            	<div class="slide1_text_wrap1"></div>
				<div class="slide1_text_wrap2"></div>
				<div class="tip"></div>
            	<div class="movepage swiper-button-next"></div>
            </div>
            <div class="swiper-slide slide2">
            	<div class="title"><i></i></div>
            	<div class="container"><div></div></div>
            	<div class="container1"><div></div></div>
            	<div class="container2"><div></div></div>
				<div class="slide1_text_wrap1"></div>
				<div class="slide1_text_wrap2"></div>
            	<div class="movepage swiper-button-next"></div>
            </div>
            <div class="swiper-slide slide4">
            	<div class="cd"></div>
            	<div class="title"><i></i></div>
            	<div class="container"></div>
            	<div class="container1"></div>
            	<div class="container2"></div>
				<div class="slide1_text_wrap1"></div>
				<div class="slide1_text_wrap2"></div>
            	<div class="movepage swiper-button-next"></div>
            </div>
            <div class="swiper-slide slide5">
            	<div class="title"><i></i></div>
            	<div class="container"></div>
				<div class="slide1_text_wrap1 slide5_text_wrap1"></div>
            	<div class="cd">
            		<img src="img/f1.png" />
            	</div>
            	<div class="movepage swiper-button-next"></div>
            </div>
            <div class="swiper-slide slide6">
            	<div class="dibiantt"></div>
				<div class="dibianbb"></div>
				<div class="slide6_bg"></div>
				<div class="slide6_border"></div>
				<div class="slide6_ani"></div>
				<div class="slide6_text"></div>
				<a class="click1" href="http://b.mashort.cn/h.NfzZW?cv=AADdJaUA"></a>
				<div class="click2"></div>
            </div>
            
        </div>
    </div>
<script type="text/javascript" src="js/zepto.min.js"></script>
<script type="text/javascript" src="js/preloadjs-0.6.2.min.js" ></script>
<script type="text/javascript" src="js/swiper.min.js" ></script>
<script type="text/javascript" src="js/soundjs-0.6.2.min.js" ></script>
<script type="text/javascript" src="js/loading.js" ></script>
<script type="text/javascript" src="js/index.js" ></script>
	<script>
		var content = {
			title: '崔健30年 蓝色骨头纪念版手机',
			link: 'http://lifexiaoman.com/bluebone',
			imgUrl: 'http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fbluebone%2Flogo_bluebone.jpg',
			desc: "一张永不过时的门票 一张无限更新的唱片！",
		}
		
	</script>
<script>
		wx.config( {
			debug: false, //调式模式，设置为ture后会直接在网页上弹出调试信息，用于排查问题
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
		$('.slide6 .click2').on('tap',function(){
			wx.onMenuShareTimeline(content);
			if($('.fixbg').length==0){
				$('body').append('<div class="fixbg"></div><div style="background: rgba(0,0,0,.7); position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 9998"></div>');
			}
		});
		wx.ready(function() {
			//ready函数用于调用API，如果你的网页在加载后就需要自定义分享和回调功能，需要在此调用分享函数。//如果是微信游戏结束后，需要点击按钮触发得到分值后分享，这里就不需要调用API了，可以在按钮上绑定事件直接调用。因此，微信游戏由于大多需要用户先触发获取分值，此处请不要填写如下所示的分享API
			wx.onMenuShareTimeline(content);
			wx.onMenuShareAppMessage(content);
		});
		wx.error(function(res) {});</script>	
</body>
</html>
