package com.study.mvckjipizza.dto;


import com.study.mvckjipizza.domain.Option;
import com.study.mvckjipizza.domain.Order;
import com.study.mvckjipizza.domain.OrderDtl;
import com.study.mvckjipizza.domain.OrderOption;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class OrderOptionReqDto {

    private int mstId; // dtl 의 order_id가 될 것. (dtl테이블의 order_id가 돼야함)
    private int tableNumber;

    private int dtlId; // option의 dtl_id가 될 것.  (option테이블의  order_dtl_id가 돼야함)
    private int productId;


    private List<OrderOption> productOptionList;

    private int optionId;

    public Order toOrderEntity() {
        return Order.builder()
                .table_id(tableNumber)
                .build();
    }

    public List<OrderDtl> toOrderList(int mstId) {
        List<OrderDtl> orderDtls = new ArrayList<OrderDtl>();
        orderDtls.add(OrderDtl.builder().order_id(mstId).pdt_id(productId).build());

        return orderDtls;
    }

    public List<OrderOption> toOrderOption() {
        List<OrderOption> orderOptions = new ArrayList<>();
        orderOptions.add(OrderOption.builder().orderDtl_id(dtlId).option_id(optionId).build());

        return orderOptions;
    }
}
