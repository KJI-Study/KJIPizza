package com.study.mvckjipizza.service;

import com.study.mvckjipizza.domain.Cart;
import com.study.mvckjipizza.dto.CartReqDto;
import com.study.mvckjipizza.excetpion.CustomInternalServerErrorException;
import com.study.mvckjipizza.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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

//    @Override
//    public void addOption(OptionListRespDto optionListRespDto) throws Exception {
//        if(productRepository.addOptionList(optionListRespDto.toEntity()) == 0){
//            throw new CustomInternalServerErrorException("옵션 추가 실패");
//        }
//    }
}
