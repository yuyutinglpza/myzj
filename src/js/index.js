;(function fn(){
	$.ajax({
		url:'http://localhost/item/src/php/goods.php',
		dataType:'json'
	}).done(function(d){
		var $goods=$('.nr-r1');
		var $html = '';
		$.each(d,function(index,value){
			
			$html+=`<div class="f-goods">
						<a href="#"><img src="${value.url}"/></a>
						<ul style="width: 438px;float: right;margin-right: 20px;">
							<li><h2><a href="#">${value.title}</a></h2></li>
							<li class="anno"><a href="#">${value.anno}</a></li>
							<li class="price">
							<i>￥${value.price}起</i>
							<a href="http://localhost/item/src/details.html"><span class="span${value.gid}">点击进入</span></a>
							</li>
						</ul>
						<div class="clear">	
						</div>
					</div>`;
		})
		
		
		$goods.append($html);
	}).fail(function(e){
		console.log(e);
	})
})();
	

;(function fn1(){
	$.ajax({
		url:'http://localhost/item/src/php/goods2.php',
		dataType:'json'
	}).done(function(d){
		var $goods=$('.nr-r2');
		var $html2 = '';
		$.each(d,function(index,value){
			
			$html2+=`<div class="f-goods">
						<a href="#"><img src="${value.url}"/></a>
						<ul style="width: 438px;float: right;margin-right: 20px;">
							<li><h2><a href="#">${value.title}</a></h2></li>
							<li class="anno"><a href="#">${value.anno}</a></li>
							<li class="price">
							<i>￥${value.price}起</i>
							<a href="#"><span class="span${value.gid}">点击进入</span></a>
							</li>
						</ul>
						<div class="clear">	
						</div>
					</div>`;
		})
		
		
		$goods.append($html2);
	}).fail(function(e){
		console.log(e);
	})	
})();

;(function fn2(){
	$.ajax({
		url:'http://localhost/item/src/php/goods3.php',
		dataType:'json'
	}).done(function(d){
		var $goods=$('.p-b-ul li' );
		var $html2 = '';
		$.each(d,function(index,value){
			if(value.gid3==1 || value.gid3==10){
				$html2+=`<a href="#" id="big"><img src="${value.url}"/></a>`;
			}else{
				$html2+=`<a href="#"><img src="${value.url}"/></a>`;
			}
			
			
			
		})
		
		$goods.append($html2);
	}).fail(function(e){
		console.log(e);
	})	
})();

//轮播图：
/*;(function fn2(){
	$.ajax({
		url:'http://localhost/item/src/php/lunbo.php',
		dataType:'json'
	}).done(function(d){
		var $goods=$('.m-t-t' );
		var $html2 = '';
		$.each(d,function(index,value){
			$html2+=`<li><img src="${value.url}"/></li>`;
			
		});
		$html2+='<div class="clear"></div>';
		$goods.append($html2);
	}).fail(function(e){
		console.log(e);
	})	
})(); 
*/
	var $btn = $('.m-top ol li')
    var $pic = $('.m-t-t li');
    var $liwidth = $pic.eq(0).width();
    var $num = 0;
    //改变布局
    $('.m-t-t').append($pic.first().clone(true));
    $('.m-t-t').prepend($pic.last().clone(true));
    $('.m-t-t').width($('.m-t-t li').length * $liwidth).css('left', -$liwidth);

    //添加事件
    $btn.on('mouseover', function() {
        $num = $(this).index(); //获取一个索引，如果为负数，倒着数
        console.log($num)
        tabswitch();
    });

    function tabswitch() {
    	$btn.eq($num).addClass('active').siblings('li').removeClass('active');
        $('.m-t-t').stop(true,true).animate({
            left: -$liwidth * ($num + 1)
        },function(){
            if(parseInt($('.m-t-t').css('left'))==-($btn.length+1)*$liwidth){
                $('.m-t-t').css('left',-$liwidth+'px');
                $num=0;
            }
            if(parseInt($('.m-t-t').css('left'))==0){
                $('.m-t-t').css('left',-$liwidth*$btn.length+'px');
                $num=$btn.length-1;
            }
        })
    }

	var $louti=$('.f-l-top');//楼梯
    var $loutia=$('#fixleft .f-l-top a');//楼梯子元素li
    var $louceng=$('#mainer .m-mid .m-m-t .title');//楼层
    
   
    			
    $loutia.on('click',function(){
    	var $top=$louceng.eq($(this).index()).offset().top;//当前楼梯li项对应的楼层的top值。
    	$('html,body').animate({
    		scrollTop:$top
    		
    	});
	});

    

   