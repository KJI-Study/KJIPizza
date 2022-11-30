package com.study.mvckjipizza.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Sales {
    private String merchant_uid;
    private int paid_amount;
}
