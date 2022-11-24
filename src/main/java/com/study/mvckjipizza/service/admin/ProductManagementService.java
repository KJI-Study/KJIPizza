package com.study.mvckjipizza.service.admin;

import com.study.mvckjipizza.dto.CategoryResponseDto;
import com.study.mvckjipizza.dto.admin.ProductListSelectRespDto;
import com.study.mvckjipizza.dto.admin.ProductRegisterRespDto;

import java.util.List;

public interface ProductManagementService {

    public void registerProduct(ProductRegisterRespDto productRegisterRespDto) throws Exception;

    public List<CategoryResponseDto> getCategoryList() throws Exception;

    public void updateRegister(ProductRegisterRespDto productRegisterRespDto) throws Exception;

    public void productDelete(ProductListSelectRespDto productListSelectRespDto) throws Exception;

    //재률이가 한거
    public List<ProductListSelectRespDto> getProductListSelect(int categoryName) throws Exception;

}
