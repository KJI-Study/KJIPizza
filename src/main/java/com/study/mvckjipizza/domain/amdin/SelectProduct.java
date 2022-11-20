package com.study.mvckjipizza.domain.amdin;

import com.study.mvckjipizza.dto.admin.ProductListSelectRespDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SelectProduct {
    private int pdt_id;
    private String category_name;
    private String pdt_name;
    private int pdt_price;

    public ProductListSelectRespDto toDto() {
        return ProductListSelectRespDto.builder()
                .pdtId(pdt_id)
                .categoryName(category_name)
                .pdtName(pdt_name)
                .pdtPrice(pdt_price)
                .build();
    }

}
