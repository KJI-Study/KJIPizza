package com.study.mvckjipizza.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder

public class OrderOption {

    private int id;
    private int order_dtl_id;
    private int option_id;


//    public OrderOptionRespDto toDto() {
//
//        List<Map<String, Object>> orderOptions = new ArrayList<Map<String, Object>>();
//
//        OrderItemList.forEach(option -> {
//            Map<String, Object> optionMap = new HashMap<String, Object>();
//            optionMap.put("id", option.getId());
//            optionMap.put("optionName", option.getOption_name());
//            optionMap.put("optionPrice", option.getOption_price());
//            orderOptions.add(optionMap);
//        });
//
//        return OrderOptionRespDto.builder()
//                .orderDtlId(orderDtl_id)
//                .orderOptions(orderOptions)
//                .build();
//        }
}
