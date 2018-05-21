<?php
	require "conn.php";
	if(isset($_POST['phonernumber']) && isset($_POST['pass'])){//
	    $phonenum=@$_POST['phonernumber'];//获取用户名
	    $password=@$_POST['pass'];//获取密码
	}else{
		exit('非法操作11');
	}
	//匹配用户名是否同时相等
	$query="select * from user where phonenum='$phonenum' and password='$password";
	$result=mysql_query($query);
	if($result){
	   echo false;//登陆失败
	}else{
		$phonenum=@$_POST['phonernumber'];//获取用户名
	    $password=@$_POST['pass'];
	    $query_register="INSERT INTO `user` (`phonenum`, `password`, `uid`) VALUES ('$phonenum', '$password', NULL)";
	    
	    mysql_query($query_register);
	    echo true;//登陆成功
	}
	header('Location:http://localhost/item/src/sy.html');
	//确认前端是否将手机号传输过来。
	//如果用户名存在，或者点击了submit按钮
	/*if(isset($_POST['phonenumber']) || isset($_POST['pass'])){
		$phonenum=@$_POST['phonenumber'];//@:容错
		$password=@$_POST['pass'];//@:容错
	}else{
		exit('非法操作');//输出文字，退出程序
	}
	//判断用户输入的手机号是否存在数据库中,引号。
	//username:数据库的字段
	//$username：前端传输过来的值
	$query1="select * from admin where phonenum='$phonenumber' and password='$pass'";

	$result=mysql_query($query1);//如果$result有结果，代表手机号存在数据库中
	
	if($result){//有重复
		echo true;//1
	}else{
		echo $phonenum.$password;
		$query="insert admin values(null,'$phonenum','$password')";
		echo $query;
		mysql_query($query);
		//header('Location:http://localhost/item/src/sy.html');
	}*/
	
	//注册的信息放置到数据库里面
		//跳转到sy.html页面
	
	
	/*require "conn.php";//引入数据库连接的文件
	if(isset($_POST['name']) || isset($_POST['submit'])){
		$username=@$_POST['name'];
	}else{
		exit('非法操作');
	}
	
	
	
	$query="select * from user where username='$username'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){//如果有值代表用户名存在。
		echo true;//有重复
	}else{
		echo false;//没有重复
	}
	
	if(isset($_POST['submit']) && $_POST['submit']=="注册"){
		$user=$_POST['username'];//username：表单的名称
		$pass=md5($_POST['password']);
		$email=$_POST['email'];
		$query="insert user(username,password,email,regdate) values('$user','$pass','$email',NOW())";
		mysql_query($query);
		header('location:login.html');
	}*/
?>