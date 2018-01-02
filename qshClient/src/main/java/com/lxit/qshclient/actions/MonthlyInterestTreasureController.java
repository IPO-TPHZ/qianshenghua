package com.lxit.qshclient.actions;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class MonthlyInterestTreasureController {
	@RequestMapping("/monthly")
	public String monthlyr() {
		return "yanglaobao.html";
	}
	
	@ResponseBody
	@RequestMapping("/monthlyInterest")
	public String monthlyInterest() {
		System.out.println("进入查询月利宝");
		return "true";
	}
	
	@ResponseBody
	@RequestMapping("/monthlyInterestInster")
	public String monthlyInterestInster() {
		System.out.println("进入投资月利宝");
		return "true";
	}
}
