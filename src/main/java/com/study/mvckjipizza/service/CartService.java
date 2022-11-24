package com.study.mvckjipizza.service;

import com.study.mvckjipizza.dto.CartItemsRespDto;
import com.study.mvckjipizza.dto.CartReqDto;
import com.study.mvckjipizza.dto.ProductListRespDto;

import java.util.List;

public interface CartService {

    public void addCart(CartReqDto cartRespDto) throws Exception;
    public List<CartItemsRespDto> getCartItems(int tableId) throws Exception;

}
