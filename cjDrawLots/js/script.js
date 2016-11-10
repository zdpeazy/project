 /*  --------------------------inner variables------------------------------ */
var lotIndex;//有封面的
var nextFlag = true;
 /* ------------------------------------------------------------- */
 // initialization
 $(function() {
 	FastClick.attach(document.body);
 	//loading sound
 	queue = new createjs.LoadQueue();
 	queue.on("complete", handleComplete, this);
 	queue.loadManifest([{
 			id: "img0",
 			src: "img/CJcover.gif"
 		}, {
 			id: "img1",
 			src: "img/1.jpg"
 		}, {
 			id: "img2",
 			src: "img/2.jpg"
 		}, {
 			id: "img3",
 			src: "img/3.jpg"
 		}, {
 			id: "img4",
 			src: "img/4.jpg"
 		}, {
 			id: "img5",
 			src: "img/5.jpg"
 		}, {
 			id: "img6",
 			src: "img/6.jpg"
 		}, {
 			id: "img7",
 			src: "img/7.jpg"
 		}, {
 			id: "img8",
 			src: "img/8.jpg"
 		}, {
 			id: "img9",
 			src: "img/9.jpg"
 		}, {
 			id: "img10",
 			src: "img/10.jpg"
 		}, {
 			id: "img11",
 			src: "img/b1.jpg"
 		}, {
 			id: "img12",
 			src: "img/b2.jpg"
 		}, {
 			id: "img13",
 			src: "img/star.jpg"
 		}, {
 			id: "img14",
 			src: "img/cjCoverbg.png"
 		}, {
 			id: "img15",
 			src: "img/again.png"
 		}, {
 			id: "img16",
 			src: "img/screenBtn.png"
 		}
 	]);
 	queue.setMaxConnections(100); //set connections
 	queue.maintainScriptOrder = true;
 	queue.on("progress", function() {
 		var n = parseInt(queue.progress * 100)*0.01;
 		if(n <0.28&& n>0.22){
 			$('.percentLoading').animate({width:'1.68rem'},'fast');
 		}else if(n <0.5&& n>0.45){
 			$('.percentLoading').animate({width:'1.936rem'},'fast');
 		}else if(n<0.78&&n>0.72){
 			$('.percentLoading').animate({width:'2.304rem'},'fast');
 		}else if(n<0.97&&n>0.94){
 			$('.percentLoading').animate({width:'2.672rem'},'fast');
 		}else if(n==0.99){
 			$('.percentLoading').animate({width:'2.840rem'},'fast');
 		}
 	});
 });

 //progress complete in this hadnle
 function handleComplete() {
	$('.loading-wrap').fadeOut(300);
    var qs=GetQueryString('id');
    var timeStr = getTime(1);
    if(qs == undefined){
    	//加载首页封面
	 	var screenBg = queue.getResult("img0");
	 	screenBg.className = 'CJcover';
	 	var cjCoverbg = queue.getResult("img14");
	 	cjCoverbg.className = 'cjCoverbg';
	 	var screenTimeWrap = queue.getResult("img16");
	 	screenTimeWrap.className = 'screenTimeWrap';
	 	creatElement($('.index-wrap'), 'screenwrap');
	 	$('.screenwrap').append(screenBg);
	 	$('.screenwrap').append(cjCoverbg);
	 	$('.screenwrap').append(screenTimeWrap);
	 	creatElement($('.screenwrap'), 'screenTime');
	 	$('.screenTime').append(timeStr);
	 	//抽签内容的数组1-10
	 	var lotArr = lotArray('img');
	 	lotIndex = ranNum();
	 	$('.index-wrap').bind('click',function(){
	 		if(!nextFlag){
				return;
			}
	 		$('.screenwrap').fadeOut(300);
	 		creatElement($('.index-wrap'), 'lotInfo');
	 		$('.lotInfo').append(lotArr[lotIndex]);
	 		creatElement($('.lotInfo'), 'lotInfoTime');
	 		var timeStrToo = getTime(2);
	 		$('.lotInfoTime').append(timeStrToo);
	 		creatElement($('.lotInfo'), 'lotInfoTime');
	 		var $btnWrap = $('<div class="btnWrap"><span class="share"></span><a class="turn" href="http://wap.koudaitong.com/v2/showcase/homepage?alias=6xgctg73"></a></div>');
	 		$('.lotInfo').append($btnWrap);
	 		var shareBtn = queue.getResult("img11");
	 		shareBtn.className = 'shareBtn';
	 		var turnYouZan = queue.getResult("img12");
	 		turnYouZan.className = 'turnYouZan';
	 		$('.share').append(shareBtn);
	 		$('.turn').append(turnYouZan);
	 		nextFlag = false;
	 		shareClick();
	 		//执行分享的文案
	 		grade(lotIndex);
	 		
	 	})
    }else{
    	creatElement($('.index-wrap'), 'lotInfo');
 		$('.lotInfo').append(lotArr[qs]);
 		creatElement($('.lotInfo'), 'lotInfoTime');
 		var timeStrToo = getTime(2);
 		$('.lotInfoTime').append(timeStrToo);
 		creatElement($('.lotInfo'), 'lotInfoTime');
 		var $btnWrap = $('<div class="btnWrap"><span class="again"></span><a class="turn" href="http://wap.koudaitong.com/v2/showcase/homepage?alias=6xgctg73"></a></div>');
 		$('.lotInfo').append($btnWrap);
 		var againBtn = queue.getResult("img15");
 		againBtn.className = 'againBtn';
 		var turnYouZan = queue.getResult("img12");
 		turnYouZan.className = 'turnYouZan';
 		$('.again').append(againBtn);
 		$('.turn').append(turnYouZan);
 		$('.again').bind('click',function(){
 			$('.index-wrap').html('');
 			//加载首页封面
		 	var screenBg = queue.getResult("img0");
		 	screenBg.className = 'CJcover';
		 	var cjCoverbg = queue.getResult("img14");
		 	cjCoverbg.className = 'cjCoverbg';
		 	var screenTimeWrap = queue.getResult("img16");
		 	screenTimeWrap.className = 'screenTimeWrap';
		 	creatElement($('.index-wrap'), 'screenwrap');
		 	$('.screenwrap').append(screenBg);
		 	$('.screenwrap').append(cjCoverbg);
		 	$('.screenwrap').append(screenTimeWrap);
		 	creatElement($('.screenwrap'), 'screenTime');
		 	$('.screenTime').append(timeStr);
		 	
 		})
 		$('.index-wrap').bind('click',function(){
	 		if(!nextFlag){
				return;
			}
	 		$('.screenwrap').fadeOut(300);
	 		creatElement($('.index-wrap'), 'lotInfo');
	 		$('.lotInfo').append(lotArr[lotIndex]);
	 		creatElement($('.lotInfo'), 'lotInfoTime');
	 		var timeStrToo = getTime(2);
	 		$('.lotInfoTime').append(timeStrToo);
	 		creatElement($('.lotInfo'), 'lotInfoTime');
	 		var $btnWrap = $('<div class="btnWrap"><span class="share"></span><a class="turn" href="http://wap.koudaitong.com/v2/showcase/homepage?alias=6xgctg73"></a></div>');
	 		$('.lotInfo').append($btnWrap);
	 		var shareBtn = queue.getResult("img11");
	 		shareBtn.className = 'shareBtn';
	 		var turnYouZan = queue.getResult("img12");
	 		turnYouZan.className = 'turnYouZan';
	 		$('.share').append(shareBtn);
	 		$('.turn').append(turnYouZan);
	 		nextFlag = false;
	 		shareClick();
	 		//执行分享的文案
	 		grade(lotIndex);
	 		
	 	})
    }
 	//分享动画
 	function shareClick(){
 		$('.shareBtn').bind('click',function(){
	 		creatElement($('body'), 'sharePage');
	 		star = queue.getResult("img13");
	 		star.className = 'star move';
	 		$('.sharePage').append(star);
 		})
 	}
 }
