package com.study.mvckjipizza.dto;


import com.study.mvckjipizza.domain.Option;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class OrderOptionRespDto {

    private int orderDtlId;

    private List<Map<String, Object>> orderOptions;

}
