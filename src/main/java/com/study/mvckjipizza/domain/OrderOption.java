package com.study.mvckjipizza.domain;

import com.study.mvckjipizza.dto.OrderOptionRespDto;
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

public class OrderOption {

    private int orderDtl_id;
    private List<Option> orderDtl_options;

        public OrderOptionRespDto toDto() {

            List<Map<String, Object>> orderOptions = new ArrayList<Map<String, Object>>();

            orderDtl_options.forEach(option -> {
                Map<String, Object> optionMap = new HashMap<String, Object>();
                optionMap.put("id", option.getId());
                optionMap.put("optionName", option.getOption_name());
                optionMap.put("optionPrice", option.getOption_price());
                orderOptions.add(optionMap);
            });

            return OrderOptionRespDto.builder()
                    .orderDtlId(orderDtl_id)
                    .orderOptions(orderOptions)
                    .build();
        }
}
