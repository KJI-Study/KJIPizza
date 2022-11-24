package com.study.mvckjipizza.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
@Builder
public class CartItemsRespDto {
    private int tableId;
    private int cartId;
    private String pdtName;
    private int pdtPrice;
    private int cartegoryId;
    private List<Map<String, Object>> cartOptions;


}
