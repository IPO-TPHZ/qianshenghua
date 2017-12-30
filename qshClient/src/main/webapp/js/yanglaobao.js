$(function() {
	$.ajax({
			url : "getPensionTreasure",
			type : "post",
			success : function(result) {
				var all = '<div class="pro_detail">'
						+ '<div class="hd clearfix">'
						+ '<h3>'
						+ '养老宝12期 <span>(编号：10002)</span>'
						+ '</h3>'
						+ '<p class="invest">'
						+ '已投笔数: <span class="cGold">23次</span>'
						+ '</p>'
						+ '</div>'
						+ '<div class="bd clearfix">'
						+ '<div class="item">'
						+ '<span>年化利率（历史）</span>'
						+ '<p class="cGold">9%</p>'
						+ '</div>'
						+ '<div class="item">'
						+ '<span>项目期限</span>'
						+ '<p class="cGold">12个月</p>'
						+ '</div>'
						+ '<div class="item noborder">'
						+ '<span>还款方式</span>'
						+ '<p class="cGold">每月返息，到期还本</p>'
						+ '</div>'
						+ '<div class="clear"></div>'
						+ '<div class="item">'
						+ '<span>本期总借款额</span>'
						+ '<p class="cGold">30000000.00元</p>'
						+ '</div>'
						+ '	<div class="item noborder">'
						+ '<span>起息时间</span>'
						+ '<p class="cGold">购买后下一工作日</p>'
						+ '</div>'
						+ '</div>'
						+ '<div class="ft">'
						+ '安全保障：<a href="securityAssurance.html" target="_blank" title="钱生花安全保障">详情参见钱生花安全保障</a>'
						+ '	</div></div>';
					$("#inner_mylist").html($(all));
			}
		})
})
