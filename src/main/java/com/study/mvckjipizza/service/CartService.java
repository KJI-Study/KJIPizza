package com.study.mvckjipizza.service;

import com.study.mvckjipizza.dto.CartItemsRespDto;
import com.study.mvckjipizza.dto.CartReqDto;
import com.study.mvckjipizza.dto.ProductListRespDto;

import java.util.List;

public interface CartService {

    public void addCart(CartReqDto cartRespDto) throws Exception;
    public List<CartItemsRespDto> getCartItems(int tableId) throws Exception;

    public List<CartItemsRespDto> getPayItems(int tableId) throws Exception;

    public void deleteCart(int cartId) throws Exception;

//    public void deleteSelect(int cartId) throws Exception;
    public void delCartList(int tableId) throws Exception;

}
