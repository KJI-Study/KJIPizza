package com.study.mvckjipizza.dto;


import com.study.mvckjipizza.domain.Cart;
import lombok.Builder;
import lombok.Data;

@Data

public class CartRespDto {
    private int cartId;
    private int tableId;
    private int pdtId;


    //html에있는 데이터를 서버에 보낼꺼니까 toEntity;
    //서버에있는 데이터를 html로 가져올꺼면 toDto;

    public Cart toEntity() {
        return Cart.builder()
                .cart_id(cartId)
                .table_id(tableId)
                .pdt_id(pdtId)
                .build();
    }
}
