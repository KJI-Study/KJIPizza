package com.study.mvckjipizza.service;

import com.study.mvckjipizza.dto.CartRespDto;

public interface CartService {

    public void addCart(CartRespDto cartRespDto) throws Exception;
}
