package com.study.mvckjipizza.domain;

import com.study.mvckjipizza.dto.CartItemsRespDto;
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
public class CartItems {
    private int table_id;
    private int cart_id;
    private String pdt_name;

    private int pdt_id;
    private int id;
    private int pdt_price;
    private int category_id;
    private String option_name;
    private int option_price;
    private List<Option> cart_options;
    private String origin_name;
    private String save_name;

    public CartItemsRespDto toDto() {
        List<Map<String, Object>> cartOptions = new ArrayList<Map<String, Object>>();
        cart_options.forEach(option -> {
            Map<String, Object> optionMap = new HashMap<String, Object>();
            optionMap.put("id", option.getId());
            optionMap.put("optionName", option.getOption_name());
            optionMap.put("optionPrice", option.getOption_price());
            optionMap.put("cartId", option.getCart_id());
            cartOptions.add(optionMap);
        });

        return CartItemsRespDto.builder()
                .tableId(table_id)
                .cartId(cart_id)
                .pdtId(id)
                .pdtName(pdt_name)
                .pdtPrice(pdt_price)
                .cartegoryId(category_id)
                .origin_name(origin_name)
                .save_name(save_name)
                .cartOptions(cartOptions)
                .build();
    }

}
