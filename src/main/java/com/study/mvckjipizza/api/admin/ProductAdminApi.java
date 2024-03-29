package com.study.mvckjipizza.api.admin;

import
        com.study.mvckjipizza.dto.CMRespDto;
import com.study.mvckjipizza.dto.admin.ProductListSelectRespDto;
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

    @PostMapping("/product/update")

    public ResponseEntity<?> registerUpdate (ProductRegisterRespDto productRegisterRespDto) throws Exception {
        //responsebody json으로 받으려고 쓰는객첸데, formdata여서 필요가없다!


        productManagementService.updateRegister(productRegisterRespDto);

        return ResponseEntity.ok().body(new CMRespDto<> ("Update Successfully", true));
    }


    @DeleteMapping("/product/delete")
    public ResponseEntity<?> deleteProduct (@RequestBody ProductListSelectRespDto productListSelectRespDto) throws Exception {

        productManagementService.productDelete(productListSelectRespDto);

        return ResponseEntity.ok().body(new CMRespDto<> ("Delete Successfully", true));
    }



    @GetMapping("/product/category")
    public ResponseEntity<?> getCategoryList() throws Exception {

        return ResponseEntity.ok().body(new CMRespDto<> ("Get Successfully", productManagementService.getCategoryList()));
    }

    @GetMapping("/productlist/{categoryName}")
    public ResponseEntity<?> getProductList(@PathVariable int categoryName) throws Exception {
        return ResponseEntity.ok().body(new CMRespDto<>("Get successfully", productManagementService.getProductListSelect(categoryName)));
    }

    @GetMapping("/sales")
    public ResponseEntity<?> getSales() throws Exception {

        return ResponseEntity.ok().body(new CMRespDto<>("Get successfully",  productManagementService.getAllSales()));
    }

    @GetMapping("/totalSales")
    public ResponseEntity<?> getTotalSales() throws Exception {

        return ResponseEntity.ok().body(new CMRespDto<>("Get successfully", productManagementService.getTotalSales()));
    }
}
