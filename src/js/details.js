//鼠标经过小图显示小放和大放：
$('.smallpic').on('mouseover',function(){
	var bigscale=$('.bigscale');
	var smallpic=$('.smallpic');
	
	$('.smallscale').css({'visibility':'visible'});
	$('.bigscale').css({'display':'block'});
	
	//求小放的宽度：
	var w=$('.bigscale').width()*$('.smallpic').width()/$('.bigpic').width();
	var h=$('.bigscale').height()*$('.smallpic').height()/$('.bigpic').height();
	
	$('.smallscale').css({
		width:w,
		height:h,
	});
	//求比例：
	var bili=$('.bigpic').width()/$('.smallpic').width();
	
	//让小放跟着鼠标移动：
	$(this).on('mousemove',function(e){
		var e=e || window.event;
		var x=e.pageX-$('.scale').offset().left-w/2;
		var y=e.pageY-$('.scale').offset().top-h/2;
		if(x<0){
			x=0;
		}else if(x>=$('.smallpic').width()-$('.smallscale').width()-2){
			x=$('.smallpic').width()-$('.smallscale').width()-2;
		}
		
		if(y<0){
			y=0;
		}else if(y>=$('.smallpic').height()-$('.smallscale').height()-2){
			y=$('.smallpic').height()-$('.smallscale').height()-2;
		}
		
		$('.smallscale').css({
			left:x,
			top:y
		})
		$('.bigpic').css({
			left:-bili*x,
			top:-bili*y,
			visibility:'visible'
		});
		
	});
	$('.smallpic').on('mouseout',function(){
		$('.smallscale').css({'visibility':'hidden'});
		$('.bigscale').css({'display':'none'});
	});
	
});

$('.add').on('click',function(){
	$.num=$('#g-num').val();
	$('#g-num').val(++$.num);
});
$('.reduce').on('click',function(){
	$.num=$('#g-num').val();
	if($.num>2){
		$('#g-num').val(--$.num);
	}else{
		$('#g-num').val(2);
	}
});
//加入购物车：
$('.reduce').next('a').on('click',function(){
	
	$('.smallpic').append($('.smallpic img').clone(true).addClass('cloneimg').css({
		position: 'absolute',
    	left: 150,
    	top: 150,
    	width:50,
    	height:50,
    	opacity:0.3,
	}));
	var current={
		x:$('.cloneimg').offset().left,
		y:$('.cloneimg').offset().top
	};
	
	var target={
		x:$('.goodscart').offset().left-current.x,
		y:$('.goodscart').offset().top-current.y
	}
	
	var a=0.0025;
	var b=(target.y-a*target.x*target.x)/target.x;
	
	var speedx=10;
	var timer=0;
	timer=setInterval(function(){
		speedx+=10;
		if(speedx>=target.x){
			clearInterval(timer);
			$('.smallpic .cloneimg').remove();
		}
		$('.cloneimg').css({
			left:current.x+speedx,
			top:current.y+a*speedx*speedx+b*speedx
		})
		
		var goodsnum='('+$('#g-num').val()+')';
		$('.goodscart i').html(goodsnum);
		
	},20)

	
});
