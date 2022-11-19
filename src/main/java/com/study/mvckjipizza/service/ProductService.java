package com.study.mvckjipizza.service;

import com.study.mvckjipizza.dto.ProductListRespDto;
import com.study.mvckjipizza.dto.OptionListRespDto;

import java.util.List;

public interface ProductService {

    public List<ProductListRespDto> getProductList(int category) throws Exception;
    public List<OptionListRespDto> getOptionList() throws Exception;
}
