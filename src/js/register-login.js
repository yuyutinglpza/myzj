//登录注册的tab切换
$('#mainer button').on('click',function(){
		$(this).addClass('active').removeClass('dl').siblings('button').removeClass('active').addClass('dl');
		$('.dl .a-pic').css({'background-position': '-289px -8px'});
		$('.active .a-pic').css({'background-position': '-263px 1px'});
		
		if($(this).index()==0){
			$('.register').css({'display':'block'});
			$('.login').css({'display':'none'});
			
		}else if($(this).index()==1){
			$('.login').css({'display':'block'});
			$('.register').css({'display':'none'});
			
		}
});

/*-------------正则表单验证-----------*/

	var bstop1=true;//不通过
	var bstop2=true;
	var bstop3=true;
	var bstop4=true;
	//所有表单样式
	$('#mainer input').on('focus',function(){
		$(this).css({'border-color':'#ff5c00'});
	});
	$('#mainer input').on('blur',function(){
		$(this).css({'border-color':'#c1c1c1'});
	});
	//手机号：
	$('.p-num').on('blur',function(){
		$reg=/^1[3789]\d{9}/;
		if(!($reg.test($('.p-num').val())) || $('.p-num').val()==''){
			$('.s1').css({'display':'block'});
			bstop1=true;
		}else{
			$('.s1').css({'background':'url(img/onSuccess.gif) no-repeat -2px -3px','display':'block','height':'18px','border':'0'})
			$('.s1').html('');
			bstop2=false;
		}
	});

	
	//密码：
	$('.pass').on('focus',function(){
		$('.s2-1').css({'display':'block'});
		if($('.s2').css({'display':'block'})){
			$('.s2').css({'display':'none'})
		}
		$('.pass').on('input',function(){
			$passvlue=$('.pass').val();
			$reg1=/\d+/g;
			$reg2=/[a-zA-Z]+/g;
			$reg3=/\W+/g;
			$count=0;
			
			if($passvlue.length>=6 && $passvlue.length<=20){
				if($reg1.test($passvlue)){
					$count++;
				}
				if($reg2.test($passvlue)){
					$count++;
				}
							
				if($reg3.test($passvlue)){
					$count++;
				}
				$('#min').css({'background':'#ccc'});
				$('#center').css({'background':'#ccc'});
				$('#max').css({'background':'#ccc'});
				switch($count){
							
					case 1: $('#min').css({'background':'orange'});break;
					case 2: $('#center').css({'background':'greenyellow'});break;
					case 3: $('#max').css({'background':'#00FF00'});break;
				}		
			}
			return bstop=true;	
		})
	});
	$('.pass').on('blur',function(){
		
		if($('.pass').val()==''){
			$('.s2').css({'display':'block'});
			$('.s2-1').css({'display':'none'});
			bstop2=true;
		}else{
			$('.s2').css({'background':'url(img/onSuccess.gif) no-repeat -2px -3px','display':'block','height':'18px','border':'0'})
			$('.s2').html('');
			bstop2=false;
		}
		if($('.s2-1').css({'display':'block'})){
			$('.s2-1').css({'display':'none'})
			bstop2=true;
		}
	});
	//确认密码：
	$('#passagain').on('blur',function(){
		if($('#passagain').val()==''){
			$('.s3').css({'display':'block'});
			bstop3=true;
		}else if($('#passagain').val()!=$('.pass').val()){
			$('.s3').css({'display':'block'});
			$('.s3').html('2次密码不一致，请重新输入');
			bstop3=true;
		}else{
			$('.s3').css({'background':'url(img/onSuccess.gif) no-repeat -2px -3px','display':'block','height':'18px','border':'0'})
			$('.s3').html('');
			bstop3=false;
		}
	});
	/*---------验证码---------------*/
	//切换验证码：
	$('#yzm-1').on('click',function(){
		$arr=[];
		$str='';
		for($i=48;$i<=57;$i++){
			$arr.push(String.fromCharCode($i));
		}
		for($i=65;$i<=90;$i++){
			$arr.push(String.fromCharCode($i));
		}
		for($i=97;$i<=122;$i++){
			$arr.push(String.fromCharCode($i));
		}
		for($i=0;$i<4;$i++){
			$ranNum=parseInt(Math.random()*$arr.length);
			$str+=$arr[$ranNum];
		}
		$('#yzm-1').html($str);
	});
	//验证验证码：
	$('.yzm').on('blur',function(){
		if($('.yzm').val()!=$('#yzm-1').html() || $('.yzm').val()==''){
			$('.s4').css({'display':'block'});
			bstop4=true;
		}else{
			$('.s4').css({'background':'url(img/onSuccess.gif) no-repeat -2px -3px','display':'block','height':'18px','border':'0'})
			$('.s4').html('');
			bstop4=false;
		}
	});
	
	
	/*$('.submit').on('submit'function(){
		if(bstop1 && bstop2 && bstop3 && bstop4){
			return false;//阻止按钮跳转。
		}
	});*/
	
	$('.submit1').on('click',function(){
		var phonenum=$('.p-num').val();
		var password1=$('.pass').val();
		if(bstop1 && bstop2 && bstop3 && bstop4){
			alert('信息有误，请重新输入');
			return false;
		}else{
			$.ajax({
				type:"post",
				url:"http://localhost/item/src/php/reg.php",
				data:{
					"phonernumber":phonenum,
					"pass":password1
				},
				success:function(d){
					if(d){
						alert('登录成功');
						window.location.href="inndex.html";
						
					}
				}
			});
		}
	})


