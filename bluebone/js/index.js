//对星星的拖动
(function($){
	createjs.Sound.alternateExtensions = ["mp3"];
	createjs.Sound.registerSound( {src:"audio/music2.mp3", id:"myID1"} );
	createjs.Sound.registerSound( {src:"audio/music1.mp3", id:"myID2"} );
	createjs.Sound.registerSound( {src:"audio/music3.mp3", id:"myID3"} );
	createjs.Sound.registerSound( {src:"audio/music4.mp3", id:"myID4"} );
	createjs.Sound.registerSound( {src:"audio/music5.wav", id:"myID6"} );
	createjs.Sound.registerSound( {src:"audio/xx.wav", id:"myID5"} );
	createjs.Sound.on("fileload", stop_music);
	var moveX,moveY,startX,startY;
	var index =0;var swiper;
	var scaleW=window.innerWidth;
	var scaleH=$(document.body).height();
	var perW = scaleW/640;
	var perH = scaleH/1048;
	setTimeout(function(){
		$('.movepage').eq(0).css('backgroundImage','url(img/movepage.png)');
	},2000);
	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	});
	$('.title').addClass('ani-dot').css({'top':35*perH+'px','left':272*perW+'px'}).on('tap',function(){
		$('.tip').hide();
		var iTit = $('.title').index(this);
		//console.log(iTit)
		var _th = $(this);
		//星星的位置计算
		var c = 283*perW+'px';
		var d = 219*perH+'px';
		$('.title').hide();
		_th.addClass('bounceInDown').removeClass('ani-dot').show();
		handleLoad("myID5");
		setTimeout(function(){stop_music();},100);
		setTimeout(function(){
			//处理音乐
			if(index == 1){
				handleLoad("myID1");
			}else if(index == 2){
				handleLoad("myID2");
			}else if(index == 3){
				handleLoad("myID3");
			}else if(index == 4){
				handleLoad("myID4");
			}
			var a1 ='<div class="slide1_text1"></div>';
			var b1 ='<div class="slide1_text2"></div>';
			$('.slide1_text_wrap1,.slide1_text_wrap2').html('');
			_th.parent().find('.slide1_text_wrap1').html(a1).find('.slide1_text1').addClass('ani1');
			_th.parent().find('.slide1_text_wrap2').html(b1).find('.slide1_text2').addClass('ani2');
			$('.slide1 .cd').css('backgroundImage','url(img/cidai.gif)');
			switch(index){
				case 1:
				$('.slide1 .cd').css('backgroundImage','url(img/cidai.gif)');
				break;
				case 2:
				$('.slide2 .container2').css('zIndex','45');
				break;
				case 3:
					$('.slide4 .container2').css('backgroundImage','url(img/ee2.gif)');
				break;
				case 4:
				setTimeout(function(){
					$('.slide5 .cd').find('img').attr('src','img/f2.png');
				},200);
				break;
			}
			setTimeout(function(){
				$('.movepage').eq(index).css('backgroundImage','url(img/movepage.png)');
			},1200);
			setTimeout(function(){
				swiper.unlockSwipes();
			},1300);
			
		},1000);

	}).hide();

  swiper = new Swiper('.swiper-container', {
  			freeMode : false,
  			nextButton:'.swiper-button-next',
		    onSlideChangeStart: function(swiper){
			      $('.movepage').eq(index).css('backgroundImage','');
			       $('.swiper-button-next').eq(index).css('backgroundImage','');
			      
			   },
		    onSlideChangeEnd: function(swiper){ 
		    	//swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    	$('.title').removeClass('bounceInDown').addClass('ani-dot').css({'top':30*perH+'px','left':282*perW+'px'}).show();
				$('.dibant').hide();$('.dibanb').remove();$('.diban').show();
		    	index = swiper.activeIndex;
		    	swiper.lockSwipes();
		    	x = 0;isOver = true;
		    	stop_music();
		    	$('.tip').addClass('tipO');
		    	$('.cd').css('backgroundImage','');
		    	$('.slide4 .container2').css('backgroundImage','');
		    	$('.slide5 .cd').find('img').attr('src','img/f1.png');
		    	if(index == 0){
		    		swiper.unlockSwipes();
		    		$('.title').hide();
		    		$('.diban').hide();
		    		stop_music();
		    		$('.movepage').eq(0).css('backgroundImage','url(img/movepage.png)');
		    		$('.dibant').show().removeClass('fengmianS').css('top','-55.25%');
		    		$('.slide1_text_wrap1').html('');
		    		$('.slide1_text_wrap2').html('');
		    	}else if(index == 5){
		    		$('.diban').hide();
		    		$('.dibiantt').css('display','block');
		    		$('.dibianbb').css('display','block');
		    		$('.slide6_text').addClass('slid6_text_ani');
		    		$('.dibiantt').addClass('silde6_dibiantt');
		    		$('.dibianbb').addClass('silde6_dibianbb');
		    		setTimeout(function(){
		    			handleLoad1("myID6");
		    		},3000);
		    		$('.click1').addClass('click11');
		    		$('.click2').addClass('click22');
		    	}else{
					$('.diban').show();
				}
		  	}
	    });
})(Zepto);