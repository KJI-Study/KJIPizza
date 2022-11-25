package com.study.mvckjipizza.dto.admin;

import com.study.mvckjipizza.domain.amdin.Product;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductListSelectRespDto {
    private int pdtId;
    private String categoryName;
    private String pdtName;
    private int pdtPrice;


    public Product toEntity() {
        return Product.builder()
                .id(pdtId)
                .build();
    }
}
