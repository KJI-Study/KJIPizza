package com.study.mvckjipizza.dto;

import lombok.Data;

@Data
public class JoinReqDto {
    private String email;
    private String password;
    private String name;
}