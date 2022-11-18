package com.study.mvckjipizza.dto.admin;

import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Data;

@Data
public class ProductRegisterReqDto {
    private String category;
    private String name;

    private int price;


}
