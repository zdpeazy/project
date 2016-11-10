<?php
	require_once "jssdk-php/jssdk.php";
	$jssdk = new JSSDK("wxd8f18290e7acf76f", "24fb7fd054821997bdb4ad19b164eb10");
	$signPackage = $jssdk -> GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=640,target-densitydpi=device-dpi,user-scalable=no" />
		<title>
			情人节直男癌大作战
		</title>
		<link rel="stylesheet" href="css/index.css" />
		<link rel="stylesheet" type="text/css" href="http://static.zuiku.com/res/css/lib/g.f1fc91db62cd20aeff1dfb4d7c81c95d340778ea.css">
		<script>
			
		var content = {
			title: '情人节直男癌大作战', 
			link: 'http://lifexiaoman.com/cancerman', 
			imgUrl: 'http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Flogo_life.jpg', 
			desc: "快来参加我们的战斗吧！",
		}
		var contentCir = {
			title: '快来参加我们的战斗吧！', 
			link: 'http://lifexiaoman.com/cancerman', 
			imgUrl: 'http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Flogo_life.jpg', 
			desc: "快来参加我们的战斗吧！",
		}
		</script>
		<script type="text/javascript" src="js/index.js"></script>
		
		
		<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<style type="text/css">
		.hide {
		display: none;
		}
		.newloading-logo {
		margin: -40px auto auto -40px;
		width: 80px;
		height: 80px;
		top: 44%;
		}
		.newloading-pic {
		width: 72px;
		height: 72px;
		margin: 3px;
		}
		.newloading-ptxt {
		font-size: 15px;
		bottom: -25%;
		}
		</style>
	</head>
	<body>
		<div class="webapp-loading flexbox center middle" style="width:100%;height:100%;background:#fff;">
			<figure class="newloading-logo">
				<figcaption class="flexbox center middle newringlogo-box">
					<div class="newringlogo-icon">
					</div>
					<div class="newloading-pic">
						<img src="http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fnewloading.jpg">
					</div>
					<div class="newloading-ptxt">
						0%
					</div>
				</figcaption>
			</figure>
		</div>
		<div class="page1_container">
			<div class="page_wrap">
				<div class="music_btn"></div>
				<div class="page page0" style="z-index:11;">
					<div class="page0_bg"></div>
					<div class="page0_btn"></div>
				</div>
				<div class="page page1" style="z-index:10;">
					
					<div class="page1_bg"></div>
					<div class="page1_img1 style1_img"></div>
					<div class="page1_btn1 style1_btn1 btn1"></div>
					<div class="page1_btn2 style1_btn2 btn1"></div>
					<div class="page1_btn3 style1_btn3 btn1"></div>
					<div class="page1_btn4 style1_btn4 btn1"></div>
					<div class="next"></div>
					<div class="page1_border"></div>
				</div>
				<div class="page page2" style="z-index:9;">
					<div class="page1_bg"></div>
					<div class="page2_img style2_img"></div>
					<div class="page2_btn1 style2_btn1 btn2"></div>
					<div class="page2_btn2 style2_btn2 btn2"></div>
					<div class="page2_btn3 style2_btn3 btn2"></div>
					<div class="page2_btn4 style2_btn4 btn2"></div>
					<div class="next2"></div>
					<div class="page2_border1"></div>
					<div class="page2_border2"></div>
				</div>
				<div class="page page3" style="z-index:8;">
					<div class="page1_bg"></div>
					<div class="page3_img style3_img"></div>
					<div class="page3_btn1 style3_btn1 btn3"></div>
					<div class="page3_btn2 style3_btn2 btn3"></div>
					<div class="page3_btn3 style3_btn3 btn3"></div>
					<div class="page3_btn4 style3_btn4 btn3"></div>
					<div class="next3"></div>
					<div class="page3_border"></div>
				</div>
				<div class="page page4" style="z-index:7;">
					<div class="page1_bg"></div>
					<div class="page4_img style1_img"></div>
					<div class="page4_btn1 style1_btn1 btn4"></div>
					<div class="page4_btn2 style1_btn2 btn4"></div>
					<div class="page4_btn3 style1_btn3 btn4"></div>
					<div class="page4_btn4 style1_btn4 btn4"></div>
					<div class="next4"></div>
					<div class="page4_border"></div>
				</div>
				<div class="page page5" style="z-index:6;">
					<div class="page1_bg"></div>
					<div class="page5_img style1_img"></div>
					<div class="page5_btn1 style4_btn1 btn5"></div>
					<div class="page5_btn2 style4_btn2 btn5"></div>
					<div class="page5_btn3 style4_btn3 btn5"></div>
					<div class="page5_btn4 style4_btn4 btn5"></div>
					<div class="next5"></div>
					<div class="page5_border"></div>
				</div>
				<div class="page page6" style="z-index:5;">
					<div class="page1_bg"></div>
					<div class="page6_img style1_img"></div>
					<div class="page6_btn1 style5_btn1 btn6"></div>
					<div class="page6_btn2 style5_btn2 btn6"></div>
					<div class="page6_btn3 style5_btn3 btn6"></div>
					<div class="page6_btn4 style5_btn4 btn6"></div>
					<div class="next6"></div>
					<div class="page6_border"></div>
				</div>
				<div class="page page7" style="z-index:4;">
					<div class="page1_bg"></div>
					<div class="page7_img style1_img"></div>
					<div class="page7_btn1 style1_btn1 btn7"></div>
					<div class="page7_btn2 style1_btn2 btn7"></div>
					<div class="page7_btn3 style1_btn3 btn7"></div>
					<div class="page7_btn4 style1_btn4 btn7"></div>
					<div class="next7"></div>
					<div class="page7_border"></div>
				</div>
				<div class="page page8" style="z-index:3;">
					<div class="page1_bg"></div>
					<div class="page8_img style1_img"></div>
					<div class="page8_btn1 style1_btn1 btn8"></div>
					<div class="page8_btn2 style1_btn2 btn8"></div>
					<div class="page8_btn3 style1_btn3 btn8"></div>
					<div class="page8_btn4 style1_btn4 btn8"></div>
					<div class="next8"></div>
					<div class="page8_border"></div>
				</div>
				<div class="page page9" style="z-index:2;">
					<div class="page1_bg"></div>
					<div class="page9_img style1_img"></div>
					<div class="page9_btn1 style4_btn1 btn9"></div>
					<div class="page9_btn2 style4_btn2 btn9"></div>
					<div class="page9_btn3 style4_btn3 btn9"></div>
					<div class="page9_btn4 style4_btn4 btn9"></div>
					<div class="next9"></div>
					<div class="page9_border"></div>
				</div>
				<div class="page page10" style="z-index:1;">
					<div class="page1_bg"></div>
					<div class="page10_img style1_img"></div>
					<div class="page10_btn1 style1_btn1 btn10"></div>
					<div class="page10_btn2 style1_btn2 btn10"></div>
					<div class="page10_btn3 style1_btn3 btn10"></div>
					<div class="page10_btn4 style1_btn4 btn10"></div>
					<div class="next10"></div>
					<div class="page10_border"></div>
				</div>
				<!--答案以及解决方案-->
				<div class="page page11" style="z-index:0;">
					<div class="page1_bg"></div>
					<div class="page11_img"></div>
					<div class="page11_btn1"></div>
				</div>
				<div class="page page12" style="z-index:-1;">
					<div class="page1_bg"></div>
					<div class="page12_img1"></div>
					<div class="page12_img2"></div>
					<div class="page12_img3"></div>
					<div class="page12_btn1"></div>
					<div class="page12_btn2"></div>
				</div>
				<div class="page page13">
					<div class="page13_bg"></div>
				</div>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="js/soundjs-0.6.2.min.js"></script>
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
wx.ready(function() {
	 //ready函数用于调用API，如果你的网页在加载后就需要自定义分享和回调功能，需要在此调用分享函数。//如果是微信游戏结束后，需要点击按钮触发得到分值后分享，这里就不需要调用API了，可以在按钮上绑定事件直接调用。因此，微信游戏由于大多需要用户先触发获取分值，此处请不要填写如下所示的分享API
	wx.onMenuShareTimeline(contentCir);
	wx.onMenuShareAppMessage(content);
});
wx.error(function(res) {});</script>
</html>
