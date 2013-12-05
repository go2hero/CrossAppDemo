// JavaScript Document


var canvas_Big=null;
var context_Big=null; 
var htmlWidth=0;
var htmlHeight=0;
var sideBarWidth=0;

window.addEventListener("load",start,true);
function start()
{		
	
	initSize();
	initSideBar();
	ShowImage("canvas_1");	
}

function initSize()
{		
	htmlWidth = Math.min($(window).width(),1024);
	htmlHeight =  $(window).height();
	var sideBar=document.getElementById("side_nav");	
	sideBarWidth=htmlWidth*0.2;
	mainWidth=htmlWidth*0.8-30;
	mainHeight=htmlHeight-137;
	sideBar.style.width=sideBarWidth+"px";
	sideBar.style.height=mainHeight+"px";
	var mainSection=document.getElementById("main_section");
	mainSection.style.width=htmlWidth*0.8-20+"px";
	mainSection.style.height=htmlHeight-117+"px";
	document.getElementById("new_div").style.height=htmlHeight-117+"px";
}
function initSideBar()
{
	//var img=null;
//	var c=null;
//	var ctx=null;
//	
//	for (var i=1;i<5;i++)
//	{
//		img=new Image();
//		img.src="small_"+i+".bmp";
//		c=document.getElementById("canvas_"+i);
//		ctx=c.getContext("2d");
//		img.onload=function()
//		{
//		//	ctx.drawImage(img,0,0,200,200);
////			console.log("drawimage");
////			ctx.save();
//			
//		var zoom= Math.min( sideBarWidth / img.width,sideBarWidth/img.height );
//		$("#side_nav").width(parseInt (sideBarWidth));
//		$("#canvas_"+i).width(parseInt(zoom*img.width, 10));
//		$("#canvas_"+i).height(parseInt(zoom*img.width, 10));
//		var left=( sideBarWidth-$("#canvas_"+i).width())/2;
//		var top=(sideBarWidth-$("#canvas_"+i).height())/2;
//		ctx.drawImage(img,left,top,$("#canvas_"+i).width(),$("#canvas_"+i).height());
//		}
//		delete ctx;
//		delete c;
//		delete img;
//		
//		
//		
//	}
		
		var cavasWidth=sideBarWidth*0.9;
		
		var img1=new Image();
		img1.src="img/small_1.bmp";
		var c1=document.getElementById("canvas_1");
		c1.width=parseInt(cavasWidth, 10);
		c1.height=parseInt(cavasWidth, 10);
		var ctx1=c1.getContext("2d");
		img1.onload=function()
		{
			var zoom= Math.min( cavasWidth / img1.width,cavasWidth/img1.height );
			var left=(cavasWidth-$("#canvas_1").width())/2;
			var top=(cavasWidth-$("#canvas_1").height())/2;
			ctx1.drawImage(img1,left,top,$("#canvas_1").width(),$("#canvas_1").height());
		}
	
	var img2=new Image();
	img2.src="img/small_2.bmp";
	var c2=document.getElementById("canvas_2");
	c2.width=parseInt(cavasWidth, 10);
	c2.height=parseInt(cavasWidth, 10);
	var ctx2=c2.getContext("2d");
	img2.onload=function()
	{
		var zoom= Math.min( cavasWidth / img2.width,cavasWidth/img2.height );
		var left=( cavasWidth-$("#canvas_2").width())/2;
		var top=(cavasWidth-$("#canvas_2").height())/2;
		ctx2.drawImage(img2,left,top,$("#canvas_2").width(),$("#canvas_1").height());
		
	}
	
	var img3=new Image();
	img3.src="./img/small_3.bmp";
	var c3=document.getElementById("canvas_3");
	c3.width=parseInt(cavasWidth, 10);
	c3.height=parseInt(cavasWidth, 10);
	var ctx3=c3.getContext("2d");
	img3.onload=function()
	{
		var zoom= Math.min( cavasWidth / img3.width,cavasWidth/img3.height );
		var left=( cavasWidth-$("#canvas_3").width())/2;
		var top=(cavasWidth-$("#canvas_3").height())/2;
		ctx3.drawImage(img3,left,top,$("#canvas_3").width(),$("#canvas_3").height());
	}
	var img4=new Image();
	img4.src="./img/small_4.bmp";
	var c4=document.getElementById("canvas_4");
	c4.width=parseInt(cavasWidth, 10);
	c4.height=parseInt(cavasWidth, 10);
	var ctx4=c4.getContext("2d");
	img4.onload=function()
	{
		var zoom= Math.min( cavasWidth / img4.width,cavasWidth/img4.height );
		var left=( cavasWidth-$("#canvas_4").width())/2;
		var top=(cavasWidth-$("#canvas_4").height())/2;
		ctx4.drawImage(img4,left,top,$("#canvas_4").width(),$("#canvas_4").height());
	}
}
function ShowImage(id)
{	
	
	var index=id.substr(7,1);
	var img=new Image();
	
	img.src="./img/big_"+index+".bmp";
	img.onload=function()
	{
		var zoom= Math.min(mainWidth/img.width, mainHeight/img.height );
		
		canvas_Big=document.getElementById("canvas_Big");
		context_Big=canvas_Big.getContext("2d");
		canvas_Big.width=mainWidth;
		canvas_Big.height=mainHeight;
		var left=( mainWidth-parseInt(zoom*img.width, 10))/2;		
		var top=( mainHeight-parseInt(zoom*img.height, 10))/2;
		context_Big.drawImage(img,left,top,zoom*img.width,zoom*img.height);
	}
	delete img;	
}

//图像反色
function revert()
{
	var w=$("#canvas_Big").width();
	var h=$("#canvas_Big").height();
	var imagedata=$("#canvas_Big").getImageData(0,0,w,h);
			var imagedata1=$("#canvas_Big").createImageData(w,h);
			for (var j=0;j<h;j++)
			{
				for (var i=0;i<w;i++)
				{
					k=4*(w*j+i);
					imagedata1.data[k+0]=255-imagedata.data[k+0];
					imagedata1.data[k+1]=255-imagedata.data[k+1];
					imagedata1.data[k+2]=255-imagedata.data[k+2];
					imagedata1.data[k+3]=255;					
				}			
			}
	$("#canvas_Big").putImageData(imagedata1,0,0);
}
function Select()
{
	ifSelect=true;
}

function resetPic()
{
	context_Big.restore();
}