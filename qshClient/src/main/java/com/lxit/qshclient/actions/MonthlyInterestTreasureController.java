package com.lxit.qshclient.actions;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class MonthlyInterestTreasureController {
	@RequestMapping("/monthly")
	public String monthlyr() {
		return "yuelibao.html";
	}
	
	@ResponseBody
	@RequestMapping("/monthlyInterest")
	public String monthlyInterest() {
		System.out.println("�����ѯ������");
		return "true";
	}
	
	@ResponseBody
	@RequestMapping("/monthlyInterestInster")
	public String monthlyInterestInster() {
		System.out.println("����Ͷ��������");
		return "true";
	}
}
