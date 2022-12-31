package com.study.mvckjipizza.dto.admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class ProductRegisterRespDto {


    private MultipartFile file;

    private int id;
    private int category;
    private String name;
    private int price;
    private String img;


}
