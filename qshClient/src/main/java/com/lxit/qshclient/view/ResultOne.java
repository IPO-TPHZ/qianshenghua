package com.lxit.qshclient.view;

import java.io.Serializable;

public class ResultOne implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private String code;
	private String charge;
	private String msg;
	private ResultTwo result;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getCharge() {
		return charge;
	}

	public void setCharge(String charge) {
		this.charge = charge;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public ResultTwo getResult() {
		return result;
	}

	public void setResult(ResultTwo result) {
		this.result = result;
	}

	@Override
	public String toString() {
		return "ResultOne [code=" + code + ", charge=" + charge + ", msg=" + msg + ", result=" + result + "]";
	}

}
