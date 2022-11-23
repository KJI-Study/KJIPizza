package com.study.mvckjipizza.dto;


import com.study.mvckjipizza.domain.Cart;
import com.study.mvckjipizza.domain.Option;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OptionListRespDto {
    private int optionId;
    private String optionName;
    private int optionPrice;

}
