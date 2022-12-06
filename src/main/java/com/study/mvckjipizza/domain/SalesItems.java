package com.study.mvckjipizza.domain;

import com.study.mvckjipizza.dto.PaymentItemsRespDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class SalesItems {

    private String pdt_name;

    private int pdt_price;

    private int stock;

    public PaymentItemsRespDto toSales(){
        return PaymentItemsRespDto.builder()
                .pdtName(pdt_name)
                .pdtPrice(pdt_price)
                .stock(stock)
                .build();
    }
}
