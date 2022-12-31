package com.study.mvckjipizza.api;


import com.study.mvckjipizza.dto.CMRespDto;
import com.study.mvckjipizza.dto.OrderOptionReqDto;
import com.study.mvckjipizza.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

        productService.postCartList(orderOptionReqDto);

        return ResponseEntity.ok(new CMRespDto<>("Successfully", true));
    }

    @GetMapping("/products/pay/order/{tableNumber}")

        public ResponseEntity<?> getOrderId(@PathVariable int tableNumber) throws Exception {

        return ResponseEntity.ok().body(new CMRespDto<>("Get Successfully", productService.getOrderId(tableNumber)));

    }

    @GetMapping("/products/pay/item/{orderMstId}")
    public ResponseEntity<?> getPayItems(@PathVariable int orderMstId) throws Exception {

        return ResponseEntity.ok().body(new CMRespDto<>("Get Successfully", productService.getPayItems(orderMstId)));
    }


}
