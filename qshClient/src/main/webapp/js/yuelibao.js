$(function(){
	$.ajax({
		url:"monthlyInterest",
		type:"post",
		dataType:"json",
		success:function(result){
			//alert("===");
		}
	})
})

var setIn=null;
var color=$('#smsBtn').css('background');
var sms_number=0;
var sms_job=0;

function _smsBtn(){

	if(sms_number==0){
		sms_number=1;
		sms_job=1;
		$('#smsBtn').css("background","#ccc");
		$('#smsBtn').css("color","#fff");
		$('#smsBtn').css("line-height","1.2");
		$('#smsBtn').html("免费获取<br><span id='job'>3</span>s");
		$.ajax({
			url:"",
			type:"post",
			success:function(){
				
			}
		});
		setIn=setInterval("time()", 1000);
	}
}

function time(){
	var i=parseInt($('#job').text());
	if(i==0){
		clearInterval(setIn);
		$('#smsBtn').css("background","#fff");
		$('#smsBtn').css("color","#FFB002");
		$('#smsBtn').css("line-height","2.4");
		$('#smsBtn').html("免费获取");
		sms_number=0;
	}else {
		i--;
		$('#job').text(i);
	}
}

function _error(invest) {
	var money=$('#money').val();
	var smsMobile=$('#smsMobile').val();
	alert(sms_number);
	if(money<invest){
		zeroModal.error('最低起投资金为100元!');
	}else if(sms_job==0){
		zeroModal.error('请先获取短信验证!');
	}else if(smsMobile==""){
		zeroModal.error('请输入验证码!');
	}
	
     

    /*zeroModal.error({
        content: '请选择数据进行操作!',
        width: '800px'
    });*/
}