
window.onload=function(){
	 var webHeight = document.body.scrollHeight;
	 var pages = document.querySelectorAll('.page');
	 for(var i=0;i<pages.length-1;i++){
	 	pages[i].style.height = webHeight+95+"px";
	 }
	 
//封面
var page0_bg = document.querySelector('.page0_bg');
var page0_btn = document.querySelector('.page0_btn');
//第一张的标签
var page1 = document.querySelector('.page1');
var page1_bg = document.querySelector('.page1_bg');
var page1_img1 = document.querySelector('.page1_img1');
var page1_btn1 = document.querySelector('.page1_btn1');
var page1_btn2 = document.querySelector('.page1_btn2');
var page1_btn3 = document.querySelector('.page1_btn3');
var page1_btn4 = document.querySelector('.page1_btn4');
var next = document.querySelector('.next');
var page1_border = document.querySelector('.page1_border');
//第二张的标签
var page2 = document.querySelector('.page2');
var page2_img = document.querySelector('.page2_img');
var page2_btn1 = document.querySelector('.page2_btn1');
var page2_btn2 = document.querySelector('.page2_btn2');
var page2_btn3 = document.querySelector('.page2_btn3');
var page2_btn4 = document.querySelector('.page2_btn4');
var next2 = document.querySelector('.next2');
var page2_border1 = document.querySelector('.page2_border1');
var page2_border2 = document.querySelector('.page2_border2');
//第三张图片
var page3 = document.querySelector('.page3');
var page3_img = document.querySelector('.page3_img');
var page3_btn1 = document.querySelector('.page3_btn1');
var page3_btn2 = document.querySelector('.page3_btn2');
var page3_btn3 = document.querySelector('.page3_btn3');
var page3_btn4 = document.querySelector('.page3_btn4');
var next3 = document.querySelector('.next3');
var page3_border = document.querySelector('.page3_border');
//第四张的标签
var page4 = document.querySelector('.page4');
var page4_img = document.querySelector('.page4_img');
var page4_btn1 = document.querySelector('.page4_btn1');
var page4_btn2 = document.querySelector('.page4_btn2');
var page4_btn3 = document.querySelector('.page4_btn3');
var page4_btn4 = document.querySelector('.page4_btn4');
var next4 = document.querySelector('.next4');
var page4_border = document.querySelector('.page4_border');
//第五张的标签
var page5 = document.querySelector('.page5');
var page5_img = document.querySelector('.page5_img');
var page5_btn1 = document.querySelector('.page5_btn1');
var page5_btn2 = document.querySelector('.page5_btn2');
var page5_btn3 = document.querySelector('.page5_btn3');
var page5_btn4 = document.querySelector('.page5_btn4');
var next5 = document.querySelector('.next5');
var page5_border = document.querySelector('.page5_border');
//第六张的标签
var page6 = document.querySelector('.page6');
var page6_img = document.querySelector('.page6_img');
var page6_btn1 = document.querySelector('.page6_btn1');
var page6_btn2 = document.querySelector('.page6_btn2');
var page6_btn3 = document.querySelector('.page6_btn3');
var page6_btn4 = document.querySelector('.page6_btn4');
var next6 = document.querySelector('.next6');
var page6_border = document.querySelector('.page6_border');
//第七张的标签
var page7 = document.querySelector('.page7');
var page7_img = document.querySelector('.page7_img');
var page7_btn1 = document.querySelector('.page7_btn1');
var page7_btn2 = document.querySelector('.page7_btn2');
var page7_btn3 = document.querySelector('.page7_btn3');
var page7_btn4 = document.querySelector('.page7_btn4');
var next7 = document.querySelector('.next7');
var page7_border = document.querySelector('.page7_border');
//第八张的标签
var page8 = document.querySelector('.page8');
var page8_img = document.querySelector('.page8_img');
var page8_btn1 = document.querySelector('.page8_btn1');
var page8_btn2 = document.querySelector('.page8_btn2');
var page8_btn3 = document.querySelector('.page8_btn3');
var page8_btn4 = document.querySelector('.page8_btn4');
var next8 = document.querySelector('.next8');
var page8_border = document.querySelector('.page8_border');
//第九张的标签
var page9 = document.querySelector('.page9');
var page9_img = document.querySelector('.page9_img');
var page9_btn1 = document.querySelector('.page9_btn1');
var page9_btn2 = document.querySelector('.page9_btn2');
var page9_btn3 = document.querySelector('.page9_btn3');
var page9_btn4 = document.querySelector('.page9_btn4');
var next9 = document.querySelector('.next9');
var page9_border = document.querySelector('.page9_border');
//第十张
var page10 = document.querySelector('.page10');
var page10_img = document.querySelector('.page10_img');
var page10_btn1 = document.querySelector('.page10_btn1');
var page10_btn2 = document.querySelector('.page10_btn2');
var page10_btn3 = document.querySelector('.page10_btn3');
var page10_btn4 = document.querySelector('.page10_btn4');
var next10 = document.querySelector('.next10');
var page10_border = document.querySelector('.page10_border');

//答案选择
//工科男
var page11 = document.querySelector('.page11'); 
var page11_img = document.querySelector('.page11_img');
var page11_btn1 = document.querySelector('.page11_btn1');
//解决办法
var page12 = document.querySelector('.page12'); 
var page12_img1 = document.querySelector('.page12_img1');
var page12_img2 = document.querySelector('.page12_img2');
var page12_btn1 = document.querySelector('.page12_btn1');
var page12_btn2 = document.querySelector('.page12_btn2');
var page12_img3 = document.querySelector('.page12_img3');

//分享
var page13 = document.querySelector('.page13');
var page13_bg = document.querySelector('.page13_bg');
//音乐
var music_btn = document.querySelector('.music_btn');

page13.style.height = webHeight+95+"px";

var s;


(function(){
	//alert(0);
	var arrey=[];
	
  var oLoading = document.querySelector(".webapp-loading")	
  var ImageLoader = window["ImageLoader"] = function(){
    this.images = [];
    this.counter = {
      success: 0,
      failed: 0
    };
    this.percentNode = document.querySelector(".newloading-ptxt");
  };

  ImageLoader.prototype = {
    add: function(url){
      this.images.push(url);
      return this;
    },
    notify: function(key){
      this.counter[key]++;

      var counter = this.counter;
      var size = this.images.length;
      var loaded = counter.success + counter.failed;
      var percent = (Math.min(((loaded / size) * 100).toFixed(0), 100));
      var percentNode = this.percentNode;

      if(percentNode){
        percentNode.innerHTML = (percent + "%");
      }

      ImageLoader.complete = (loaded >= size);
      if(percent == 100){
      	oLoading.style.display='none';
      	
      	//音乐按钮的点击
			createjs.Sound.alternateExtensions = ["mp3"];
			createjs.Sound.on("fileload", handleLoad);
			createjs.Sound.registerSound("audio/music.mp3", "myID",3);
			 function handleLoad(){
			   s = createjs.Sound.play("myID",{loop:-1,pan:0,volume:1,startTime:null,duration:null,delay:0});
			// 音乐开始播放后出现图片
			      music_btn.style.backgroundImage="url("+arrey[76]+")";
			      music_btn.style.backgroundSize="100% 100%";
			 }
      }
    },
    load: function(){
      var imgs = this.images;
      var size = imgs.length;
      

      ImageLoader.startTime = (new Date().getTime());

      for(var i = 0; i < size; i++){
        ImageLoader.loader(this, imgs[i]);
        //var img = new Image();
        //alert(imgs[3]);
        //page1_bg.append("<img src="imgs[3]"/>");
        arrey.push(imgs[i]);
        
      }
      //循环创建img对象
      var img=[];
      for(var i=0;i<arrey.length+10;i++){
      	var num = document.createElement('img');
      	img.push(num);
      }
      //alert(img.length);
      //给标签添加图片
//    page1_bg.style.backgroundImage="url("+arrey[4]+")";
//    page1_bg.style.backgroundSize="100% 100%";
	  
//    第一张
      page1_img1.style.backgroundImage="url("+arrey[5]+")";
      page1_img1.style.backgroundSize="100% 100%";
      img[1].src=arrey[0];
      page1_btn1.appendChild(img[1]);
      img[2].src=arrey[1];
      page1_btn2.appendChild(img[2]);
      img[3].src=arrey[2];
      page1_btn3.appendChild(img[3]);
      img[4].src=arrey[3];
      page1_btn4.appendChild(img[4]);
      img[5].src=arrey[6];
      next.appendChild(img[5]);
     // alert(next.innerHTML);
// 	第二张  
	  page2_img.style.backgroundImage="url("+arrey[13]+")";
      page2_img.style.backgroundSize="100% 100%";
      img[7].src=arrey[9];
      img[8].src=arrey[10];
      img[9].src=arrey[11];
      img[10].src=arrey[12];
      img[11].src=arrey[6];
      page2_btn1.appendChild(img[7]);
      page2_btn2.appendChild(img[8]);
      page2_btn3.appendChild(img[9]);
      page2_btn4.appendChild(img[10]);
      next2.appendChild(img[11]);
      
      // 	第四张  
	  page4_img.style.backgroundImage="url("+arrey[18]+")";
      page4_img.style.backgroundSize="100% 100%";
      img[12].src=arrey[14];
      img[13].src=arrey[15];
      img[14].src=arrey[16];
      img[15].src=arrey[17];
      img[16].src=arrey[6];
      page4_btn1.appendChild(img[12]);
      page4_btn2.appendChild(img[13]);
      page4_btn3.appendChild(img[14]);
      page4_btn4.appendChild(img[15]);
      next4.appendChild(img[16]);      
// 	第九张  
	  page9_img.style.backgroundImage="url("+arrey[23]+")";
      page9_img.style.backgroundSize="100% 100%";
      img[17].src=arrey[19];
      img[18].src=arrey[20];
      img[19].src=arrey[21];
      img[20].src=arrey[22];
      img[21].src=arrey[6];
      page9_btn1.appendChild(img[17]);
      page9_btn2.appendChild(img[18]);
      page9_btn3.appendChild(img[19]);
      page9_btn4.appendChild(img[20]);
      next9.appendChild(img[21]);      
//第三张
	  page3_img.style.backgroundImage="url("+arrey[28]+")";
      page3_img.style.backgroundSize="100% 100%";
      img[22].src=arrey[24];
      img[23].src=arrey[25];
      img[24].src=arrey[26];
      img[25].src=arrey[27];
      img[26].src=arrey[6];
      page3_btn1.appendChild(img[22]);
      page3_btn2.appendChild(img[23]);
      page3_btn3.appendChild(img[24]);
      page3_btn4.appendChild(img[25]);
      next3.appendChild(img[26]);
//第十张      
	  page10_img.style.backgroundImage="url("+arrey[33]+")";
      page10_img.style.backgroundSize="100% 100%";
      img[27].src=arrey[29];
      img[28].src=arrey[30];
      img[29].src=arrey[31];
      img[30].src=arrey[32];
      img[31].src=arrey[6];
      page10_btn1.appendChild(img[27]);
      page10_btn2.appendChild(img[28]);
      page10_btn3.appendChild(img[29]);
      page10_btn4.appendChild(img[30]);
      next10.appendChild(img[31]);
//第五张      
	  page5_img.style.backgroundImage="url("+arrey[38]+")";
      page5_img.style.backgroundSize="100% 100%";
      img[32].src=arrey[34];
      img[33].src=arrey[35];
      img[34].src=arrey[36];
      img[35].src=arrey[37];
      img[36].src=arrey[6];
      page5_btn1.appendChild(img[32]);
      page5_btn2.appendChild(img[33]);
      page5_btn3.appendChild(img[34]);
      page5_btn4.appendChild(img[35]);
      next5.appendChild(img[36]);
//第六张      
	  page6_img.style.backgroundImage="url("+arrey[43]+")";
      page6_img.style.backgroundSize="100% 100%";
      img[37].src=arrey[39];
      img[38].src=arrey[40];
      img[39].src=arrey[41];
      img[40].src=arrey[42];
      img[41].src=arrey[6];
      page6_btn1.appendChild(img[37]);
      page6_btn2.appendChild(img[38]);
      page6_btn3.appendChild(img[39]);
      page6_btn4.appendChild(img[40]);
      next6.appendChild(img[41]);     
//边框
	  img[42].src=arrey[44];
	  page1_border.appendChild(img[42]);
	  img[43].src=arrey[44] 
	  page2_border1.appendChild(img[43]);
	  img[44].src=arrey[45] 
	  page2_border2.appendChild(img[44]);
	  img[45].src=arrey[46] 
	  page3_border.appendChild(img[45]);
	  img[46].src=arrey[44];
	  page4_border.appendChild(img[46]);
	  img[47].src=arrey[44];
	  page5_border.appendChild(img[47]);
	  img[48].src=arrey[44];
	  page6_border.appendChild(img[48]);
	  img[49].src=arrey[44];
	  page9_border.appendChild(img[49]);
	  img[50].src=arrey[44];
	  page10_border.appendChild(img[50]);
//封面
	  page0_bg.style.backgroundImage="url("+arrey[62]+")";
      page0_bg.style.backgroundSize="100% 100%";
	  img[57].src=arrey[63];
	  page0_btn.appendChild(img[57]);
	  page0_btn.onclick=function(){
	  	img[57].src=arrey[64];
	  	page1.style.zIndex = 11;
	  }
//第七张      
	  page7_img.style.backgroundImage="url("+arrey[69]+")";
      page7_img.style.backgroundSize="100% 100%";
      img[58].src=arrey[65];
      img[59].src=arrey[66];
      img[60].src=arrey[67];
      img[61].src=arrey[68];
      img[62].src=arrey[6];
      page7_btn1.appendChild(img[58]);
      page7_btn2.appendChild(img[59]);
      page7_btn3.appendChild(img[60]);
      page7_btn4.appendChild(img[61]);
      next7.appendChild(img[62]);
//第八张      
	  page8_img.style.backgroundImage="url("+arrey[74]+")";
      page8_img.style.backgroundSize="100% 100%";
      img[63].src=arrey[70];
      img[64].src=arrey[71];
      img[65].src=arrey[72];
      img[66].src=arrey[73];
      img[67].src=arrey[6];
      page8_btn1.appendChild(img[63]);
      page8_btn2.appendChild(img[64]);
      page8_btn3.appendChild(img[65]);
      page8_btn4.appendChild(img[66]);
      next8.appendChild(img[67]);
//第七张和第八张的边框
	  img[68].src=arrey[44];
	  page7_border.appendChild(img[68]);
	  img[69].src=arrey[44];
	  page8_border.appendChild(img[69]);
//分享页
	  page13_bg.style.backgroundImage="url("+arrey[75]+")";
      page13_bg.style.backgroundSize="100% 100%";
//音乐
	  
      img[70].src=arrey[77];

//对边框的操作	
//	第一个
	var oBtn1 = document.querySelectorAll(".btn1");
	//alert(oBtn1)
	//alert(oBtn1.length);
	//alert(oBtn1[0])
//	oBtn1[0].onclick=function(){
//		//alert(0);
//		page1_border.style.top = '29.7%';
//		page1_border.style.left = '68.4%';
//	}
	border_location(oBtn1[0],page1_border,'29.7%','68.4%');
	border_location(oBtn1[1],page1_border,'41.2%','68.4%');
	border_location(oBtn1[2],page1_border,'52.7%','68.4%');
	border_location(oBtn1[3],page1_border,'64.2%','68.4%');
//	第二个
	var oBtn2 = document.querySelectorAll(".btn2");
	border_location2(oBtn2[0],page2_border1,page2_border2,'29.6%','14.6%');
	border_location2(oBtn2[1],page2_border1,page2_border2,'29.6%','35%');
	border_location2(oBtn2[2],page2_border2,page2_border1,'41.5%','14.2%');
	border_location2(oBtn2[3],page2_border1,page2_border2,'41.6%','35%');
//第三个	
	var oBtn3 = document.querySelectorAll(".btn3");
	border_location(oBtn3[0],page3_border,'51.6%','13%');
	border_location(oBtn3[1],page3_border,'51.6%','50.6%');
	border_location(oBtn3[2],page3_border,'63.6%','13%');
	border_location(oBtn3[3],page3_border,'63.6%','50.6%');
//第四个	
    var oBtn4 = document.querySelectorAll(".btn4");
	border_location(oBtn4[0],page4_border,'29.7%','68.4%');
	border_location(oBtn4[1],page4_border,'41.2%','68.4%');
	border_location(oBtn4[2],page4_border,'52.7%','68.4%');
	border_location(oBtn4[3],page4_border,'64.2%','68.4%');
//第五个	
	var oBtn5 = document.querySelectorAll(".btn5");
	border_location(oBtn5[0],page5_border,'51.6%','14.6%');
	border_location(oBtn5[1],page5_border,'51.6%','35.4%');
	border_location(oBtn5[2],page5_border,'63.6%','14.6%');
	border_location(oBtn5[3],page5_border,'63.6%','35.4%');
//第六个
	var oBtn6 = document.querySelectorAll(".btn6");
	border_location(oBtn6[0],page6_border,'51.6%','47.4%');
	border_location(oBtn6[1],page6_border,'51.6%','67.4%');
	border_location(oBtn6[2],page6_border,'63.6%','47.4%');
	border_location(oBtn6[3],page6_border,'63.6%','67.4%');
//第七个
	var oBtn7 = document.querySelectorAll(".btn7");
	border_location(oBtn7[0],page7_border,'29.7%','68.4%');
	border_location(oBtn7[1],page7_border,'41.2%','68.4%');
	border_location(oBtn7[2],page7_border,'52.7%','68.4%');
	border_location(oBtn7[3],page7_border,'64.2%','68.4%');
//第八个
	var oBtn8 = document.querySelectorAll(".btn8");
	border_location(oBtn8[0],page8_border,'29.7%','68.4%');
	border_location(oBtn8[1],page8_border,'41.2%','68.4%');
	border_location(oBtn8[2],page8_border,'52.7%','68.4%');
	border_location(oBtn8[3],page8_border,'64.2%','68.4%');
//第九个
    var oBtn9 = document.querySelectorAll(".btn9");
	border_location(oBtn9[0],page9_border,'51.6%','14.6%');
	border_location(oBtn9[1],page9_border,'51.6%','35.4%');
	border_location(oBtn9[2],page9_border,'63.6%','14.6%');
	border_location(oBtn9[3],page9_border,'63.6%','35.4%');
//第十个
	var oBtn10 = document.querySelectorAll(".btn10");
	border_location(oBtn10[0],page10_border,'29.7%','68.4%');
	border_location(oBtn10[1],page10_border,'41.2%','68.4%');
	border_location(oBtn10[2],page10_border,'52.7%','68.4%');
	border_location(oBtn10[3],page10_border,'64.2%','68.4%');
	

//  各个页面跳转按钮的点击

 music_btn.onclick=function(){
			 	if(s.playState == createjs.Sound.PLAY_SUCCEEDED && s.paused == false){
			 		s.paused=true;
				 	music_btn.appendChild(img[70]);
				 	music_btn.style.paddingTop = '4px';
			 	}else{
			 		s.play();
			 		music_btn.innerHTML='';
			 	}
			 	
			 }
    next.onclick = function() {
	
		if(page1_border.style.position!==''){
		img[5].src = arrey[7];
		page2.style.zIndex = 12;
		}
	}
	next2.onclick = function() {
		if(page2_border1.style.position!==''||page2_border2.style.position!==''){
		img[11].src = arrey[7];
		page3.style.zIndex = 13;
		}
	
	}
	next3.onclick = function() {
		if(page3_border.style.position!==''){
			img[26].src = arrey[7];
			page4.style.zIndex = 14;
		}
	}
	next4.onclick = function() {
		if(page4_border.style.position!==''){
			img[16].src = arrey[7];
			page5.style.zIndex = 15;
		}
		
	}
	next5.onclick = function() {
		if(page5_border.style.position!==''){
			img[36].src = arrey[7];
			page6.style.zIndex = 16;
		}
		
	}
  	next6.onclick = function() {
  		if(page6_border.style.position!==''){
			img[41].src = arrey[7];
			page7.style.zIndex = 17;
		}
		
	}
  	next7.onclick = function() {
  		if(page7_border.style.position!==''){
			img[62].src = arrey[7];
			page8.style.zIndex = 18;
		}
		
	}
  	next8.onclick = function() {
  		if(page8_border.style.position!==''){
			img[67].src = arrey[7];
			page9.style.zIndex = 19;
		}
		
	}
    next9.onclick = function() {
    	if(page9_border.style.position!==''){
			img[21].src = arrey[7];
			page10.style.zIndex = 20;
		}
		
	}
    next10.onclick = function() {
    	if(page10_border.style.position!==''){
			img[31].src = arrey[7];
			page11.style.zIndex = 21;
			img[52].src=arrey[48];
  			page11_btn1.appendChild(img[52]);
  			page11_btn1.onclick=function(){
  				img[52].src=arrey[49];
  				page12.style.zIndex = 22;
  			}
 		    page12_img1.style.backgroundSize="100% 100%";
 		    page12_img2.style.backgroundImage="url("+arrey[51]+")";
 		    page12_img2.style.backgroundSize="100% 100%";
 		    page12_img3.style.backgroundImage="url("+arrey[78]+")";
	  		img[55].src=arrey[52];
	  		page12_btn1.appendChild(img[55]);
	  		img[56].src=arrey[53];
	  		page12_btn2.appendChild(img[56]);
	  			page12_btn1.onclick=function(){
	  				img[55].src=arrey[54];
	  				img[56].src=arrey[53];
	  				window.location.href="http://b.mashort.cn/h.jXiYk?cv=AACimxuG&sm=80e2cb";
  				}
  				page12_btn2.onclick=function(){
	  				img[56].src=arrey[55];
	  				img[55].src=arrey[52];
	  				page13.style.zIndex = 51;
  				}
  			//	答案的选择
	
			if(page8_border.style.top=='29.7%'){
				page11_img.style.backgroundImage="url("+arrey[56]+")";
     		    page11_img.style.backgroundSize="100% 100%";
     		    page12_img1.style.backgroundImage="url("+arrey[57]+")";
     		    shareWX("艺术男型直男癌");
		   }else if(page8_border.style.top=='41.2%'){
		   		page11_img.style.backgroundImage="url("+arrey[60]+")";
     		    page11_img.style.backgroundSize="100% 100%";
     		    page12_img1.style.backgroundImage="url("+arrey[61]+")";
     		    shareWX("高知型直男癌")
		   }else if(page8_border.style.top=='52.7%'){
		   		page11_img.style.backgroundImage="url("+arrey[58]+")";
     		    page11_img.style.backgroundSize="100% 100%";
     		    page12_img1.style.backgroundImage="url("+arrey[59]+")";
     		    shareWX("大哥型直男癌")
		   }else if(page8_border.style.top=='64.2%'){
		   		page11_img.style.backgroundImage="url("+arrey[47]+")";
     		    page11_img.style.backgroundSize="100% 100%";
     		    page12_img1.style.backgroundImage="url("+arrey[50]+")";
     		    shareWX("工科男型直男癌");
		   }
			
		}
		
	}
      
      
    }
  };


  ImageLoader.start = 0;
  ImageLoader.complete = false;
  ImageLoader.Cache = {};

  ImageLoader.loader = function(imageLoader, url){
    var img = new Image();

    img.onload = function(){
      imageLoader.notify("success");
	 
      img = null;
    };

    img.onerror = function(){
      imageLoader.notify("failed");

      img = null;
    }

    img.src = url;
  };
  ImageLoader.timeout = function(){
    var end = (new Date().getTime());
    var diff = end - ImageLoader.start;

    return (diff >= 5000);
  };

  ImageLoader.getImageLoader = function(name){
    var loader = ImageLoader.Cache[name] || (ImageLoader.Cache[name] = new ImageLoader());

    return loader;
  }

  	var loader = ImageLoader.getImageLoader("progress");
  	//第一页图片+下标
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FA.gif');//0
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FB.gif');//1
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FC.gif');//2
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fd.gif');//3
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fbg.gif');//4
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion1.gif');//5
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fnext_btn.gif');//6
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fnext_click.gif');//7
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fchoice_border.gif');//8
	//	第二页图片
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FA2.gif');//9
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FB2.gif');//10
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FC2.gif');//11
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FD2.gif');//12
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion2.gif');//13
	//	第四页图片
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FA4.gif');//14
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FB4.gif');//15
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FC4.gif');//16
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FD4.gif');//17
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion4.gif');//18
	//	第九页图片
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FA9.gif');//19
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FB9.gif');//20
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FC9.gif');//21
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FD9.gif');//22
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion9.gif');//23
	//	第三页图片
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FA3.gif');//24
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FB3.gif');//25
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FC3.gif');//26
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FD3.gif');//27
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion3.gif');//28
	//第十页	
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FA10.gif');//29
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FB10.gif');//30
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FC10.gif');//31
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FD10.gif');//32
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion10.gif');//33
	//第五页	
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FA5.gif');//34
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FB5.gif');//35
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FC5.gif');//36
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FD5.gif');//37
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion5.gif');//38
	//第六页
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FA6.gif');//39
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FB6.gif');//40
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FC6.gif');//41
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FD6.gif');//42
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion6.gif');//43



	//边框
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion1_border.gif');//44
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion2_border.gif');//45
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion3_border.gif');//46
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fgongke_answer.gif')//47
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fsolution_btn.gif')//48
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fsolution_click.gif')//49
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fgongkeway.png')//50
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fproduct.gif')//51
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fbuy_click.gif')//52
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fpolice_btn.gif')//53
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fbuy_btn.gif')//54
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fpolice_click.gif')//55
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fyishu_answer.gif')//56
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fyishuway.png')//57
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fdage_answer.gif')//58
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fdageway.png')//59
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fgaozhi_answer.gif')//60
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fgaozhiway.png')//61
	//封面
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fcover.gif')//62
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fcover_btn.gif')//63
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fcover_click.gif')//64
	//第七张
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FA7.gif');//65
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FB7.gif');//66
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FC7.gif');//67
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FD7.gif');//68
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion7.gif');//69
	//第八张
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FA8.gif');//70
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FB8.gif');//71
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FC8.gif');//72
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2FD8.gif');//73
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fquestion8.gif');//74
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fshare.gif');//75
	
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fmusic_btn.png');//76
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Fmusic_pause.png');//77
	loader.add('http://zimeitisucai.oss-cn-beijing.aliyuncs.com/resource%2Fcancerman%2Ferweima.png');//78
	loader.load();
	})();
	
}


function border_location(element1,element2,top_percent,left_percent){
element1.onclick=function(){
		element2.style.position = 'absolute';
		element2.style.top = top_percent;
		element2.style.left = left_percent; 
	}
}
function border_location2(element1,element2,element3,top_percent,left_percent){
	element1.onclick=function(){
		element2.style.display='block';
		element2.style.position = 'absolute';
		element2.style.top = top_percent;
		element2.style.left = left_percent;
		element3.style.display='none';
	}
}

function shareWX(man_type){
	content.desc="原来我是" + man_type + "！！你也快来试试吧！";
	contentCir.title=content.desc;
	contentCir.desc = content.desc;
	wx.onMenuShareTimeline(contentCir);
	wx.onMenuShareAppMessage(content);
 }


