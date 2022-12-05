package com.study.mvckjipizza.domain;

import com.study.mvckjipizza.dto.OrderOptionReqDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Order {
    private int id;
    private int table_id;

    public OrderOptionReqDto toDto() {
        return OrderOptionReqDto.builder()
                .orderMstId(id)
                .tableNumber(table_id)
                .build();
    }
}
