package com.study.mvckjipizza.service.admin;

import com.study.mvckjipizza.domain.amdin.Product;
import com.study.mvckjipizza.dto.CategoryResponseDto;
import com.study.mvckjipizza.dto.admin.ProductListSelectRespDto;
import com.study.mvckjipizza.dto.admin.ProductRegisterRespDto;
import com.study.mvckjipizza.excetpion.CustomInternalServerErrorException;
import com.study.mvckjipizza.excetpion.CustomValidationException;
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

    @Override
    public void registerProduct(ProductRegisterRespDto productRegisterRespDto )throws Exception {
        if (productManagementRepository.pdtRegisterMst(productRegisterRespDto.toEntity()) ==0){
            throw new CustomInternalServerErrorException("제품 등록 실패");

        }


    }

    @Override
    public void updateRegister(ProductRegisterRespDto productRegisterRespDto) throws Exception {
        Product product = productRegisterRespDto.toEntity();
        productManagementRepository.registerUpdate(product);

    }

    //    @Override
//    public void registerImg(ProductRegisterRespDto productRegisterRespDto) throws Exception {
//
//
//        }


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
