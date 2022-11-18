package com.study.mvckjipizza.service;

import com.study.mvckjipizza.dto.ProductListRespDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProductService {

    public List<ProductListRespDto> getProductList(int category) throws Exception;

}
