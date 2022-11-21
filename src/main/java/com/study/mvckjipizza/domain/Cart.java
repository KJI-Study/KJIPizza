package com.study.mvckjipizza.domain;

import com.study.mvckjipizza.dto.CartRespDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Cart {
    private int cart_id;
    private int table_id;
    private int pdt_id;
}
