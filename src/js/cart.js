//1.将推荐的商品的数据渲染出来
;(function fn(){
	$.ajax({
		url:'http://localhost/item/src/php/newgoods.php',
		dataType:'json'
	}).done(function(d){
		var $goods=$('.ng-ul');
		var $html =`<p class="p-word">新品推荐</p>
		<li class="ng-left"><a href="javascript:;"></a></li>`;
		$.each(d,function(index,value){
			
			$html+=`<li sid=${value.gid} class="yc">
						<img src=${value.url} alt="">
						<p>${value.title}</p>
						<p style="font-size: 14px;color: #ff5c00;margin-top:20px;text-align: center;">${value.price}</p>
						<a href="javascript:;" style="margin:20px auto 0;width: 80px;height: 28px;background: #ff5c00;line-height: 28px;text-align: center; color: #fff;border-radius: 3px;" class="yc-1" sid=${value.gid}>加入购物车</a>
					</li>`;
		})
		$html+=`<li class="ng-right"><a href="javascript:;"></a></li>
		<div class="clear"></div`;
		$goods.append($html);
	}).fail(function(e){
		console.log(e);
	})
})();
/*
$('.ng-ul').on('click','.yc .yc-1',function(){
	$.ajax({
		url:'json/cart.json',
		dataType:'json'
	}).done(function(d){
//		var $goods=$('.ng-ul');
//		var $html =``;
		
			console.log($(this));
			//if()
		
		//$goods.append($html);
	}).fail(function(e){
		console.log(e);
	})
	
});*/

$('.plus').on('click',function(){
	$.num=$('.input-num').val();
	$('.input-num').val(++$.num);
	$('.cbb-li strong').html($.num);
	var cPrice=49*$.num;
	$('.cbb-price').html(cPrice);
});
$('.minus').on('click',function(){
	$.num=$('.input-num').val();
	if($.num>2){
		$('.input-num').val(--$.num);
	}else{
		$('.input-num').val(2);
		
	}
	$('.cbb-li strong').html($.num);
	var cPrice=49*$.num;
	$('.cbb-price').html(cPrice);
});
$('.del').on('click',function(){
	$('.cb-bot ul').hide();
	$('.emptycart').show();
});
