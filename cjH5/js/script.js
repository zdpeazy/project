 /*  --------------------------inner variables------------------------------ */
var optionArr = [];//存放按钮
var rigAnswers =['C','C','B','D','B','C','D','D','A','A','D','A','D','C','D','C'];
var answerLetter = ['A','B','C','D'];
/* var sysOrder = [];//存放随机的9个问题
 var queue;*/
var queArr;
var sysOrder;
var optArr;
var screenBg;//问题的背景
var rigNum;

var passnum;
var winPrize = false;
var prize;
var turn = true;
 /* ------------------------------------------------------------- */

 // initialization
 $(function() {
 	FastClick.attach(document.body);

 	//loading sound
 	queue = new createjs.LoadQueue();
   	queue.installPlugin(createjs.Sound);
   	queue.loadFile({
   		id:"sound", 
   		src:"audio/cjMusic.mp3",
   		type:createjs.AbstractLoader.SOUND
   	});
 	queue.on("complete", handleComplete, this);
 	queue.loadManifest([{
 			id: "img0",
 			src: "img/screen-bg.jpg"
 		}, {
 			id: "img1",
 			src: "img/1.png"
 		}, {
 			id: "img2",
 			src: "img/2.png"
 		}, {
 			id: "img3",
 			src: "img/3.png"
 		}, {
 			id: "img4",
 			src: "img/4.png"
 		}, {
 			id: "img5",
 			src: "img/5.png"
 		}, {
 			id: "img6",
 			src: "img/6.png"
 		}, {
 			id: "img7",
 			src: "img/7.png"
 		}, {
 			id: "img8",
 			src: "img/8.png"
 		}, {
 			id: "img9",
 			src: "img/9.png"
 		}, {
 			id: "img10",
 			src: "img/10.png"
 		}, {
 			id: "img11",
 			src: "img/11.png"
 		}, {
 			id: "img12",
 			src: "img/12.png"
 		},{
 			id: "img13",
 			src: "img/13.png"
 		}, {
 			id: "img14",
 			src: "img/14.png"
 		}, {
 			id: "img15",
 			src: "img/15.png"
 		}, {
 			id: "img16",
 			src: "img/16.png"
 		},{
 			id: "img17",
 			src: "img/screen.jpg"
 		},{
 			id: "img18",
 			src: "img/an0.png"
 		},{
 			id: "img19",
 			src: "img/an1.png"
 		},{
 			id: "img20",
 			src: "img/an2.png"
 		},{
 			id: "img21",
 			src: "img/an3.png"
 		},{
 			id: "img22",
 			src: "img/an4.png"
 		},{
 			id: "img23",
 			src: "img/an5.png"
 		},{
 			id: "img24",
 			src: "img/an6.png"
 		},{
 			id: "img25",
 			src: "img/an7.png"
 		},{
 			id: "img26",
 			src: "img/an8.png"
 		},{
 			id: "img27",
 			src: "img/an9.png"
 		},{
 			id: "img28",
 			src: "img/answerBg.png"
 		},{
 			id: "img29",
 			src: "img/ticketWhite.png"
 		},{
 			id: "img30",
 			src: "img/share.jpg"
 		},{
 			id: "img31",
 			src: "img/allright.gif"
 		},{
 			id: "img32",
 			src: "img/choujiang.png"
 		},{
 			id: "img33",
 			src: "img/info.png"
 		},{
 			id: "img34",
 			src: "img/no-prize.png"
 		},{
 			id: "img35",
 			src: "img/ticketRed.png"
 		},{
 			id: "img36",
 			src: "img/shareRed.png"
 		},{
 			id: "img37",
 			src: "img/queren.png"
 		},{
 			id: "img38",
 			src: "img/star.jpg"
 		},{
 			id: "img39",
 			src: "img/starBtn.png"
 		},{
 			id: "img40",
 			src: "img/pasueBtn.png"
 		},{
 			id: "img41",
 			src: "img/pause.png"
 		},{
 			id: "img42",
 			src: "img/cup.png"
 		},{
 			id: "img43",
 			src: "img/note.png"
 		},{
 			id: "img44",
 			src: "img/kerchief.png"
 		},{
 			id: "img45",
 			src: "img/phone.png"
 		}
 	]);
 	queue.setMaxConnections(100); //set connections
 	queue.maintainScriptOrder = true;
 	queue.on("progress", function() {
 		var n = parseInt(queue.progress * 100)*0.01;
 		if(n <0.28&& n>0.22){
 			$('.percentLoading').animate({width:'1.09rem'},'fast');
 		}else if(n <0.5&& n>0.45){
 			$('.percentLoading').animate({width:'2.18rem'},'fast');
 		}else if(n<0.78&&n>0.72){
 			$('.percentLoading').animate({width:'3.27rem'},'fast')
 		}else if(n<0.97&&n>0.94){
 			$('.percentLoading').animate({width:'4.16rem'},'fast')
 		}else if(n==1){
 			$('.percentLoading').animate({width:'4.36rem'},'fast')
 		}
 	});
 });

 //progress complete in this hadnle
  var m = 0;
 function handleComplete() {
 	var musicCon = createjs.Sound.play("sound",{loop:-1,pan:0,volume:1,startTime:null,duration:null,delay:0});
 	if(window.localStorage){
	 	localStorage.setItem("b",0);
	}
 	$('.loading-wrap').fadeOut(300);
 	//加载首页封面
 	var indexBg = queue.getResult("img17");
 	indexBg.className = 'indexBg';
 	creatElement($('.index-wrap'), 'screenwrap');
 	$('.screenwrap').append(indexBg);
 	creatElement($('.index-wrap'), 'musicBtn');
 	starMusic = queue.getResult("img39");
	starMusic.className = 'starMusic';
	process = queue.getResult("img40");
	process.className = 'process';
	pauseBtn = queue.getResult("img41");
	pauseBtn.className = 'pauseBtn';
	$('.musicBtn').append(starMusic);
 	screenBg = queue.getResult("img0");
	screenBg.className = 'screen';
	//音乐按钮的控制
	$('.musicBtn').bind('click',function(){
		if(musicCon.playState == createjs.Sound.PLAY_SUCCEEDED&&musicCon.paused==false){
			musicCon.paused = true;
			$('.musicBtn').append(pauseBtn);
		}else{
			musicCon.play();
			$('.pauseBtn').remove();
		}
	})
 	$('.indexBg').bind('click',function(){
 		$(this).fadeOut();
 		$('.starMusic').remove();
 		$('.musicBtn').append(process);
 		//随机取出9个问题组成数组
 		queArr = addQuestion("img");
 		sysOrder = getArrayItems(queArr, 9);
 		//最后一道题
 		lastQue = queue.getResult("img16");
 		lastQue.id="que16";
 		sysOrder.push(lastQue);
 		console.log(sysOrder);
 		//答案数组
 		optArr = option();
 		//选取对应问题的对应答案
 		clickQues();
 		 //点击答案正确删除本道题下道题出现否者出现结果
 		function clickQues(){
		 	var ImgId;
			//creatElement($('.index-wrap'), 'screenBg');
		 	creatElement($('.index-wrap'), 'frameWrap');
		 	//答题成功刷新问题
			$('.frameWrap').append(screenBg);
			ImgId = sysOrder[m].id;
			var Imgindex = String(ImgId).substring(3);
			var $queNum = $('<div class="que'+[Imgindex]+'"></div>')
			$('.frameWrap').append($queNum);
			$queNum.append(sysOrder[m]);
			$queNum.append(optArr[Imgindex-1]);
			$('.frameWrap a').bind('click',function(){
				console.log(Imgindex);
				if(!turn){
					return;
				}
				turn = false;
				if(Imgindex==15){
					$(this).css('background',"url(img/P2.png) no-repeat");
					$(this).css('background-size',"auto 0.82rem");
				}else if(Imgindex==4){
					$(this).css('background',"url(img/P2.png) no-repeat");
					$(this).css('background-size',"auto 0.78rem");
				}else{
					$(this).css('background',"url(img/P2.png) no-repeat");
					$(this).css('background-size',"auto 1.18rem");
				}
				creatElement($('.frameWrap'), 'result');
				var _index = $(this).index();
				var clickLetter = answerLetter[_index];
				var rigAns = rigAnswers[Imgindex-1];
				if(clickLetter == rigAns){
					setTimeout(function(){
						$('.result').css('background',"url(img/P3.jpg) no-repeat");
						$('.result').css('background-size',"auto 3rem");
					},300)
					setTimeout(function(){
						m++;
						if(m==10){
							passnum=10;
							allrightGif = queue.getResult("img31");
							allrightGif.className = 'allrightGif';
							choujiangBtn = queue.getResult("img32");
							choujiangBtn.className = 'choujiangBtn';
							creatElement($('.index-wrap'), 'allrightWrap');
							$('.allrightWrap').append(allrightGif);
							$('.allrightWrap').append(choujiangBtn);
							$('.process').remove();
							$('.musicBtn').append(starMusic);
							//抽奖按钮
							$('.choujiangBtn').bind('click',function(){
								var win = false;
								winPrize = true;
								userInfo = queue.getResult("img33");
								userInfo.className = 'userInfo';
								noPrize = queue.getResult("img34");
								noPrize.className = 'noPrize';
								creatElement($('.index-wrap'), 'prizeWrap');
								if(win == true){
									winPrize = true;
									$('.prizeWrap').append(noPrize);
									ticketRed = queue.getResult("img35");
									ticketRed.className = 'ticketRed';
									shareRed = queue.getResult("img36");
									shareRed.className = 'shareRed';
									var $ticketRedWrap = $('<a class="ticketRed" href="#"></a>');
									var $shareRedWrap = $('<a class="shareRed" href="javascript:;"></a>');
									$('.prizeWrap').append($ticketRedWrap);
									$('.prizeWrap').append($shareRedWrap);
									$('.ticketRed').append(ticketRed);
									$('.shareRed').append(shareRed);
								}else{
									$('.index-wrap').html('');
									cup = queue.getResult("img42");
									cup.className = 'cup';
									note = queue.getResult("img43");
									note.className = 'note';
									kerchief = queue.getResult("img44");
									kerchief.className = 'kerchief';
									phone = queue.getResult("img45");
									phone.className = 'phoneCJ';
									
									creatElement($('.index-wrap'), 'last');
									creatElement($('.last'), 'lastTop');
									creatElement($('.index-wrap'), 'lastBottom');
									$('.lastBottom').append(allrightGif);
									prize=4;
									if(prize == 1){
										$('.lastTop').append(cup);
									}else if(prize == 2){
										$('.lastTop').append(note);
									}else if(prize == 3){
										$('.lastTop').append(kerchief);
									}else if(prize == 4){
										$('.lastTop').append(phone);
									}
									$infolist = '<div class="nameWrap"><input class="name" type="text" /><input class="phone" type="text" /><input class="address" type="text" /></div>';
									$('.last').append($infolist);
									creatElement($('.last'), 'querenBtnWrap');
									querenBtn = queue.getResult("img37");
									querenBtn.className = 'querenBtn';
									$('.querenBtnWrap').append(querenBtn);
									shareClickL();
								}
							})
						}
						$('.frameWrap').html('');
						clickQues();
						turn = true;
						if(window.localStorage){
							localStorage.setItem("b",m);
						}
					},500)
				}else{
					setTimeout(function(){
						$('.result').css('background',"url(img/P4.jpg) no-repeat");
						$('.result').css('background-size',"auto 3rem");
					},300)
					setTimeout(function(){
						answerBg = queue.getResult("img28");
						answerBg.className = 'answerBg';
						var $ticketBtnWrap = $('<a class="ticketBtn" href="#"></a>');
						var $shareBtnWrap = $('<a class="shareBtn" href="javascript:;"></a>');
						ticketBtn = queue.getResult("img29");
						shareBtn = queue.getResult("img30");
						creatElement($('.index-wrap'), 'answerBgWrap');
						var $anWrap = $('<div class="an-wrap"></div>')
						$('.answerBgWrap').append(answerBg);
						$('.answerBgWrap').append($anWrap);
						$('.an-wrap').append($ticketBtnWrap);
						$('.an-wrap').append($shareBtnWrap);
						$('.ticketBtn').append(ticketBtn);
						$('.shareBtn').append(shareBtn);
						rigNum = localStorage.getItem("b");
						if(rigNum == 0){
							passnum=0;
							an0 = queue.getResult("img18");
							an0.className = 'an-fr';
							$('.an-wrap').append(an0);
							shareClick();
						}else if(rigNum == 1){
							passnum=1;
							an1 = queue.getResult("img19");
							an1.className = 'an-se';
							$('.an-wrap').append(an1);
							shareClick();
						}else if(rigNum == 2){
							passnum=2;
							an2 = queue.getResult("img20");
							an2.className = 'an-se';
							$('.an-wrap').append(an2);
							shareClick();
						}else if(rigNum == 3){
							passnum=3;
							an3 = queue.getResult("img21");
							an3.className = 'an-se';
							$('.an-wrap').append(an3);
							shareClick();
						}else if(rigNum == 4){
							passnum=4;
							an4 = queue.getResult("img22");
							an4.className = 'an-th';
							$('.an-wrap').append(an4);
							shareClick();
						}else if(rigNum == 5){
							passnum=5;
							an5 = queue.getResult("img23");
							an5.className = 'an-th';
							$('.an-wrap').append(an5);
							shareClick();
						}else if(rigNum == 6){
							passnum=6;
							an6 = queue.getResult("img24");
							an6.className = 'an-th';
							$('.an-wrap').append(an6);
							shareClick();
						}else if(rigNum == 7){
							passnum=7;
							an7 = queue.getResult("img25");
							an7.className = 'an-th';
							$('.an-wrap').append(an7);
							shareClick();
						}else if(rigNum == 8){
							passnum=8;
							an8 = queue.getResult("img26");
							an8.className = 'an-th';
							$('.an-wrap').append(an8);
							shareClick();
						}else if(rigNum == 9){
							passnum=9;
							an9 = queue.getResult("img27");
							an9.className = 'an-th';
							$('.an-wrap').append(an9);
							shareClick();
						}
					},500)
				}
				grade(passnum,winPrize);//执行分享的文案
			})
			
		 }
 	})
 	function shareClick(){
 		$('.shareBtn').bind('click',function(){
	 		creatElement($('body'), 'sharePage');
	 		star = queue.getResult("img38");
	 		star.className = 'star move';
	 		$('.sharePage').append(star);
 		})
 	}
 	function shareClickL(){
 		$('.querenBtn').bind('click',function(){
	 		creatElement($('body'), 'sharePage');
	 		star = queue.getResult("img38");
	 		star.className = 'star move';
	 		$('.sharePage').append(star);
 		})
 	}
 	
 }

 //创建元素
 function creatElement(container, classN) { //a>farther container;b>className
 	var ele = document.createElement('div');
 	ele.className = classN;
 	container.append(ele);
 }
 //随机选题从一个给定的数组arr中,随机返回num个不重复项
