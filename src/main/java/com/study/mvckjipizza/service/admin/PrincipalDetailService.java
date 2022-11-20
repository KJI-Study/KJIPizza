package com.study.mvckjipizza.service.admin;

import com.study.mvckjipizza.domain.amdin.Admin;
import com.study.mvckjipizza.excetpion.CustomInternalServerErrorException;
import com.study.mvckjipizza.repository.admin.AccountRepository;
import com.study.mvckjipizza.security.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
@Slf4j
@RequiredArgsConstructor
public class PrincipalDetailService implements UserDetailsService {

    private final AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Admin admin = null;

        try {
            admin = accountRepository.findUserByEmail(email);

        } catch (Exception e) {
            throw new CustomInternalServerErrorException("회원정보 조회오류");
        }

        if(admin == null) {
            throw new UsernameNotFoundException("잘못된 사용자 정보");
        }

        return new PrincipalDetails(admin);
    }
}
