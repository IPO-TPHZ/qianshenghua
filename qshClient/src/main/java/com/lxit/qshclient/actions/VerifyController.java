package com.lxit.qshclient.actions;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.TimeoutException;

import org.apache.commons.codec.language.bm.Rule.RPattern;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.lxit.qshclient.view.ResultOne;
import com.wxapi.WxApiCall.WxApiCall;
import com.wxapi.model.RequestModel;


@Controller
public class VerifyController {

	
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
		call.request();// 杩斿洖鍙傛暟
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

	
	@RequestMapping("/yzm")
	public ResponseEntity<Map<String,Object>> yzm(String phone, int value) {
		Random d=new Random();
		//生成随机验证码
		String sj=d.nextDouble()+"";
		sj=sj.substring(3,9);
		String content="";
		if(value==0) {
			content+="【币生花】验证码为："+sj+",欢迎注册平台！";
		}else if(value==1) {
			content+="【币生花】验证码："+sj+"，为了您的信息安全，请勿将此验证码告知他人！";
		}else if(value==2) {
			content+="【币生花】您正在重置密码，验证码"+sj+"，请在2分钟内按页面提示提交验证码，切勿将验证码泄露于他人。";
		}
		System.out.println(content);
		/*RequestModel model = new RequestModel();
		model.setGwUrl("https://way.jd.com/chuangxin/VerCodesms");
		model.setAppkey("4857ff331827966bbd6d9d026f35cae5");
		Map<String, Object> queryMap = new HashMap<String, Object>();
		queryMap.put("mobile", phone); // 访问参数 电话号码
		queryMap.put("content", content); // 访问参数 发送的内容
		model.setQueryParams(queryMap);
		WxApiCall call = new WxApiCall();
		call.setModel(model);
		System.out.println(call.request());// 返回参数*/
		Map<String,Object> map=new HashMap<String,Object>();
		map.put("msg", "success");
		map.put("yzm", sj);
		ResponseEntity<Map<String,Object>> re=new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
		return re;
	}
}
