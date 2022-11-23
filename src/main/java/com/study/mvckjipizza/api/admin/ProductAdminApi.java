package com.study.mvckjipizza.api.admin;

import com.study.mvckjipizza.dto.CMRespDto;
import com.study.mvckjipizza.dto.admin.ProductRegisterRespDto;
import com.study.mvckjipizza.service.admin.ProductManagementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class ProductAdminApi {

    private final ProductManagementService productManagementService;

    @PostMapping("product/register")
    public ResponseEntity<?> registerProduct(ProductRegisterRespDto productRegisterRespDto ) throws Exception {

        productManagementService.registerProduct(productRegisterRespDto);

            return ResponseEntity.created(null).body(new CMRespDto<>("Register Successfully",true));
    }

    @PutMapping("/product/update")

    public ResponseEntity<?> registerUpdate (ProductRegisterRespDto productRegisterRespDto) throws Exception {

        productManagementService.updateRegister(productRegisterRespDto);

        return ResponseEntity.ok().body(new CMRespDto<> ("Update Successfully", true));
    }


    @GetMapping("/product/category")
    public ResponseEntity<?> getCategoryList() throws Exception {

        return ResponseEntity.ok().body(new CMRespDto<> ("Get Successfully", productManagementService.getCategoryList()));
    }




    //재률이가 만든거
    @GetMapping("/productlist/{categoryName}")
    public ResponseEntity<?> getProductList(@PathVariable int categoryName) throws Exception {
        return ResponseEntity.ok().body(new CMRespDto<>("Get successfully", productManagementService.getProductListSelect(categoryName)));
    }
}
