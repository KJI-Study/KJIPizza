package com.study.mvckjipizza.domain;

import com.study.mvckjipizza.dto.CartItemsRespDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CartItems {
    private int table_id;
    private int cart_id;
    private String pdt_name;
    private int pdt_price;
    private String option_name;
    private int option_price;
    private List<Option> cart_options;

    public CartItemsRespDto toDto() {
        return CartItemsRespDto.builder()
                .tableId(table_id)
                .cartId(cart_id)
                .pdtName(pdt_name)
                .pdtPrice(pdt_price)
                .build();
    }
}
