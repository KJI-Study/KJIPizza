package com.study.mvckjipizza.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentItemsRespDto {
    private int orderMstId;
    private int cartId;
    private String pdtName;
    private int pdtPrice;
    private int cartegoryId;
    private String origin_name;
    private String save_name;
    private int stock;
    private List<Map<String, Object>> pdtOptions;
}


