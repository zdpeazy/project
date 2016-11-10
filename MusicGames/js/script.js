 /*  --------------------------inner variables------------------------------ */
var maps={
    '0':'.gg',
    '1':'.ljt',
    '2':'.pqg',
    '3':'.ylg',
    '4':'.yqt'
}; 
 var nextM=[];
 var romPass;
 var passnum = 1;
 var scores = 0;
 var score1 = 0;
 var score2 = 0;
 var score3 = 0;
 var scoreTol=0;
 var mill = [];
 var maxCombo = 0;
 var bad = 0;
 var good = 0;
 var perfect = 0;
 var level;
 var ttlen = 0;
 var comments = "";

 var array11 = [
 	['playVoice(0,1)', 500],
 	['playVoice(0,2)', 1000],
 	['playVoice(0,3)', 1500],
 	['playVoice(0,4)', 2000],
 	['playVoice(0,0)', 2500]
// 	['playVoice(0,3)', 1500],
// 	['playVoice(0,3)', 1625],
// 	['playVoice(0,1)', 1750],
// 	['playVoice(0,2)', 2000]
 ];
// var array12 = [
// 	['playVoice(0,1)', 250],
// 	['playVoice(0,2)', 750],
// 	['playVoice(0,3)', 1000],
// 	['playVoice(0,1)', 1250],
// 	['playVoice(0,1)', 1500],
// 	['playVoice(0,2)', 1750],
// 	['playVoice(0,3)', 2000]
// ];
// var array13 = [
// 	['playVoice(0,1)', 250],
// 	['playVoice(0,3)', 625], 
// 	['playVoice(0,3)', 750],
// 	['playVoice(0,1)', 1000],
// 	['playVoice(0,4)', 1250],
// 	['playVoice(0,3)', 1625],
// 	['playVoice(0,3)', 1750],
// 	['playVoice(0,1)', 2000]
// ];

 var array21 = [
 	['playVoice(0,1)', 500],
 	['playVoice(0,0)', 1000],
 	['playVoice(0,2)', 1500],
 	['playVoice(0,1)', 2000],
 	['playVoice(0,0)', 2500]
// 	['playVoice(0,1)', 3000],
// 	['playVoice(0,2)', 3500],
// 	['playVoice(0,1)', 4000]
 ];
 
 var array22 = [
 	['playVoice(0,1)', 500],
 	['playVoice(0,2)', 1500],
 	['playVoice(0,0)', 2000],
 	['playVoice(0,3)', 2500],
 	['playVoice(0,1)', 3000]
// 	['playVoice(0,2)', 3500],
// 	['playVoice(0,0)', 4000]
 ];
 
 var array23 = [
 	['playVoice(0,1)', 500],
 	['playVoice(0,2)', 1000],
 	['playVoice(0,0)', 1500],
 	['playVoice(0,1)', 2000],
 	['playVoice(0,1)', 2500]
// 	['playVoice(0,3)', 3000],
// 	['playVoice(0,4)', 3500]
 ];
 
 
 var array31 = [
 	['playVoice(0,1)', 500],
 	['playVoice(0,0)', 1000],
 	['playVoice(0,0)', 1250],
 	['playVoice(0,2)', 1500],
 	['playVoice(0,3)', 2000],
   	['playVoice(0,1)', 2250],
   	['playVoice(0,4)', 2500]
// 	['playVoice(0,4)', 2750],
// 	['playVoice(0,1)', 3000],
// 	['playVoice(0,2)', 3500],
// 	['playVoice(0,0)', 4000]
 ];
 
 var array32 = [
// 	['playVoice(0,1)', 500],
// 	['playVoice(0,3)', 1125],
// 	['playVoice(0,3)', 1250],
// 	['playVoice(0,1)', 1500],
// 	['playVoice(0,4)', 1750],
// 	['playVoice(0,3)', 2250],
// 	['playVoice(0,3)', 1750],
// 	['playVoice(0,1)', 2000]
 
   	['playVoice(0,1)', 500],
   	['playVoice(0,0)', 1000],
   	['playVoice(0,2)', 1500],
   	['playVoice(0,0)', 2000],
   	['playVoice(0,1)', 2250],
   	['playVoice(0,3)', 2500],
   	['playVoice(0,1)', 3000]
// 	['playVoice(0,2)', 3500],
// 	['playVoice(0,4)', 3750],
// 	['playVoice(0,1)', 4000]
 ];
 
 var array33 = [
 	['playVoice(0,1)', 500],
 	['playVoice(0,0)', 750],
 	['playVoice(0,4)', 1000],
 	['playVoice(0,3)', 1250],
 	['playVoice(0,2)', 1500],
   	['playVoice(0,0)', 1750],
   	['playVoice(0,3)', 2000]
// 	['playVoice(0,1)', 2250],
// 	['playVoice(0,1)', 2500],
// 	['playVoice(0,0)', 2750],
// 	['playVoice(0,4)', 3000],
// 	['playVoice(0,3)', 3250],
// 	['playVoice(0,2)', 3500],
// 	['playVoice(0,0)', 4000]
 ];
 //0:锅盖；1:垃圾桶；2:排气筒；3:易拉罐；4:油桶
 var sysOrder = [];
 var userOrder = [];
 var queue;
 /* ------------------------------------------------------------- */

 // initialization
 $(function() {
 	FastClick.attach(document.body);

 	//loading sound
 	queue = new createjs.LoadQueue();
   	queue.installPlugin(createjs.Sound);
   	queue.loadFile({
   		id:"sound0", 
   		src:"http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Fguogai.wav",
   		type:createjs.AbstractLoader.SOUND
   	});
   	queue.loadFile({
   		id:"sound1", 
   		src:"http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Flajitong.wav",
   		type:createjs.AbstractLoader.SOUND
   	});
   	queue.loadFile({
   		id:"sound2", 
   		src:"http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Fpaiqi.wav",
   		type:createjs.AbstractLoader.SOUND
   	});
   	queue.loadFile({
   		id:"sound3", 
   		src:"http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Fyilaguan.wav",
   		type:createjs.AbstractLoader.SOUND
   	});
   	queue.loadFile({
   		id:"sound4", 
   		src:"http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fgame%2Fyoutong.wav",
   		type:createjs.AbstractLoader.SOUND
   	});
 	
 	queue.on("complete", handleComplete, this);
 	queue.loadManifest([{
 			id: "img0",
 			src: "img/dengpai.png"
 		}, {
 			id: "img1",
 			src: "img/nihong.png"
 		}, {
 			id: "img2",
 			src: "img/paiqiguan.png"
 		}, {
 			id: "img3",
 			src: "img/guogai.png"
 		}, {
 			id: "img4",
 			src: "img/youqitong.png"
 		}, {
 			id: "img5",
 			src: "img/lajitong.png"
 		}, {
 			id: "img6",
 			src: "img/yilaguan.png"
 		}, {
 			id: "img7",
 			src: "img/screen-left.png"
 		}, {
 			id: "img8",
 			src: "img/screen-right.png"
 		}, {
 			id: "img9",
 			src: "img/playingMethod.png"
 		}, {
 			id: "img10",
 			src: "img/start-btn.png"
 		}, {
 			id: "img11",
 			src: "img/one.png"
 		}, {
 			id: "img12",
 			src: "img/two.png"
 		}, {
 			id: "img13",
 			src: "img/three.png"
 		}, {
 			id: "img14",
 			src: "img/first-round.png"
 		}, {
 			id: "img15",
 			src: "img/comments1.png"
 		}, {
 			id: "img16",
 			src: "img/comments2.png"
 		}, {
 			id: "img17",
 			src: "img/comments3.png"
 		}, {
 			id: "img18",
 			src: "img/comments4.png"
 		}, {
 			id: "img19",
 			src: "img/details-btn.png"
 		}, {
 			id: "img20",
 			src: "img/share-btn.png"
 		}, {
 			id: "img21",
 			src: "img/ticket-btn.png"
 		}, {
 			id: "img22",
 			src: "img/share.png"
 		}, {
 			id: "img23",
 			src: "img/second-round.png"
 		}, {
 			id: "img24",
 			src: "img/third-round.png"
 		},{
 			id: "img25",
 			src: "img/star-again.png"
 		},{
 			id: "img26",
 			src: "img/index-bg.jpg"
 		},{
 			id: "img27",
 			src: "img/figin.png"
 		}

 	]);
 	queue.setMaxConnections(100); //set connections
 	queue.maintainScriptOrder = true;
 	queue.on("progress", function() {
 		var n = parseInt(queue.progress * 100) + "%";
 		$('.percentLoading').text(n);
 	});
 });

 //progress complete in this hadnle
 function handleComplete() {
 	$('.loading-wrap').hide();
 	$('.sl').addClass('sll');
 	$('.sr').addClass('srr');
 	setTimeout(function(){
 		$('.screenwrap').hide();
 	},1500);
 	
 	//create screen and screen move 幕布移动
 	/*function screenAction() {
 		creatElement($('.index-wrap'), 'screenwrap');
 		for (var i = 7; i < 9; i++) {
 			var screenImg = queue.getResult("img" + i);
 			switch (i) {
 				case 7:
 					screenImg.className = 'sl';
 					break;
 				case 8:
 					screenImg.className = 'sr';
 					break;
 			}
 			$('.screenwrap').append(screenImg);
 		}

 	}*/
 	//playing method tip 玩法提示
 	function methodTip() {
 		creatElement($('.index-wrap'), 'methodTip');
 		for (var i = 9; i < 11; i++) {
 			var methodImg = queue.getResult("img" + i);
 			switch (i) {
 				case 9:
 					methodImg.className = 'tipIcon';
 					break;
 				case 10:
 					methodImg.className = 'tipBtn';
 					break;
 			}
 			$('.methodTip').append(methodImg);
 		}
 	}
 	//musicalInstrument loading 加载乐器
 	function musicalIns() {
 		creatElement($('.index-wrap'), 'star-wrap');
 		for (var i = 0; i < 7; i++) {
 			var objImg = queue.getResult("img" + i);
 			switch (i) {
 				case 0:
 					objImg.className = 'dp';
 					break;
 				case 1:
 					objImg.className = 'nh';
 					break;
 				case 2:
 					objImg.className = 'pqg ck';
 					break;
 				case 3:
 					objImg.className = 'gg ck';
 					break;
 				case 4:
 					objImg.className = 'yqt ck';
 					break;
 				case 5:
 					objImg.className = 'ljt ck';
 					break;
 				case 6:
 					objImg.className = 'ylg ck';
 					break;
 			}
 			$('.star-wrap').append(objImg).hide();
 		}
 		var index_bg = queue.getResult("img26");
 		index_bg.className='indexBg';
 		var promptImg = queue.getResult("img27");
 		promptImg.className = 'prompt';
 		$('.star-wrap').append(index_bg);
 		$('.star-wrap').append(promptImg);
 		$('.prompt').hide();
		
 	}
 	//loading 321 and round 加载321倒计时和关数标志
 	function loadingEle() {
 		var one = queue.getResult("img11");
 		var two = queue.getResult("img12");
 		var thr = queue.getResult("img13");
 		var firstRound = queue.getResult("img14");
 		var secondRound = queue.getResult("img23");
 		var thirdRound = queue.getResult("img24");
 		one.className = 'countBtn hide';
 		two.className = 'countBtn hide';
 		thr.className = 'countBtn hide';
 		firstRound.className = 'passTip hide';
 		secondRound.className = 'passTip hide';
 		thirdRound.className = 'passTip hide';
 		$('.methodTip').append(one);
 		$('.methodTip').append(two);
 		$('.methodTip').append(thr);
 		$('.methodTip').append(firstRound);
 		$('.methodTip').append(secondRound);
 		$('.methodTip').append(thirdRound);
 	}
 	//加载评分的元素
 	function gradecommentsLoading() {
 		creatElement($('.index-wrap'), 'grade-wrap');
 		var v1 = queue.getResult('img15');
 		var v2 = queue.getResult('img16');
 		var v3 = queue.getResult('img17');
 		var v4 = queue.getResult('img18');
 		var share = queue.getResult('img22');
 		v1.className = 'comments hide comments1';
 		v2.className = 'comments hide comments2';
 		v3.className = 'comments hide comments3';
 		v4.className = 'comments hide comments4';
 		share.className = 'share';
 		$('.grade-wrap').append(v1);
 		$('.grade-wrap').append(v2);
 		$('.grade-wrap').append(v3);
 		$('.grade-wrap').append(v4);

 		for (var i = 19; i < 22; i++) {
 			var starAgain = queue.getResult('img25');
 				starAgain.className = 'gradeBtn starBtn';
 			var gradeImg = queue.getResult("img" + i);
 			switch (i) {
 				case 19:
 					gradeImg.className = 'btn';
 					break;
 				case 20:
 					gradeImg.className = 'btn';
 					break;
 				case 21:
 					gradeImg.className = 'btn';
 					break;
 			}
 			var a = document.createElement('a');
 			$a = $(a);
 			$a.append(gradeImg);
 			$('.grade-wrap').append($a);
 			$('.grade-wrap').append(starAgain);
 			$('.grade-wrap a').eq(0).addClass('detailBtn gradeBtn').attr('href','http://wechat.iduiyue.com/static/stomp/html/stomp_index.html');
 			$('.grade-wrap a').eq(1).addClass('shareBtn gradeBtn');
 			$('.grade-wrap a').eq(2).addClass('ticketBtn gradeBtn').attr('href','http://wechat.iduiyue.com/h5/activity/act/78/');
 		}
 		$('.grade-wrap').hide();
 		$('.shareBtn').bind('click', function() {
 			$('.grade-wrap').html('').css('background', 'rgba(0,0,0,0.7)').append(share);
 			$('.share').addClass('shareMove');
 		});
 		$(".starBtn").click(function() {
	 		reStart();
 		});
 	}
 	//音乐流程
 	//screenAction()
 	/*var timer1 = setTimeout(function() {
 		$('.screenwrap').hide();
 	}, 2000);*/
 	var timer2 = setTimeout(function() {
 		$('.star-wrap').show();
 	}, 100);
 	methodTip()
 	musicalIns();
 	loadingEle();
 	gradecommentsLoading();
 	//start-btn click event
 	$('.tipBtn').bind('click', function() {
 		$(this).hide();
 		$('.tipIcon').hide();
 		startGame(1);
 		setTimeout('bindClick(1)', 5000);
 	})

 /*	$(".nh").click(function() {
 		startGame(1);
 		//  startGame(Math.floor(Math.random()*3)+1);
 		setTimeout('bindClick(1)', 2000);
 	});*/
 }

 //bind click event
 function bindClick(type) {
 	$(".gg").bind("click", function() {
 		playVoice(type, 0);
 	});
 	$(".ljt").bind("click", function() {
 		playVoice(type, 1);
 		$('.prompt').hide();
 		//console.log(0);
// 		$('.prompt').remove();
 	});
 	$(".pqg").bind("click", function() {
 		playVoice(type, 2);
 	});
 	$(".ylg").bind("click", function() {
 		playVoice(type, 3);
 	});
 	$(".yqt").bind("click", function() {
 		playVoice(type, 4);
 	});

 }
 function moveStyle(t){
 	t.on('animationend',function(){
		t.removeClass('swing');
		//t.removeClass('blinkA');
	});
 	t.on('webkitAnimationEnd',function(){
		t.removeClass('swing');
		//t.removeClass('blinkA');
	})
 }

 //unbind click event
 function unbindClick() {
 	$(".ck").unbind();
 }

 //start game
 function startGame(randomnum) {
 	round(passnum);
 	countDown();
	setTimeout(function() {
		if(passnum==1){
	 		startFirst();
	 	}else{
	 		romPass = "array" + passnum + randomnum;
	 		var romPassBean = eval("(" + romPass + ")");
	 		for (var i = 0; i < romPassBean.length; i++) {
	 			setTimeout(romPassBean[i][0], romPassBean[i][1]);
	 		}
	 	}
   	}, 4000);
 }
  var jl=0;
 function startFirst(){
 	romPass="array11";
 	jl+=1;
 	if(jl==1){
 		prompt(1);
 	}
	for (var i = 0; i < jl; i++) {
		setTimeout(array11[i][0], array11[i][1]);
	}
 }
 
 // play voice
 function playVoice(type, voiceType) {
// 	$(maps[voiceType+""]).addClass('blinkA');
	$(maps[voiceType+""]).addClass('swing');
	
 	moveStyle($(maps[voiceType+""]));
 	
 	createjs.Sound.play("sound"+voiceType);
 	
 	if (type == 0) {
 		sysOrder.push(voiceType);
 	} else {
 		var romPassBean = eval("(" + romPass + ")");
 		if (userOrder.length < sysOrder.length) {
 			userOrder.push(voiceType);
 			compare(sysOrder, userOrder, romPassBean);
 		}
 	}
 }

 //compare two array to whether pass this voice
 function compare(array1, array2, timeArray) {
 	if (array1[array2.length - 1] != array2[array2.length - 1]) {
 		gameOver(true);
 	} else {
 		var date = new Date();
		score(timeArray[array2.length - 1][1], date.getTime());
 		if (array1.length == array2.length) {
 			if(passnum==1){
 				if(array1.length==array11.length){
 					passRound(array1.length);
 				}else{
 					clear();
 					setTimeout('startFirst()',500);
 					setTimeout('bindClick(1)', array11[jl-1][1]+1500);
 				}
 			}else{
 				passRound(array1.length);
 			}
 		}
 	}
 }

 //game over
 function gameOver(overType) {
 	if (overType) {
 		bad += 1;
 	}
 	grade();
 }

 //pass round to next round
 function passRound(totalLth) {
 	passnum += 1;
 	ttlen += totalLth;
 	if (passnum > 3) {
 		gameOver(false);
 	} else {
 		clear(); 
   		setTimeout(function() {
 			startGame(Math.floor(Math.random()*3)+1);
 			setTimeout('bindClick(1)', 6400);
   		}, 1000);

 	}
 }
 
 //math score
 function score(time, currentTime) {
 	maxCombo += 1;
 	var ss;
 	if (mill.length == 2) {
 		mill.splice(0, 1);
 		mill.push([time, currentTime]);
 		var voiceTime = mill[1][0] - mill[0][0];
 		var clickTime = mill[1][1] - mill[0][1];
 		var errorTime = Math.abs(clickTime - voiceTime);
 		if (errorTime > 250) {
 			ss = 0;
 			bad += 1;
 		} else if (errorTime == 0) {
 			ss = passnum * 100;
 			perfect += 1;
 		} else {
 			ss = Math.round(Math.abs((errorTime/10) - (passnum * 100)));
// 			console.log(ss);
 			good += 1;
 		}
 	} else {
 		mill.push([time, currentTime]);
 		ss = passnum * 100;
 	}
 	mathScore(ss);
 }
 
 function mathScore(s){
 	if(passnum==1){
 		score1+=s;
 	}else if(passnum==2){
 		score2+=s;
 	}else if(passnum>=3){
 		score3+=s;
 	}
 }

 //clear
 function clear() {
 	userOrder = [];
 	sysOrder = [];
 	mill = [];
 	unbindClick();
 	for (var keys in maps) { 
 		moveStyle($(maps[keys]));
  	} 
 }

 function gameClean() {
 	romPass = null;
   	passnum = 1;
 	scores = 0;
 	maxCombo = 0;
 	bad = 0;
 	good = 0;
 	perfect = 0;
 	level = "";
 	ttlen = 0;
 	comments = "";
 	jl=0;
 }

 //321倒计时
 function countDown() {
 	setTimeout(function() {
 		$('.countBtn').eq(2).show();
 	}, 1000);
 	setTimeout(function() {
 		$('.countBtn').eq(2).hide();
 		$('.countBtn').eq(1).show();
 	}, 2500);
 	setTimeout(function() {
 		$('.countBtn').eq(1).hide();
 		$('.countBtn').eq(0).show();
 	}, 3500);
 	setTimeout(function() {
 		$('.countBtn').eq(0).hide();
 		$('.methodTip').hide();
 	}, 3800);

 }
 //第几关
 function round(v) {
 	$('.methodTip').show();
 	$('.passTip').eq(v - 1).show();
 	setTimeout(function() {
 		$('.passTip').eq(v - 1).hide();
 	}, 1000);
 }

 //评分页面
 function grade() {
 	scores = Math.floor(((score1+score2+score3)/4600)*100);
 	scoreTol = score1+score2+score3;
 	$('.grade-wrap').show();
 	if (passnum == 1) {
 		$('.comments4').show();
 		comments = "看来只能去弹棉花了！";
 		level = "不堪一击";
 	}else if(passnum == 2){
 		$('.comments3').show();
		comments = "红领巾第二小学鼓号队的Leader就是你了！";
		level = "勉勉强强";
 	}else if(passnum == 3){
 		$('.comments2').show();
		comments = "你已经达到中央音乐学院食堂首席大厨水准！";
		level = "小有所成";
 	}else if(passnum == 4){
 		$('.comments1').show();
		comments = "你简直就是鼓王附体，STOMP的大门向你敞开！";
		level = "牛光闪闪";
 	}
 	surpassUser(scores+'%');
 	
// 	else {
// 		if (0 < bad && bad < 5 && passnum==4) {
// 			$('.comments2').show();
// 			comments = "还不错嘛，你已经达到中央音乐学院食堂首席大厨水准！";
// 			level = "小有所成";
// 		} else if (ttlen - maxCombo < 2 && passnum==4) {
// 			$('.comments1').show();
// 			comments = "太厉害了！你简直就是鼓王附体，STOMP的大门向你敞开！";
// 			level = "牛光闪闪";
// 		} else {
// 			$('.comments3').show();
// 			comments = "嗯，说得过去吧。红领巾第二小学鼓号队的Leader就是你了！";
// 			level = "勉勉强强";
// 		}
// 	}
 	shareWX();
   	clear();
// 	gameClean();
 }
 //creatElement
 function creatElement(container, classN) { //a>farther container;b>className
 	var ele = document.createElement('div');
 	ele.className = classN;
 	container.append(ele);
 }
 
