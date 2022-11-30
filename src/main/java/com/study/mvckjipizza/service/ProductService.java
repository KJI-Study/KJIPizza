package com.study.mvckjipizza.service;

import com.study.mvckjipizza.dto.ProductListRespDto;
import com.study.mvckjipizza.dto.OptionListRespDto;
import com.study.mvckjipizza.dto.SalesDto;

import java.util.List;

public interface ProductService {

    public List<ProductListRespDto> getProductList(String category) throws Exception;
    public List<OptionListRespDto> getOptionList() throws Exception;
    public void saveSales(SalesDto salesDto) throws Exception;
}
