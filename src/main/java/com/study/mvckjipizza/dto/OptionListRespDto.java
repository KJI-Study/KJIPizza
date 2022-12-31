package com.study.mvckjipizza.dto;



import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OptionListRespDto {
    private int optionId;
    private String optionName;
    private int optionPrice;

}
