package com.study.mvckjipizza.service.admin;

import com.study.mvckjipizza.dto.admin.ProductRegisterReqDto;

import java.util.List;

public interface ProductManagementService {

    public List<ProductRegisterReqDto> getCategoryList() throws Exception;
}
