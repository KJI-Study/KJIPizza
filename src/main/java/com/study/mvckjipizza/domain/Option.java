package com.study.mvckjipizza.domain;

import com.study.mvckjipizza.dto.OptionListRespDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Option {
    private int id;
    private String option_name;
    private int option_price;
    private int cart_id;

    public OptionListRespDto toDto() {
        return OptionListRespDto.builder()
                .optionId(id)
                .optionName(option_name)
                .optionPrice(option_price)
                .build();
    }
}
