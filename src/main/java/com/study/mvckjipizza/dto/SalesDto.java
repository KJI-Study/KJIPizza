package com.study.mvckjipizza.dto;

import com.study.mvckjipizza.domain.Sales;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SalesDto {
    private int totalSales;
}
