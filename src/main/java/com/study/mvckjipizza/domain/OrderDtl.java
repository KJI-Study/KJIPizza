package com.study.mvckjipizza.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class OrderDtl {
    private int id;


    private int order_id;
    private int pdt_id;
}
