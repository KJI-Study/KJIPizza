package com.study.mvckjipizza.dto.admin;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ProductListSelectRespDto {
    private int pdtId;
    private String categoryName;
    private String pdtName;
    private int pdtPrice;
}
