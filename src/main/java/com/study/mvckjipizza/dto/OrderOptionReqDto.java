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

    private int orderMstId;
     // dtl 의 order_id가 될 것. (dtl테이블의 order_id가 돼야함)
    private int tableNumber;

     // option의 dtl_id가 될 것.  (option테이블의  order_dtl_id가 돼야함)
    private int productId;

    private int optionId;
    private List <Map<String, Object>> productOptionList;

    public Order toOrderEntity() {
        return Order.builder()
                .table_id(tableNumber)
                .build();
    }

    public List<OrderDtl> toOrderList(int mstId) {
        List<OrderDtl> orderDtls = new ArrayList<OrderDtl>();

        orderDtls.add(OrderDtl.builder()

                .order_id(mstId)
                .pdt_id(productId)
                .build());

        return orderDtls;
    }

    public List<OrderOption> toOrderOption(int dtlId){
        List<OrderOption> orderOptions = new ArrayList<>();

        for(Map<String,Object> data : productOptionList){
            orderOptions.add(OrderOption.builder()
                    .order_dtl_id(dtlId)
                    .option_id((Integer)data.get("optionId")).build());
        }

        return orderOptions;
    }
}
