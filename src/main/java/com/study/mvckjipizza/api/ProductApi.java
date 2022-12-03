package com.study.mvckjipizza.api;


import com.study.mvckjipizza.domain.Order;
import com.study.mvckjipizza.dto.CMRespDto;
import com.study.mvckjipizza.dto.OrderOptionReqDto;
import com.study.mvckjipizza.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ProductApi {
    private final ProductService productService;


    @GetMapping("/products/{category}")
    public ResponseEntity<?> getProduct(@PathVariable String category) throws Exception {
        return ResponseEntity.ok(new CMRespDto<>("Successfully",productService.getProductList(category)));
    }

    @GetMapping("/products/option")
    public ResponseEntity<?> getProductOption() throws Exception {
        return ResponseEntity.ok(new CMRespDto<>("Successfully",productService.getOptionList()));
    }

    @PostMapping("/cartlist/order/{tableNumber}")
    public ResponseEntity<?> postItems(@PathVariable int tableNumber, @RequestBody List<OrderOptionReqDto> orderOptionReqDto) throws Exception {
        ;
        productService.postCartList(orderOptionReqDto);

        return ResponseEntity.ok(new CMRespDto<>("Successfully", true));
    }
//    @PostMapping("/products/cart")
//    public ResponseEntity<?> addCartId(@RequestBody CartReqDto cartRespDto) throws Exception {
//
//        //첫번째 insert 실행.s
//        cartService.addCart(cartRespDto);
//
//        System.out.println(cartRespDto);
//        //두번째 insert실행.
////      cartService.addOption(optionListRespDto);
//
//        return ResponseEntity.ok(new CMRespDto<>("Successfully",true));
//    }
//
//    @GetMapping("/products/cart/item/{tableId}")
//    public ResponseEntity<?> getCartItemsList(@PathVariable int tableId) throws Exception {
//        return ResponseEntity.ok().body(new CMRespDto<>("Get Successfully", cartService.getCartItems(tableId)));
//    }
//
//    @DeleteMapping("/products/cart/deleteitem")
//    public ResponseEntity<?> deleteCartProduct(@RequestBody CartReqDto cartRespDto) throws Exception {
//
//        cartService.deleteCart(cartRespDto);
//
//        return ResponseEntity.ok().body(new CMRespDto<>("Delete Successfully", true));
//    }
//
//    @DeleteMapping("/products/cart/item/{tableId}")
//    public ResponseEntity<?> delteCartItemsList(@PathVariable int tableId) throws Exception {
//
//        cartService.delCartList(tableId);
//
//        return ResponseEntity.ok().body(new CMRespDto<>("Get Successfully", true));
//    }
//    @GetMapping("/products/pay/item/{tableId}" )
//    public ResponseEntity<?> getPayItems(@PathVariable int tableId) throws Exception {
//        return ResponseEntity.ok().body(new CMRespDto<>("Get Successfully", cartService.getPayItems(tableId)));
//    }


}
