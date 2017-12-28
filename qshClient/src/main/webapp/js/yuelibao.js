$(function() {
	$.ajax({
		url : "monthlyInterest",
		type : "post",
		dataType : "json",
		success : function(result) {
			var sum = '<div class="pro_detail">'
					+ '<div class="hd clearfix">'
					+ '<h3>'
					+ '月利宝1期 <span>(编号：10015)</span>'
					+ '</h3>'
					+ '<p class="invest">'
					+ '	已投笔数: <span class="cGold">616次</span>'
					+ '</p>'
					+ '</div>'
					+ '<div class="bd clearfix">'
					+ '<div class="item">'
					+ '<span>年化利率（历史）</span>'
					+ '<p class="cGold">5%</p>'
					+ '</div>'
					+ '<div class="item">'
					+ '<span>项目期限</span>'
					+ '<p class="cGold">1个月</p>'
					+ '</div>'
					+ '<div class="item noborder">'
					+ '<span>还款方式</span>'
					+ '<p class="cGold">到期还本付息</p>'
					+ '</div>'
					+ '<div class="clear"></div>'
					+ '<div class="item">'
					+ '<span>本期总借款额</span>'
					+ '<p class="cGold">50000000.00元</p>'
					+ '</div>'
					+ '<div class="item noborder">'
					+ '<span>起息时间</span>'
					+ '<p class="cGold">购买后下一工作日</p>'
					+ '</div>'
					+ '</div>'
					+ '<div class="ft">'
					+ '安全保障：<a'
					+ 'href="https://www.qianshenghua.com/fund/securityAssurance.html"'
					+ 'target="_blank" title="钱生花安全保障">详情参见钱生花安全保障</a>'
					+ '</div>' + '</div>';
			$('#inner_list1').prepend($(sum));

		}
	})
})

var setIn = null;
var color = $('#smsBtn').css('background');
var sms_number = 0;
var sms_job = 0;
var yzm=null;

function _smsBtn() {
	if (sms_number == 0) {
		sms_number = 1;
		sms_job = 1;
		$('#smsBtn').css("background", "#ccc");
		$('#smsBtn').css("color", "#fff");
		$('#smsBtn').css("line-height", "1.2");
		$('#smsBtn').html("免费获取<br><span id='job'>3</span>s");
		$.ajax({
			url : "yzm",
			type : "post",
			data:{
				phone:"13715235608",
				value:1
			},
			success : function(result) {
				if(result.msg=="success"){
					yzm=result.yzm;
				}
			}
		});
		setIn = setInterval("time()", 1000);
	}
}

function time() {
	var i = parseInt($('#job').text());
	if (i == 0) {
		clearInterval(setIn);
		$('#smsBtn').css("background", "#fff");
		$('#smsBtn').css("color", "#FFB002");
		$('#smsBtn').css("line-height", "2.4");
		$('#smsBtn').html("免费获取");
		sms_number = 0;
	} else {
		i--;
		$('#job').text(i);
	}
}


function _error(invest) {
	var check=$('#checkbox').attr("checked");
	var money = $('#money').val();
	var smsMobile = $('#smsMobile').val();
	if (money < invest) {
		zeroModal.error('最低起投资金为' + invest + '元!');
	} else if (sms_job == 0) {
		zeroModal.error('请先获取验证码!');
	} else if (smsMobile == "") {
		zeroModal.error('请输入验证码!');
	}else if(smsMobile!=yzm){
		zeroModal.error('您输入的验证码有误!');
	}else if(check!="checked") {
		zeroModal.error('请同意接受月利宝协议!');
	}else{
		alert("弹出投资框")
		//投标弹框显示
	}
}