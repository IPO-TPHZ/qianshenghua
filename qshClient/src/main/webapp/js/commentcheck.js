var setIn = null;
var color = $('#smsBtn').css('background');
var sms_number = 0;
var sms_job = 0;
var yzm = null;

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
			data : {
				phone : "13715235608",
				value : 1
			},
			success : function(result) {
				if (result.msg == "success") {
					yzm = result.yzm;
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

function _error(invest,cc) {
	var check = $('#checkbox').attr("checked");
	var money = $('#money').val();
	var smsMobile = $('#smsMobile').val();
	console.log(money);
	if (money < invest) {
		zeroModal.error('最低起投资金为' + invest + '元!');
	}else if(cc == 3){
		if (money % 10000 != 0) {
			zeroModal.error('投资金必须为10000的倍数!');
		}
	} else if (sms_job == 0) {
		zeroModal.error('请先获取验证码!');
	} else if (smsMobile == "") {
		zeroModal.error('请输入验证码!');
	} else if (smsMobile != yzm) {
		zeroModal.error('您输入的验证码有误!');
	} else if (check != "checked") {
		zeroModal.error('请同意接受相关协议!');
	} else {
		alert("弹出投资框")
		// 投标弹框显示
		$.gDialog.alert(
						'<div i="dialog" class="ui-dialog" id="thisDia">'
								+ '<div class="ui-dialog-arrow-a"></div>'
								+ '<div class="ui-dialog-arrow-b"></div>'
								+ '<table class="ui-dialog-grid">'
								+ '<tbody>'
								+ '<tr>'
								+ '<td i="body" class="ui-dialog-body" style="padding: 0px;"><div i="content" class="ui-dialog-content" id="content:1514466549673">'
								+ '<div class="diol_pwd" style="width:400px;border:0">'
								+ '<div class="form_main">'
								+ '<div class="form_group mb0 d_prodt clearfix">'
								+ '<div class="form_ttl">产品名称</div>'
								+ '<div class="form_input">养老宝·12-M</div>'
								+ '<i class="err_icon"></i>'
								+ '<div class="dio_info">'
								+ '<i class="err_arrow"></i>' + '</div></div>'
								+ '<div class="form_group mb0 clearfix">'
								+ '<div class="form_ttl d_tit">购买金额</div>'
								+ '<div class="form_input">'
								+ '<span class="dio_money">'
								+ money
								+ '</span>元</div></div>'
								+ '<div class="form_group mb0 clearfix coupon" style="display: none;">'
								+ '<div class="form_ttl dio_buy">优惠券</div>'
								+ '<div class="form_input">'
								+ '<span class="dio_money">0</span>元</div></div>'
								+ '<div class="form_group mb0 clearfix coupon" style="display: none;">'
								+ '<div class="form_ttl dio_buy">实际付款</div>'
								+ '<div class="form_input">'
								+ '<span class="dio_money">'
								+ money
								+ '</span>元'
								+ '</div></div>'
								+ '<div class="form_group mb0 clearfix">'
								+ '<div class="form_ttl">可用余额</div>'
								+ '<div class="form_input">'
								+ '<span class="dio_money">0</span>元'
								+ '</div></div><div class="form_group mb0 clearfix">'
								+ '<div class="form_ttl">银行扣款</div>'
								+ '	<div class="form_input">'
								+ '<span class="dio_money">100000</span>元'
								+ '</div></div>'
								+ '<div class="form_group mb0 clearfix">'
								+ '<div class="form_ttl">银行账号</div>'
								+ '<div class="form_input">建设银行(尾号*514)</div>'
								+ '<i class="err_icon"></i>'
								+ '<div class="dio_info">'
								+ '<i class="err_arrow"></i>'
								+ '</div></div>'
								+ '<div class="form_group mb10 clearfix">'
								+ '<div class="form_ttl">手机号</div>'
								+ '<div class="form_input">176*****832</div>'
								+ '</div>'
								+ '<div class="form_group clearfix" id="recommendInput">'
								+ '<div class="form_ttl">推荐人</div>'
								+ '	<div class="form_input">'
								+ '<input type="text" id="payRecommend"	placeholder="推荐人手机号（选填）" class="dio_picon">'
								+ '</div>'
								+ '	<i class="err_icon"></i>'
								+ '<div class="dio_info">'
								+ '<i class="err_arrow"></i><span></span>'
								+ '</div>'
								+ '</div>'
								+ '<div class="form_group clearfix">'
								+ '<div class="form_ttl">短信验证码</div>'
								+ '<div class="form_input">'
								+ '<input type="text" id="validCode" class="form_input_code">'
								+ '<button class="form_code" id="quickCode"	onclick="HHN.dialog.getcodeQuick(472190778,100000);">发送验证码</button>'
								+ '<i class="err_icon"></i>'
								+ '<div class="dio_info">'
								+ '	<i class="err_arrow"></i><span></span>'
								+ '</div> <input type="hidden" id="token" value=""> <input type="hidden" id="externalRefNumber" value="">'
								+ '</div>'
								+ '</div>'
								+ '<div class="form_group form_group_last clearfix">'
								+ '<div class="form_ttl"></div>'
								+ '<div class="form_input">'
								+ '<a href="javascript:;" id="submit2" class="diol_opt submit">确认</a>'
								+ '</div>'
								+ '</div>'
								+ '<p id="dio_error"></p>'
								+ '</div>'
								+ '</div>'
								+ '</div></td>'
								+ '	</tr>'
								+ '<tr>'
								+ '<td i="footer" class="ui-dialog-footer" style="display: none;"><div i="statusbar" class="ui-dialog-statusbar"	style="display: none;"></div>'
								+ '<div i="button" class="ui-dialog-button"></div></td>'
								+ '	</tr></tbody></table></div>',
						{
							title : "确认购买信息"
									+ "<button class='ui-dialog-close' title='取消'><img src='./img/x_close.png' style='width:40px;height:40px;color:red;margin-top:-15px;margin-rigth:-15px;'></button>",
							animateIn : "bounceIn",
							animateOut : "bounceOut"
						});
	}
}