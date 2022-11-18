package com.study.mvckjipizza.api;

import com.study.mvckjipizza.dto.CMRespDto;
import com.study.mvckjipizza.dto.admin.JoinReqDto;
import com.study.mvckjipizza.dto.validation.ValidationSequence;
import com.study.mvckjipizza.service.admin.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class JoinApi {

    private final AccountService accountService;

    @PostMapping("/join")
    public ResponseEntity<?> join(@Validated(ValidationSequence.class) @RequestBody JoinReqDto joinReqDto, BindingResult bindingResult) throws Exception {

        accountService.duplicateEmail(joinReqDto);
        accountService.login(joinReqDto);

        if(bindingResult.hasErrors()) {
            Map<String, String> errorMap = new HashMap<String, String>();

            List<FieldError> fieldErrors = bindingResult.getFieldErrors();
            for(FieldError fieldError : fieldErrors) {
                errorMap.put(fieldError.getField(), fieldError.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMap);
        }

        return ResponseEntity.created(URI.create("/admin/login")).body(new CMRespDto<>("회원가입 성공", joinReqDto.getEmail()));
    }
}
