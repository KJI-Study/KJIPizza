package com.study.mvckjipizza.service.admin;

import com.study.mvckjipizza.excetpion.CustomInternalServerErrorException;
import com.study.mvckjipizza.excetpion.CustomValidationException;
import com.study.mvckjipizza.domain.amdin.Admin;
import com.study.mvckjipizza.dto.admin.JoinReqDto;
import com.study.mvckjipizza.repository.admin.AccountRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;

    @Override
    public void duplicateEmail(JoinReqDto joinReqDto) throws Exception {

        Admin admin = accountRepository.findUserByEmail(joinReqDto.getEmail());

        if(admin != null) {
            Map<String, String> errorMap = new HashMap<String, String>();
            errorMap.put("email", "이미 사용중인 이메일입니다");
            throw new CustomValidationException("이미 사용중인 이메일입니다", errorMap);
        }
    }

    @Override
    public void join(JoinReqDto joinReqDto) throws Exception {

        Admin admin = joinReqDto.toEntity();

        int result = accountRepository.saveAdmin(admin);

        if(result == 0) {
            throw new CustomInternalServerErrorException("회원가입중 문제 발생");
        }
    }

}
