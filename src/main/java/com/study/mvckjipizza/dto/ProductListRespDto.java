package com.study.mvckjipizza.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductListRespDto {
    private int productId;
    private String productName;
    private int productPrice;
    private String Img;
}
