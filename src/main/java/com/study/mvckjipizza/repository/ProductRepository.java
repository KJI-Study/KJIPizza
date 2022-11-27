package com.study.mvckjipizza.repository;

import com.study.mvckjipizza.domain.*;
import com.study.mvckjipizza.dto.CartReqDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;
@Mapper
public interface ProductRepository {

    public List<CollectionsProduct> getProductList(Map<String,Object> map) throws Exception;

    public List<Option> getOptionList() throws Exception;

    public int addCartList(Cart cart) throws Exception;
    public int addCartDtls(List<CartDtl> list) throws Exception;

    public List<CartItems> getCartItemsList(int tableId) throws Exception;

    public int deleteCart(int cartId) throws Exception;
    public int delCartList(int tableId) throws Exception;
    public int delselect(int cartId) throws Exception;
}