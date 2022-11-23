package com.study.mvckjipizza.service;

import com.study.mvckjipizza.domain.Cart;
import com.study.mvckjipizza.domain.CartItems;
import com.study.mvckjipizza.dto.CartItemsRespDto;
import com.study.mvckjipizza.dto.CartReqDto;
import com.study.mvckjipizza.excetpion.CustomInternalServerErrorException;
import com.study.mvckjipizza.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor

public class CartServiceImpl implements CartService{

    private final ProductRepository productRepository;

    @Override
    public void addCart(CartReqDto cartReqDto) throws Exception {
        Cart cart = cartReqDto.toCartEntity();
        if(productRepository.addCartList(cart) == 0){
            throw new CustomInternalServerErrorException("장바구니 추가 실패");
        }
        productRepository.addCartDtls(cartReqDto.toOptionList(cart.getId()));
    }

    @Override
    public CartItemsRespDto getCartItems(int tableId) throws Exception {
        CartItems cartItems = productRepository.getCartItemsList(tableId);

        Map<Integer, List<Map<String, Object>>> cartOptions = new HashMap<Integer, List<Map<String, Object>>>();

        cartItems.getCart_options().forEach(opt -> {
            if(!cartOptions.containsKey(opt.getId())) {
                cartOptions.put(opt.getCart_id(), new ArrayList<Map<String, Object>>());
            }
        });

        cartItems.getCart_options().forEach(opt -> {
           Map<String, Object> optNameAndPrice =new HashMap<String, Object>();
           optNameAndPrice.put("option_name", opt.getOption_name());
           optNameAndPrice.put("option_price", opt.getOption_price());

           cartOptions.get(opt.getCart_id()).add(optNameAndPrice);
        });

        CartItemsRespDto dto = CartItemsRespDto.builder()
                .tableId(cartItems.getTable_id())
                .cartId(cartItems.getCart_id())
                .pdtName(cartItems.getPdt_name())
                .pdtPrice(cartItems.getPdt_price())
                .cartOptions(cartOptions)
                .build();

        return dto;
    }
}
