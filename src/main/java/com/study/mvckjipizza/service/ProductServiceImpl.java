package com.study.mvckjipizza.service;

import com.study.mvckjipizza.domain.Sales;
import com.study.mvckjipizza.dto.OptionListRespDto;
import com.study.mvckjipizza.dto.ProductListRespDto;
import com.study.mvckjipizza.dto.SalesDto;
import com.study.mvckjipizza.excetpion.CustomInternalServerErrorException;
import com.study.mvckjipizza.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public List<ProductListRespDto> getProductList(String category) throws Exception {

        List<ProductListRespDto> productList = new ArrayList<ProductListRespDto>();
        Map<String, Object> map = new HashMap<String, Object>();

        map.put("category", category);

        productRepository.getProductList(map).forEach(collectionsProduct -> {
            productList.add(collectionsProduct.toDto());
        });

        return productList;
    }

    @Override
    public List<OptionListRespDto> getOptionList() throws Exception {
        List<OptionListRespDto> optionList = new ArrayList<OptionListRespDto>();

        productRepository.getOptionList().forEach(optionProduct -> {
            optionList.add(optionProduct.toDto());
        });
        return optionList;
    }

    @Override
    public void saveSales(SalesDto salesDto) throws Exception {
        Sales sales = salesDto.toEntity();

        if(productRepository.saveSales(sales) == 0) {
            throw new CustomInternalServerErrorException("결제중 문제 발생");
        }
    }
}
