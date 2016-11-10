//预加载
function handleLoad(idName) {
	s = createjs.Sound.play(idName, {
		loop: -1,
		pan: 0,
		volume: 1,
		startTime: null,
		duration: null,
		delay: 0
	});
}
function handleLoad1(idName) {
	t = createjs.Sound.play(idName, {
		loop: 0,
		pan: 0,
		volume: 1,
		startTime: null,
		duration: null,
		delay: 1800,
	});
}

function loading(){
	 var scaleW=window.innerWidth;
	var scaleH=$(document.body).height();
	var perW = scaleW/640;
	var perH = scaleH/1048;
	 var queue = new createjs.LoadQueue();
	 queue.installPlugin(createjs.Sound);
	 queue.on("complete", handleComplete, this);
	 queue.loadManifest([
	 	{id:"sound1", src:"audio/music1.mp3"},
	 	{id:"sound2", src:"audio/music2.mp3"},
	 	{id:"sound3", src:"audio/music3.mp3"},
	 	{id:"sound4", src:"audio/music4.mp3"},
	 	{id:"sound5", src:"audio/music5.wav"},
	 	{id: "myImage9", src:"img/b9.png"},
		{id: "myImageA1", src:"img/a1.png"},
		 {id: "myImageA2", src:"img/a2.png"},
		 {id: "myImageA3", src:"img/a3.png"},
	     {id: "myImage1", src:"img/b1.png"},
	     {id: "myImage2", src:"img/b2.jpg"},
	     {id: "myImage3", src:"img/b3.png"},
	     {id: "myImage4", src:"img/b4.png"},
	     {id: "myImage6", src:"img/cidai.gif"},
	     {id: "myImage7", src:"img/b7.png"},
	     {id: "myImage8", src:"img/b8.png"},
	     
		 {id: "myImageF1", src:"img/f1.png"},
	     {id: "myImageF2", src:"img/f2.png"},
		 {id: "myImageF3", src:"img/f3.png"}
		 
	 ]);
	 //加载的进度
	 queue.on("progress", function() {
   		 var n = parseInt(queue.progress*100)+"%";
   		 $(".percent").text(n);
   		
	});
	//加载完成后要执行的函数
	 function handleComplete() {
		 $(".loading").css("display","none");
		
		 //封面====================================
		 //封面底图
		 var imageA3 = queue.getResult("myImageA3");
		 b3W = dis(imageA3).wid;
		 b3H = dis(imageA3).hei;
		 $('.slide0_bg').append(imageA3);
		 $(".slide0_bg").find('img').css({"width":b3W,"height":b3H});

		 var imageA1 = queue.getResult("myImageA1");
		 b1W = dis(imageA1).wid;
		 b1H = dis(imageA1).hei;
		 $('.dibant').append(imageA1);
		 $(".dibant").find('img').css({"width":b1W,"height":b1H});

		 var imageA2 = queue.getResult("myImageA2");
		 b2W = dis(imageA2).wid;
		 b2H = dis(imageA2).hei;
		 $('.dibanb').append(imageA2);
		 $(".dibanb").find('img').css({"width":b2W,"height":b2H});

		 $('.dibanb').addClass('fengmianX');
		 $('.dibant').addClass('fengmianS');


		 //底板的高宽以及加载
		 var image9 = queue.getResult("myImage9");
		 dW = 640*perW+'px';
		 dH = 127*perH+'px';
		 $('.diban').append(image9);
		 $('.diban').css({'width':dW,'height':dH}).find('img').css({'width':dW,'height':dH});

		 
		 var image8 = queue.getResult("myImage8");
		 var a = dis(image8).wid;
		 var b = dis(image8).hei;
		
		//第五页
		
		
		
		
		
		 setTimeout(function(){createjs.Sound.play("sound5");
		 },1200);
		
	 }
	 function dis(ele){
			var wid = ele.style.width;
			var hei = ele.style.height;
			wid = ele.width*perW + 'px';
			hei = ele.height*perH + 'px';
			//返回值
			var obj = {
				"wid":wid,
				"hei":hei
			}
			return obj;
		}
}
 function stop_music(){
 	createjs.Sound.stop();
 };

loading();