function shareWX(){
	content.desc = comments;
	contentCir.title=content.desc;
	contentCir.desc = content.desc;
	wx.onMenuShareTimeline(contentCir);
	wx.onMenuShareAppMessage(content);
 }

var jilu = 0;
function reStart(){
	$('.prompt').hide();
	$txt.eq(0).removeClass('txtCN topMove');
	$("#dv"+jilu).remove();
	jilu+=1;
	scores = 0;
	scoreTol=0;
	jl=0;
	if(passnum==1){
		score1=0;
		prompt(2);
	}else if(passnum==2){
		score2=0;
	}else if(passnum==3){
		score3=0;
	}else{
		passnum=3;
		score3=0;
	}
	clear();
// 	gameClean();
 	$('.grade-wrap').hide();
 	$('.comments1').hide();
 	$('.comments2').hide();
 	$('.comments3').hide();
 	$('.comments4').hide();
 	startGame(Math.floor(Math.random()*3)+1);
	setTimeout('bindClick(1)', 5000);
}

/*超越的用户百分比*/

	function surpassUser(per){
		var t1 = '您打出了'+scoreTol+'分！已超过全国';
		var t2 = '的用户！';
		comments = t1+per+t2+comments;
		var txt = document.createElement('div');
		txt.id = "dv"+jilu; 
		$txt = $(txt);
		$txt.eq(0).addClass('txtCN topMove');
		$txt.text(t1+per+t2)
		$('.grade-wrap').append(txt);
	}
	
function prompt(v){
	if($('.prompt')){
		var nu1=1000;
		if(v==2){
			nu1=7000;
		}
		
		setTimeout(function(){
			if(jl<2){
				$('.prompt').show();
				$('.prompt').addClass('promptHand');
			}
		},nu1);
		
//		setTimeout(function(){
//			$('.prompt').hide();
//		},nu2);
	}
}
