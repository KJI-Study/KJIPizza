package com.study.mvckjipizza.service;

import com.study.mvckjipizza.dto.OptionListRespDto;
import com.study.mvckjipizza.dto.ProductListRespDto;
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
}
