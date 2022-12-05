package com.study.mvckjipizza.domain;

import com.study.mvckjipizza.dto.PaymentItemsRespDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class PaymentItems {

    private int order_id;
    private int cart_id;
    private String pdt_name;
    private int pdt_price;
    private int category_id;
    private String option_name;
    private int option_price;
    private List<Option> pdt_options;
    private String origin_name;
    private String save_name;

    public PaymentItemsRespDto toDto() {
        List<Map<String, Object>> pdtOption = new ArrayList<Map<String, Object>>();
        pdt_options.forEach(option -> {
            Map<String, Object> optionMap = new HashMap<String, Object>();
            optionMap.put("id", option.getId());
            optionMap.put("optionName", option.getOption_name());
            optionMap.put("optionPrice", option.getOption_price());
            pdtOption.add(optionMap);
        });

        return PaymentItemsRespDto.builder()
                .orderMstId(order_id)
                .cartId(cart_id)
                .pdtName(pdt_name)
                .pdtPrice(pdt_price)
                .cartegoryId(category_id)
                .origin_name(origin_name)
                .save_name(save_name)
                .pdtOptions(pdtOption)
                .build();
    }
}



