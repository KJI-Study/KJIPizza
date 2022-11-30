package com.study.mvckjipizza.dto;


import com.study.mvckjipizza.domain.Cart;
import com.study.mvckjipizza.domain.CartDtl;
import com.study.mvckjipizza.domain.Option;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//
//public class CartReqDto {
//    int cartId;
//    private int tableId;
//    private int pdtId;
//    private int size;
//    private int crust;
//    private int topping;
//
//
//    //html에있는 데이터를 서버에 보낼꺼니까 toEntity;
//    //서버에있는 데이터를 html로 가져올꺼면 toDto;
//
//    public Cart toCartEntity() {
//        return Cart.builder()
//                .id(cartId)
//                .table_id(tableId)
//                .pdt_id(pdtId)
//                .build();
//    }
//
//    public List<CartDtl> toOptionList(int cartId) {
//        List<CartDtl> cartDtls = new ArrayList<CartDtl>();
//        cartDtls.add(CartDtl.builder().cart_id(cartId).option_id(size).build());
//        cartDtls.add(CartDtl.builder().cart_id(cartId).option_id(crust).build());
//        cartDtls.add(CartDtl.builder().cart_id(cartId).option_id(topping).build());
//
//        return cartDtls;
//    }
//}
