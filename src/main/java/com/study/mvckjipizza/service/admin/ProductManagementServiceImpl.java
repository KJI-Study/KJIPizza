package com.study.mvckjipizza.service.admin;

import com.study.mvckjipizza.dto.CategoryResponseDto;
import com.study.mvckjipizza.dto.ProductListRespDto;
import com.study.mvckjipizza.dto.admin.ProductListSelectRespDto;
import com.study.mvckjipizza.dto.admin.ProductRegisterReqDto;
import com.study.mvckjipizza.repository.admin.ProductManagementRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductManagementServiceImpl implements ProductManagementService {

    private final ProductManagementRepository productManagementRepository;

    public List<CategoryResponseDto> getCategoryList() throws Exception {
        List<CategoryResponseDto> categoryResponseDtos = new ArrayList<CategoryResponseDto>();
        productManagementRepository.getCategoryList().forEach(category -> {
            categoryResponseDtos.add(category.toDto());
        });

        return categoryResponseDtos;
    }

    //재률이가한거
    @Override
    public List<ProductListSelectRespDto> getProductListSelect(String categoryName) throws Exception {
        List<ProductListSelectRespDto> list = new ArrayList<ProductListSelectRespDto>();
        productManagementRepository.getProductListSelect(categoryName).forEach(pdtMst -> {
            list.add(pdtMst.toDto());
        });

        return list;
    }
}
