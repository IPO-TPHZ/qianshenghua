package com.lxit.qshclient.view;

import java.io.Serializable;

public class ResultTwo implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String code;
	private String serialNo;
	private String success;
	private String message;
	private String comfirm;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getSerialNo() {
		return serialNo;
	}

	public void setSerialNo(String serialNo) {
		this.serialNo = serialNo;
	}

	public String getSuccess() {
		return success;
	}

	public void setSuccess(String success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getComfirm() {
		return comfirm;
	}

	public void setComfirm(String comfirm) {
		this.comfirm = comfirm;
	}

	@Override
	public String toString() {
		return "ResultTwo [code=" + code + ", serialNo=" + serialNo + ", success=" + success + ", message=" + message
				+ ", comfirm=" + comfirm + "]";
	}
}
