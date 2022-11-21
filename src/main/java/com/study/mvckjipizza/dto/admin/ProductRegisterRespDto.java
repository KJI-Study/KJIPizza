package com.study.mvckjipizza.dto.admin;

import com.study.mvckjipizza.domain.amdin.Product;
import lombok.Builder;
import lombok.Data;

@Data
@Builder

public class ProductRegisterRespDto {
    private int category;
    private String name;
    private int price;
    private String img;

    public Product toEntity() {
        return Product.builder()
                .category_id(category)
                .pdt_name(name)
                .pdt_price(price)
                .origin_name(img)
                .build();

    }


}
