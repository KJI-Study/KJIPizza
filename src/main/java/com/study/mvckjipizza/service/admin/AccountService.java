package com.study.mvckjipizza.service.admin;

import com.study.mvckjipizza.dto.admin.JoinReqDto;

public interface AccountService {

    public void duplicateEmail(JoinReqDto joinReqDto) throws Exception;
    public void join(JoinReqDto joinReqDto) throws Exception;
}
