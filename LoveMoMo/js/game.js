var _lang = {
		zh: {
			help_txt: "找出所有吴莫愁里不同的一个",
			score: "得分:",
			btn_pause: "暂停",
			btn_reTry: "重来",
			btn_more_game: "更多游戏",
			game_pause: "游戏暂停",
			btn_resume: "继续",
			loading: "加载中...",
//			share_txt_d:"我在找莫愁游戏中，过了",
//			share_txt_1:"关，你也来试试吧！",
			lv_txt: ["莫愁的脑残粉", "莫愁的忠实粉", "莫愁的路人粉", "慧眼识莫愁", "火眼金睛", "洞察一切", "两眼冒光", "24k氪金眼", "已被亮瞎！"],
			coyright: "版权归小满所有.侵权必究 v0.1.0"
		},
	},
	_config = {
		lang: "zh",
		color: {
			allTime: 20,
			addTime: 0,
			lvMap: [2, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9]
		},
		color2: {
			allTime: 30,
			addTime: 0,
			lvMap: [4, 4, 6, 6, 6, 6, 6, 6, 8]
		},
		pic: {
			isOpen: false,
			allTime: 5,
			addTime: 0,
			lvMap: [2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8]
		}
	},
	content = {
		title: '找莫愁送红包啦！', 
		link: 'http://lifexiaoman.com/LoveMoMo', 
		imgUrl: 'http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Flogo_life.jpg', 
		desc: "莫愁来拜年~小满送红包！",
	},
	contentCir = {
		title: '莫愁来拜年~小满送红包！', 
		link: 'http://lifexiaoman.com/LoveMoMo', 
		imgUrl: 'http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Flogo_life.jpg', 
		desc: "莫愁来拜年~小满送红包！",
	};

function shareClick(){
	$("#shareDiv").css("display","block");
}
! function() {
	var box = $("#box"),
		b = {
			lv: $("#room .lv em"),
			time: $("#room .time"),
			start: $("#dialog .btn-restart"),
			pause: $("#room .btn-pause"),
			resume: $("#dialog .btn-resume"),
			mode: $("#mode"),
			dialog: $("#dialog"),
			d_content: $("#dialog .content"),
			d_pause: $("#dialog .pause"),
			d_gameover: $("#dialog .gameover")
		},
		c = {
			target: 1,
			finded: 0,
			score: 0,
			init: function(type, el, parent) {
				this.type = type;
				this.target = "color2" == type ? 2 : 1;
				this.api = API[type];
				this.config = _config[type];
				this.lang = _lang[_config.lang];
				b.mode.data("type", "color" == type ? "color2" : "color").html("color" == type ? this.lang.btn_double : this.lang.btn_normal);
				this.reset();
				this.parent = parent;
				this.el = el;
				this.renderUI();
				this.inited || this.initEvent();
				this.inited = true;
				this.start();
			},
			renderUI: function() {
				var w = window.screen.width;
				var isLandscape = 90 == window.orientation || -90 == window.orientation;
				var width = isLandscape ? window.innerHeight : window.innerWidth;
				width -= 20, width = Math.min(width,w-80);
				box.width(width).height(width);
				this.el.show()
			},
			initEvent: function() {
				var eventName = "ontouchstart" in document.documentElement ? "touchend" : "click",
					myGame = this;
				$(window).resize(function() {
					myGame.renderUI()
				});
				box.on(eventName, "span", function() {
					var type = $(this).data("type");
					if ("a" == type) {
						$(this).css("background-color", "#f00").data("type", "").html("<em></em>");
						myGame.finded++
							if (myGame.finded == myGame.target) {
								myGame.nextLv.call(myGame);
							}
					}
				});
				b.pause.on(eventName, _.bind(this.pause, this));
				b.resume.on(eventName, _.bind(this.resume, this));
				b.start.on(eventName, function() {
					myGame.score = 0;
					b.time.html(0);
					myGame.reset();
					myGame.start()
				});
			},
			start: function() {
				this.time > 5 && b.time.removeClass("danger");
				this.finded = 0;
				b.dialog.hide();
				this._pause = false;
				this.lv = "undefined" != typeof this.lv ? this.lv + 1 : 0;
				this.lvMap = this.config.lvMap[this.lv] || _.last(this.config.lvMap);
				this.renderMap();
				this.renderInfo();
				this.timer ||
					(this.timer = setInterval(_.bind(this.tick, this), 1000));
			},
			share: function() {},
			resume: function() {
				b.dialog.hide();
				this._pause = false
			},
			pause: function() {
				this._pause = true;
				b.d_content.hide();
				b.d_pause.show();
				b.dialog.show()
			},
			tick: function() {
				if (this._pause) {
					return
				} else {
					this.time--;
					this.time < 6 && b.time.addClass("danger");
					if (this.time < 0) {
						this.gameOver()
					} else {
						b.time.text(parseInt(this.time));
					}
				}
			},
			renderMap: function() {
				if (!this._pause) {
					var n = this.lvMap * this.lvMap,
						c = "",
						d = "lv" + this.lvMap;
					_(n).times(function() {
						c += "<span></span>"
					});
					box.attr("class", d).html(c);
					this.api.render(this.lvMap, this.lv);
				}
			},
			renderInfo: function() {
				this.score += "color2" == this.type ? this.lvMap / 2 : 1;
				b.lv.text(this.score)
			},
			gameOver: function() {
				var d = this.api.getGameOverText(this.score);
				this.lastScore = this.score;
				this.lastGameTxt = d.txt;
				b.d_content.hide();
				b.d_gameover.show().find("h3").html(this.lastGameTxt);

				box.find("span").fadeOut(1500, function() {
					b.dialog.show()
				});
				if ("color2" == this.type) {
					var e = [2, 3, 4][parseInt(2 * Math.random())];
					$("#_score").html(e);
					var f;
					f = this.socre < 70 ? (20 + 10 * Math.random()).toFixed(1) : this.socre < 80 ? (30 + 20 * Math.random()).toFixed(1) : this.socre < 90 ? (70 + 10 * Math.random()).toFixed(1) : this.socre < 100 ? (100 + 100 * Math.random()).toFixed(1) : this.socre < 110 ? (60 + 10 * Math.random()).toFixed(1) : this.socre < 120 ? (30 + 20 * Math.random()).toFixed(1) : this.socre < 130 ? (10 + 10 * Math.random()).toFixed(1) : (5 + 10 * Math.random()).toFixed(1);
					$("#_num").html(f), $("#tips").show()
				} else
					$("#tips").hide();
				this._pause = true;
				var g = "color2" == this.type ? "d_" : "";
			},
			reset: function() {
				this.time = this.config.allTime;
				this.lv = -1
			},
			nextLv: function() {
				this.time += this.config.addTime;
				b.time.text(parseInt(this.time));
				if (!this._pause)
					this.start();
			}
		};
	window.Game = c;
}();