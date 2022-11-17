package com.study.mvckjipizza.service.admin;

import com.study.mvckjipizza.dto.ProductListRespDto;
import com.study.mvckjipizza.dto.admin.ProductRegisterReqDto;
import com.study.mvckjipizza.repository.admin.ProductManagementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductManagementServiceImpl implements ProductManagementService {

    private final ProductManagementRepository productManagementRepository;

    public List<ProductRegisterReqDto> getCategoryList() throws Exception {
        return null;
    }


}
