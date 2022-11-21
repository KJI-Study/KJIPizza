package com.study.mvckjipizza.api;


import com.study.mvckjipizza.dto.CMRespDto;
import com.study.mvckjipizza.dto.CartRespDto;
import com.study.mvckjipizza.service.CartService;
import com.study.mvckjipizza.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ProductApi {
    private final ProductService productService;
    private final CartService cartService;

    @GetMapping("/products/{category}")
    public ResponseEntity<?> getProduct(@PathVariable String category) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>("Successfully",productService.getProductList(category)));
    }

    @GetMapping("/products/option")
    public ResponseEntity<?> getProductOption() throws Exception {
        return ResponseEntity.ok(new CMRespDto<>("Successfully",productService.getOptionList()));
    }

    @PostMapping("/products/cart")
    public ResponseEntity<?> addCartId(@RequestBody CartRespDto cartRespDto) throws Exception {

        //첫번째 insert 실행.
        cartService.addCart(cartRespDto);
        //두번째 insert실행.

        return ResponseEntity.ok(new CMRespDto<>("Successfully",true));
    }
}
