package com.study.mvckjipizza.api.admin;

import com.study.mvckjipizza.dto.CMRespDto;
import com.study.mvckjipizza.service.admin.ProductManagementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class ProductAdminApi {

    private final ProductManagementService productManagementService;


    @GetMapping("/product/category")
    public ResponseEntity<?> getCategoryList() throws Exception {

        return ResponseEntity.ok().
                body(new CMRespDto<> ("Get Successfully", productManagementService.getCategoryList()));
    }
}