function getArrayItems(arr, num) {
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        if (temp_array.length>0) {
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
        } else {
            break;
        }
    }
    return return_array;
}
//15道题对应的选项
function  option(){
		var option1 = $('<div class="option1"><a class="option1A" dataId="1" href="javascript:;"></a><a class="option1B" dataId="1" href="javascript:;"></a><a class="option1C" dataId="1" href="javascript:;"></a><a class="option1D" dataId="1" href="javascript:;"></a></div>');
		var option2 = $('<div class="option2"><a class="option2A" dataId="2" href="javascript:;"></a><a class="option2B" dataId="2" href="javascript:;"></a><a class="option2C" dataId="2" href="javascript:;"></a><a class="option2D" dataId="2" href="javascript:;"></a></div>');
		var option3 = $('<div class="option3"><a class="option3A" dataId="3" href="javascript:;"></a><a class="option3B" dataId="3" href="javascript:;"></a><a class="option3C" dataId="3" href="javascript:;"></a><a class="option3D" dataId="3" href="javascript:;"></a></div>');
		var option4 = $('<div class="option4"><a class="option4A" dataId="4" href="javascript:;"></a><a class="option4B" dataId="4" href="javascript:;"></a><a class="option4C" dataId="4" href="javascript:;"></a><a class="option4D" dataId="4" href="javascript:;"></a></div>');
		var option5 = $('<div class="option5"><a class="option5A" dataId="5" href="javascript:;"></a><a class="option5B" dataId="5" href="javascript:;"></a><a class="option5C" dataId="5" href="javascript:;"></a><a class="option5D" dataId="5" href="javascript:;"></a></div>');
		var option6 = $('<div class="option6"><a class="option6A" dataId="6" href="javascript:;"></a><a class="option6B" dataId="6" href="javascript:;"></a><a class="option6C" dataId="6" href="javascript:;"></a><a class="option6D" dataId="6" href="javascript:;"></a></div>');
		var option7 = $('<div class="option7"><a class="option7A" dataId="7" href="javascript:;"></a><a class="option7B" dataId="7" href="javascript:;"></a><a class="option7C" dataId="7" href="javascript:;"></a><a class="option7D" dataId="7" href="javascript:;"></a></div>');
		var option8 = $('<div class="option8"><a class="option8A" dataId="8" href="javascript:;"></a><a class="option8B" dataId="8" href="javascript:;"></a><a class="option8C" dataId="8" href="javascript:;"></a><a class="option8D" dataId="8" href="javascript:;"></a></div>');
		var option9 = $('<div class="option9"><a class="option9A" dataId="9" href="javascript:;"></a><a class="option9B" dataId="9" href="javascript:;"></a><a class="option9C" dataId="9" href="javascript:;"></a><a class="option9D" dataId="9" href="javascript:;"></a></div>');
		var option10 = $('<div class="option10"><a class="option10A" dataId="10" href="javascript:;"></a><a class="option10B" dataId="10" href="javascript:;"></a><a class="option10C" dataId="10" href="javascript:;"></a><a class="option10D" dataId="10" href="javascript:;"></a></div>');
		var option11 = $('<div class="option11"><a class="option11A" dataId="11" href="javascript:;"></a><a class="option11B" dataId="11" href="javascript:;"></a><a class="option11C" dataId="11" href="javascript:;"></a><a class="option11D" dataId="11" href="javascript:;"></a></div>');
		var option12 = $('<div class="option12"><a class="option12A" dataId="12" href="javascript:;"></a><a class="option12B" dataId="12" href="javascript:;"></a><a class="option12C" dataId="12" href="javascript:;"></a><a class="option12D" dataId="12" href="javascript:;"></a></div>');
		var option13 = $('<div class="option13"><a class="option13A" dataId="13" href="javascript:;"></a><a class="option13B" dataId="13" href="javascript:;"></a><a class="option13C" dataId="13" href="javascript:;"></a><a class="option13D" dataId="13" href="javascript:;"></a></div>');
		var option14 = $('<div class="option14"><a class="option14A" dataId="14" href="javascript:;"></a><a class="option14B" dataId="14" href="javascript:;"></a><a class="option14C" dataId="14" href="javascript:;"></a><a class="option14D" dataId="14" href="javascript:;"></a></div>');
		var option15 = $('<div class="option15"><a class="option15A" dataId="15" href="javascript:;"></a><a class="option15B" dataId="15" href="javascript:;"></a><a class="option15C" dataId="15" href="javascript:;"></a><a class="option15D" dataId="15" href="javascript:;"></a></div>');
		var option16 = $('<div class="option16"><a class="option16A" dataId="16" href="javascript:;"></a><a class="option16B" dataId="16" href="javascript:;"></a><a class="option16C" dataId="16" href="javascript:;"></a><a class="option16D" dataId="16" href="javascript:;"></a></div>');
		optionArr.push(option1);
		optionArr.push(option2);
		optionArr.push(option3);
		optionArr.push(option4);
		optionArr.push(option5);
		optionArr.push(option6);
		optionArr.push(option7);
		optionArr.push(option8);
		optionArr.push(option9);
		optionArr.push(option10);
		optionArr.push(option11);
		optionArr.push(option12);
		optionArr.push(option13);
		optionArr.push(option14);
		optionArr.push(option15);
		optionArr.push(option16);
		return optionArr;
}
//添加问题数组15个
function addQuestion(Img) {
	var questionArr = [];
	for (var i = 1; i < 16; i++) {
		var objImg = queue.getResult(Img + i);
		switch (i) {
			case 1:
				objImg.id = 'que1';
				break;
			case 2:
				objImg.id = 'que2';
				break;
			case 3:
				objImg.id = 'que3';
				break;
			case 4:
				objImg.id = 'que4';
				break;
			case 5:
				objImg.id = 'que5';
				break;
			case 6:
				objImg.id = 'que6';
				break;
			case 7:
				objImg.id = 'que7';
				break;
			case 8:
				objImg.id = 'que8';
				break;
			case 9:
				objImg.id = 'que9';
				break;
			case 10:
				objImg.id = 'que10';
				break;
			case 11:
				objImg.id = 'que11';
				break;
			case 12:
				objImg.id = 'que12';
				break;
			case 13:
				objImg.id = 'que13';
				break;
			case 14:
				objImg.id = 'que14';
				break;
			case 15:
				objImg.id = 'que15';
				break;
		}
		questionArr.push(objImg);
	}
	return questionArr;
}
 
 //分享评论页面
 function grade(passnum,win) {
 	if ((passnum!=10&&win==true)||(passnum!=10&&win==false)) {
 		comments = "来啊，互相伤害啊，我在“证明我是崔健铁杆粉”十问十答中答对"+passnum+"题，全部答对还有机会获赠崔健滚动三十演唱会门票，你要不要也来试试？";
 		level = "";
 	}else if(passnum == 10){
 		if(passnum == 10&&win==true){
 			comments = "天哪作为崔健的铁杆粉丝，我竟然有免费看崔健演唱会的一天！快来答题，说不定下一个幸运儿就是你，一起见证中国摇滚辉煌三十年！";
			level = "";
 		}else if(passnum == 10&&win==false){
 			comments = "来啊，互相伤害啊，我在“证明我是崔健铁杆粉”十问十答中全部答对，全部答对还有机会获赠崔健滚动三十演唱会门票，你要不要也来试试？";
			level = "";
 		}
		
 	}
 	shareWX();
 }
 //微信分享的文案
function shareWX(){
	content.desc = comments;
	contentCir.title=content.desc;
	contentCir.desc = content.desc;
	wx.onMenuShareTimeline(contentCir);
	wx.onMenuShareAppMessage(content);
 }
 	/*//playing method tip 玩法提示
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
	});
 	t.on('webkitAnimationEnd',function(){
		t.removeClass('swing');
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
		
	}
}*/
