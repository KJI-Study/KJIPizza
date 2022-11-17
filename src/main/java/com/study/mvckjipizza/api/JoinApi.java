package com.study.mvckjipizza.api;

import com.study.mvckjipizza.dto.JoinReqDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JoinApi {
    @PostMapping("/api/join")
    public ResponseEntity<?> join(@RequestBody JoinReqDto joinReqDto) {
        System.out.println("회원가입 요청 데이터" + joinReqDto);
        return null;
    }
}
