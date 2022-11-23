package com.study.mvckjipizza.repository;

import com.study.mvckjipizza.domain.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;
@Mapper
public interface ProductRepository {

    public List<CollectionsProduct> getProductList(Map<String,Object> map) throws Exception;

    public List<Option> getOptionList() throws Exception;

    public int addCartList(Cart cart) throws Exception;
    public int addCartDtls(List<CartDtl> list) throws Exception;

    public CartItems getCartItemsList(int tableId) throws Exception;
}