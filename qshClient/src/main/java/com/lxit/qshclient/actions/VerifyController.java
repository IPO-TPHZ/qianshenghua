package com.lxit.qshclient.actions;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeoutException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.Gson;
import com.lxit.qshclient.view.ResultOne;
import com.wxapi.WxApiCall.WxApiCall;
import com.wxapi.model.RequestModel;

import net.rubyeye.xmemcached.MemcachedClient;
import net.rubyeye.xmemcached.exception.MemcachedException;

@Controller
public class VerifyController {

	private MemcachedClient memcachedClient;
	
	@RequestMapping("/nameAuthentication")
	public String checkIdCard(String name, String idCard) {
		try {
			name = new String(name.getBytes("iso8859-1"), "utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		System.out.println(name + "-----" + idCard);
		RequestModel model = new RequestModel();
		model.setGwUrl("https://way.jd.com/YOUYU365/jd_credit_two");
		model.setAppkey("4857ff331827966bbd6d9d026f35cae5");
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("name", name); // 
		queryMap.put("certNo", idCard); // 
		model.setQueryParams(queryMap);
		WxApiCall call = new WxApiCall();
		call.setModel(model);
		String result = call.request();// 
		System.out.println("NameRealresult--------->:" + result);
		Gson gson = new Gson();
		ResultOne one = gson.fromJson(result, ResultOne.class);
		System.out.println("resultTwo--------->:" + one.getResult().getSuccess());
		return "";
	}

	@RequestMapping("/bankType")
	public String bankType(String bankCard) {
		RequestModel model = new RequestModel();
		model.setGwUrl("https://way.jd.com/yingyan/bankcardinfo");
		model.setAppkey("4857ff331827966bbd6d9d026f35cae5");
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("bankno", bankCard); // 
		model.setQueryParams(queryMap);
		WxApiCall call = new WxApiCall();
		call.setModel(model);
		call.request();// ËøîÂõûÂèÇÊï∞
		return "";
	}

	@RequestMapping("/bankFour")
	public String bankFour(String bankCard, String idCard, String name, String phone) {
		RequestModel model = new RequestModel();
		model.setGwUrl("https://way.jd.com/YOUYU365/keyelement");
		model.setAppkey("4857ff331827966bbd6d9d026f35cae5");
		try {
			name = new String(name.getBytes("iso88591"), "utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("accName", name); // 
		queryMap.put("cardPhone", phone); // 
		queryMap.put("certificateNo", idCard); // 
		queryMap.put("cardNo", bankCard); // 
		model.setQueryParams(queryMap);
		WxApiCall call = new WxApiCall();
		call.setModel(model);
		return "";
	}

	//—È÷§¬Î
	@RequestMapping("/yzm")
	public String checkYzm(String yzm) {
		try {
			memcachedClient.set(yzm + "", 120, yzm);
		} catch (TimeoutException | InterruptedException | MemcachedException e) {
			e.printStackTrace();
		}
		return "";
	}
}
