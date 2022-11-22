package com.study.mvckjipizza.domain.amdin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {

    private int id;
    private int category_id;
    private String pdt_name;
    private int pdt_price;
    private String origin_name;
    private String save_name;
}
