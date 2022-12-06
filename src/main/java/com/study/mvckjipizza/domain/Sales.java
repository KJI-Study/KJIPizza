package com.study.mvckjipizza.domain;

import com.study.mvckjipizza.dto.SalesDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Sales {
    private int total_sales;

    public SalesDto toDto() {
        return SalesDto.builder()
                .totalSales(total_sales)
                .build();
    }
}
