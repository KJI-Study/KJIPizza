package com.study.mvckjipizza.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder

public class OrderOption {

    private int id;
    private int order_dtl_id;
    private int option_id;

}
