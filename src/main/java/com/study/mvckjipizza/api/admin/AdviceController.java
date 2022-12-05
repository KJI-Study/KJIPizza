package com.study.mvckjipizza.api.admin;

import com.study.mvckjipizza.dto.CMRespDto;
import com.study.mvckjipizza.excetpion.CustomValidationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestController
@RestControllerAdvice
public class AdviceController {
    @ExceptionHandler(CustomValidationException.class)
    public ResponseEntity<?> validationAdvice(CustomValidationException exception) {
        return ResponseEntity.badRequest().body(new CMRespDto<>(exception.getMessage(), exception.getErrorMap()));
    }

}
