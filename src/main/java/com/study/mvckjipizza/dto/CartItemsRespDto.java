package com.study.mvckjipizza.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CartItemsRespDto {
    private int tableId;
    private int cartId;
    private String pdtName;
    private int pdtPrice;
    private String optionName;
    private int optionPrice;


}