//返回的是字符串形式的参数  
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
 //创建元素
 function creatElement(container, classN) { //a>farther container;b>className
 	var ele = document.createElement('div');
 	ele.className = classN;
 	container.append(ele);
 }
 //获取当前的日期
 function getTime(tip){
 	var d,m,n,x,str,nn,tt;
 	d = new Date();
 	m = d.getFullYear();
 	n = d.getMonth()+1;
 	t = d.getDate();
 	//数字前补0
 	nn = extra(n);
 	tt = extra(t);
 	if(tip == 1){
 		str = '公元 '+m+' 年 '+nn+' 月 '+tt+' 日';
 	}else if(tip == 2){
 		str = m+'.'+nn+'.'+tt;
 	}
 	
	return str;
	setTimeout("getTime()",1000);  
 }
 //如果传入数字小于10，数字前补一位0。  
 function extra(x){  
    if(x < 10){  
        return "0" + x;  
    }else{  
        return x;  
    }  
} 
//添加抽签数组10个
function lotArray(Img) {
	var lotArr = [];
	for (var i = 1; i < 16; i++) {
		var objImg = queue.getResult(Img + i);
		switch (i) {
			case 1:
				objImg.className = 'lot1 lot';
				break;
			case 2:
				objImg.className = 'lot2 lot';
				break;
			case 3:
				objImg.className = 'lot3 lot';
				break;
			case 4:
				objImg.className = 'lot4 lot';
				break;
			case 5:
				objImg.className = 'lot5 lot';
				break;
			case 6:
				objImg.className = 'lot6 lot';
				break;
			case 7:
				objImg.className = 'lot7 lot';
				break;
			case 8:
				objImg.className = 'lot8 lot';
				break;
			case 9:
				objImg.className = 'lot9 lot';
				break;
			case 10:
				objImg.className = 'lot10 lot';
				break;
		}
		lotArr.push(objImg);
	}
	return lotArr;
}
//随机去1-10内的随机数
function ranNum(){
	var ranNum = parseInt(10*Math.random());
	return ranNum;
}
 //分享文案
