package com.study.mvckjipizza.dto;

import com.study.mvckjipizza.domain.Sales;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SalesDto {
    private String merchantUid;
    private int paidAmount;

    public Sales toEntity() {
        return Sales.builder()
                .merchant_uid(merchantUid)
                .paid_amount(paidAmount)
                .build();
    }
}
