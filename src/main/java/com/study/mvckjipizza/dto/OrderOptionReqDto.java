package com.study.mvckjipizza.dto;


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
    private int tableId;
    private int dtlId; // option의 dtl_id가 될 것.  (option테이블의  order_dtl_id가 돼야함)
    private int pdtId;
    private int size;
    private int crust;
    private int topping;

    public Order toOrderEntity() {
        return Order.builder()
                .id(mstId)
                .table_id(tableId)
                .build();
    }

    public List<OrderDtl> toOrderList(int mstId) {
        List<OrderDtl> orderDtls = new ArrayList<OrderDtl>();
        orderDtls.add(OrderDtl.builder().order_id(mstId).pdt_id(pdtId).build());

        return orderDtls;
    }

    public List<OrderOption> toOrderOption(int dtlId){
        List<OrderOption> orderOptions = new ArrayList<>();
        orderOptions.add(OrderOption.builder().orderDtl_id(dtlId).option_id(size).build());
        orderOptions.add(OrderOption.builder().orderDtl_id(dtlId).option_id(crust).build());
        orderOptions.add(OrderOption.builder().orderDtl_id(dtlId).option_id(topping).build());

        return orderOptions;
    }
}
