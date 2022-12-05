package com.study.mvckjipizza.dto.admin;

import com.study.mvckjipizza.domain.amdin.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

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
