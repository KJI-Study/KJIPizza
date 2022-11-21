package com.study.mvckjipizza.service;

import com.study.mvckjipizza.domain.Cart;
import com.study.mvckjipizza.dto.CartRespDto;
import com.study.mvckjipizza.excetpion.CustomInternalServerErrorException;
import com.study.mvckjipizza.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class CartServiceImpl implements CartService{

    private final ProductRepository productRepository;

    @Override
    public void addCart(CartRespDto cartRespDto) throws Exception {

        System.out.println(cartRespDto);

       if(productRepository.addCartList(cartRespDto.toEntity()) == 0){
           throw new CustomInternalServerErrorException("장바구니 추가 실패");
       }

    }
}
