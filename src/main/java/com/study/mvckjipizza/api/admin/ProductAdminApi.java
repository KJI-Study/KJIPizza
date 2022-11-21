package com.study.mvckjipizza.api.admin;

import com.study.mvckjipizza.dto.CMRespDto;
import com.study.mvckjipizza.service.admin.ProductManagementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class ProductAdminApi {

    private final ProductManagementService productManagementService;

    public ResponseEntity<?> registerProductMst(){
        return ResponseEntity.created(null)
                .body(new CMRespDto<>("Register Succe"))
    }

    @GetMapping("/product/category")
    public ResponseEntity<?> getCategoryList() throws Exception {

        return ResponseEntity.ok().
                body(new CMRespDto<> ("Get Successfully", productManagementService.getCategoryList()));
    }

    //재률이가 만든거
    @GetMapping("/productlist/{categoryName}")
    public ResponseEntity<?> getProductList(@PathVariable String categoryName) throws Exception {
        return ResponseEntity.ok().body(new CMRespDto<>("Get successfully", productManagementService.getProductListSelect(categoryName)));
    }
}