function grade(lotindex) {
 	switch (lotindex) {
		case 0:
			comments ='因为我用《一块红布》蒙了眼，你今天听哪首崔健？';
			urllink = 'http://www.xiaoman.com/cj_lots.html?id=0'
			break;
		case 1:
			comments ='下不下雪我都在唱《快让我在这雪地上撒点儿野》，你今天听哪首崔健？';
			urllink = 'http://www.xiaoman.com/cj_lots.html?id=1'
			break;
		case 2:
			comments ='《长征路上的摇滚》特别燃，你今天听哪首崔健？';
			urllink = 'http://www.xiaoman.com/cj_lots.html?id=2'
			break;
		case 3:
			comments ='《花房姑娘》点亮我的心，你今天听哪首崔健？';
			urllink = 'http://www.xiaoman.com/cj_lots.html?id=3'
			break;
		case 4:
			comments ='只有我知道《一块红布》到达的幸福是什么，你今天听哪首崔健？';
			urllink = 'http://www.xiaoman.com/cj_lots.html?id=4'
			break;
		case 5:
			comments ='《蓝色骨头》代表我的心，你今天听哪首崔健？';
			urllink = 'http://www.xiaoman.com/cj_lots.html?id=5'
			break;
		case 6:
			comments ='我不怕《一无所有》我只是怕失去你，你今天听哪首崔健？';
			urllink = 'http://www.xiaoman.com/cj_lots.html?id=6'
			break;
		case 7:
			comments ='《红旗下的蛋》，可蛋才是生命呀，你今天听哪首崔健？';
			urllink = 'http://www.xiaoman.com/cj_lots.html?id=7'
			break;
		case 8:
			comments ='没有什么不能《从头再来》，你今天听哪首崔健？';
			urllink = 'http://www.xiaoman.com/cj_lots.html?id=8'
			break;
		case 9:
			comments ='论爱上一个《假行僧》的自我修养，你今天听哪首崔健？';
			urllink = 'http://www.xiaoman.com/cj_lots.html?id=9';
			break;
	}
 	shareWX();
 }
 //微信分享的文案
function shareWX(){
	content.desc = comments;
	content.link = urllink;
	contentCir.title=content.desc;
	contentCir.desc = content.desc;
	wx.onMenuShareTimeline(contentCir);
	wx.onMenuShareAppMessage(content);
}
