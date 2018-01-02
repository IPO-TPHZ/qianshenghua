package com.lxit.qshclient.actions;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class JiaXinBaoController {
	@RequestMapping("/jiaXinBao")
	public String jiaXinBao(){
		return "jiaxinbaoqiqi.html";
	}
}
