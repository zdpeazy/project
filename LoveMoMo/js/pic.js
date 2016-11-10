! function() {
	var box = $("#box"),
		span = "span",
		e = {
			lvT: ["冤枉！</p>我真是MoMo的脑残粉！</p>我只是没看清！", "还不能</p>成为MoMo的真爱哦!</p>再接再厉吧！", "你一定是</p>MoMo的脑残粉！加油！</p>MoMo在像你招手！", "你这么厉害</p>一定是MoMo的骨灰粉！</p>请受MoMo一抱！", "若不是</p>MoMo的亲妈粉</p>你一定就是传说中的FBI咯！"],
			render: function(lvMap, f) {
				var arr = [1,2,3,4];
				arr.sort(function(){
					return Math.random()-0.5;
				});
				
				box.find(span).css({
					"background": "url(./img/momo"+arr[0]+".png)",
					"background-size": "cover"
				});
				var h = Math.floor(Math.random() * lvMap * lvMap);
				box.find(span).eq(h).css({
					"background": "url(./img/momo"+arr[1]+".png)",
					"background-size": "cover"
				}).data("type", "a");
			},
			getGameOverText: function(lv) {
				var b = 6 > lv ? 0 : Math.floor((lv - 1) / 5);
				if(b>4){
					b=4;
				}
				var c = this.lvT[b] || _.last(this.lvT);
				var d = "LV" + lv +":"+c;
				content.desc="我在找莫愁抢红包中，过了" + lv + "关！红包在向你招手！";
				contentCir.title=content.desc;
				contentCir.desc = content.desc;
				wx.onMenuShareTimeline(contentCir);
				wx.onMenuShareAppMessage(content);
				return {
					txt: d
				}
			}
		};
	API.color = e
}();
