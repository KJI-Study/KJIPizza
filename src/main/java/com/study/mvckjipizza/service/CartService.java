package com.study.mvckjipizza.service;

import com.study.mvckjipizza.dto.CartReqDto;

public interface CartService {

    public void addCart(CartReqDto cartRespDto) throws Exception;

}
