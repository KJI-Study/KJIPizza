package com.study.mvckjipizza.service;

//import com.study.mvckjipizza.domain.Cart;
//import com.study.mvckjipizza.domain.CartDtl;
//import com.study.mvckjipizza.domain.CartItems;
//import com.study.mvckjipizza.dto.CartItemsRespDto;
//import com.study.mvckjipizza.dto.CartReqDto;
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

public class CartServiceImpl implements CartService {


//     private final ProductRepository productRepository;
//
//    @Override
//    public void addCart(CartReqDto cartReqDto) throws Exception {
//        Cart cart = cartReqDto.toCartEntity();
//        System.out.println(cart);
//        if(productRepository.addCartList(cart) == 0){
//            throw new CustomInternalServerErrorException("장바구니 추가 실패");
//        }
//        productRepository.addCartDtls(cartReqDto.toOptionList(cart.getId()));
//    }
//
//    @Override
//    public List<CartItemsRespDto> getCartItems(int tableId) throws Exception {
//
//        List<CartItemsRespDto> cartItemsRespDtos = new ArrayList<CartItemsRespDto>();
//
//        List<CartItems> cartItems = productRepository.getCartItemsList(tableId);
//
//        cartItems.forEach(cartItem -> {
//            cartItemsRespDtos.add(cartItem.toDto());
//        });
//
//        return cartItemsRespDtos;
//    }
//
//    @Override
//    public List<CartItemsRespDto> getPayItems(int tableId) throws Exception {
//        List<CartItemsRespDto> cartItemsRespDtos = new ArrayList<CartItemsRespDto>();
//
//        List<CartItems> cartItems = productRepository.getPayItems(tableId);
//
//        cartItems.forEach(cartItem -> {
//            cartItemsRespDtos.add(cartItem.toDto());
//        });
//
//        return cartItemsRespDtos;
//
//    }
//    @Override
//    public void deleteCart(int cartId) throws Exception {
//      productRepository.deleteCart(cartId);
//    }
//
}