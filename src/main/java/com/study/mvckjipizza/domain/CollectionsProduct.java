package com.study.mvckjipizza.domain;


import com.study.mvckjipizza.dto.ProductListRespDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Data

public class CollectionsProduct {
    private int id;
    private String pdt_name;
    private int pdt_price;
    private String save_name;


    public ProductListRespDto toDto() {
        return ProductListRespDto.builder()
                .productId(id)
                .productName(pdt_name)
                .productPrice(pdt_price)
                .Img(save_name)
                .build();
    }
}
