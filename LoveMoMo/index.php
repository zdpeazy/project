<?php
	require_once "jssdk-php/jssdk.php";
	$jssdk = new JSSDK("wxd8f18290e7acf76f", "24fb7fd054821997bdb4ad19b164eb10");
	$signPackage = $jssdk -> GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,minimal-ui">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="Cache-Control" content="no-cache, must-revalidate">

		<meta http-equiv="expires" content="-1">
		<title>吴莫愁送红包</title>
		<link rel="stylesheet" type="text/css" href="./css/m.min.css">
		<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<script src="lib/libs.min.js"></script>
		<script src="lib/underscore.js"></script>
	</head>
	<script type="text/javascript">
		var browser = {
			versions: function() {
				var u = navigator.userAgent,
					app = navigator.appVersion;
				return { 
					trident: u.indexOf('Trident') > -1, //IE内核 
					presto: u.indexOf('Presto') > -1, //opera内核 
					webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核 
					gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核 
					mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端 
					ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
					android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器 
					iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQ HD浏览器 
					iPad: u.indexOf('iPad') > -1, //是否iPad 
					webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部 
				};
			}(),
			language: (navigator.browserLanguage || navigator.language).toLowerCase()
		};
//		document.writeln("语言版本: " + browser.language);
//		document.writeln(" 是否为移动终端: " + browser.versions.mobile);
//		document.writeln(" ios终端: " + browser.versions.ios);
//		document.writeln(" android终端: " + browser.versions.android);
//		document.writeln(" 是否为iPhone: " + browser.versions.iPhone);
//		document.writeln(" 是否iPad: " + browser.versions.iPad);
//		document.writeln(navigator.userAgent);
		var sign;
		var projectName="LoveMoMo";
		if(browser.versions.mobile){
			sign = 2;
		}else{
			sign = 1;
		}
		var url = "http://www.lifexiaoman.com:8080/xiaoman-statistic/xiaoman/api/statistic/"+sign+"/"+projectName;
		document.write('<iframe src='+url+' style="display: none;width: 0px; height:0px;"></iframe>') 
//		var xhr=new XMLHttpRequest();
//		xhr.open('GET',url); 
	</script>

	<body ryt12819="1">
		<div class="grid">
			<div class="page hide" id="loading">
				<div class="loading-txt">加载中...</div>
				<iframe id="ife" src="" style="display: none;width: 0px; height:0px;"></iframe>
			</div>
			<div id="shareDiv" class="sharemomo">
				<div style="position:absolute;left:0;top:0;">
					<img style="width:100%;height:auto;" src="img/share.gif" />
				</div>
            </div>
			<div class="page hide" id="index" style="background:url(img/shoushou.png) no-repeat;height: 100%;width:100%;position:absolute;left:0;top:0;background-size:100% 100%;">
				<!--<h1>小满鉴定吴莫愁</h1>
				
				<div id="help"></div>-->
				<div class="btns">
					<div data-type="color" class="btn btn-play" >
						
					</div>
				</div>
			</div>
			<div class="page hide" id="room" style="background:url(img/bg.png) no-repeat;height: 100%;width:100%;position:absolute;left:0;top:0;background-size:100% 100%;">
				<header>
				<span class="lv" style="display: none;">
                    过关:
                    <em>
                        0
                    </em>
                </span>
				<span class="time" style="display:block;background: url(img/time.png) no-repeat;position: absolute;top:100%;left:38%;background-size: 100% 100%;">
                </span>
				<span class="btn btn-pause" style="display: none;">
                    暂停
                </span>
				</header>
				<div id="box" class="lv1">
				</div>
			</div>
			<div class="page hide" id="dialog" style="width:100%;height:auto;">
				<!--<div class="inner">
					<div class="content gameover">
						<div class="inner-content">
							<h3 style="margin-top: -115px;font-size: 23px;line-height: 40px;color:#fff;"></h3>
							<div class="btn-wrap clearfix">
								<div class="btn btn-restart" style="line-height: 40px;background:#ffc637;width:45%;height:15%;border-radius:5px;box-shadow:0px 4px #e9b229;">
									重来
								</div>
							</div>
							<div class="btn btn-boyaa" style="line-height: 40px;background:#ffc637;width:55%;height:17%;border-radius:5px;box-shadow:0px 5px #e9b229;" onclick="shareClick();">
                             	分享到朋友圈
                        </div>
						</div>
					</div>
					<div class="content pause">
						<div class="inner-content">
							<h3>
                            游戏暂停
                        </h3>
							<div class="btn-wrap clearfix">
								<button class="btn btn-resume">
									继续
								</button>
								<button class="btn btn-restart">
									重来
								</button>
							</div>
							<a href="#" target="_blank" class="btn btn-boyaa">
                            分享到朋友圈
                        </a>
						</div>

					</div>
				</div>-->
				<div class="" style="width:100%;height:auto;position:absolute;left:0;left:0;">
					<img style="width:100%;height:auto;margin-top:-50px;" src="img/end1.png" />
					<div class="btn btn-boyaa" style="position:absolute;bottom:2%;left:21.8%;line-height: 45px;background:#ffc637;width:56.25%;height:50px;border-radius:5px;box-shadow:0px 5px #e9b229;text-align:center;" onclick="shareClick();">
                             	分享到朋友圈
                </div>
				</div>
				
			</div>
		</div>
		<script src="js/game.js"></script>
		<script src="js/app.js"></script>
		<script src="js/pic.js"></script>
		<!--<script type="text/javascript" src="js/weixin.js"></script>-->
	</body>
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
	wx.onMenuShareTimeline(content);
	wx.onMenuShareAppMessage(content);
});
wx.error(function(res) {});</script>
</html>