package com.study.mvckjipizza.repository;

import com.study.mvckjipizza.domain.*;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;
@Mapper
public interface ProductRepository {

    public List<CollectionsProduct> getProductList(Map<String,Object> map) throws Exception;

    public List<Option> getOptionList() throws Exception;

    public void postTable(Order order) throws Exception;

    public void postOrderDtl(List<OrderDtl> orderDtl) throws Exception;

    public int postOrderOption(List<OrderOption> optionList) throws Exception;

    public Order getOrderNumber(int tableNumber) throws Exception;

//    public List<PaymentItems> getPayItems(int orderMstId) throws Exception;

//    public int addCartList(Cart cart) throws Exception;
//    public int addCartDtls(List<CartDtl> list) throws Exception;
//
//    public List<CartItems> getCartItemsList(int tableId) throws Exception;
//
//    public List<CartItems> getPayItems(int tableId) throws Exception;
//
//    public int deleteCart(Cart cart) throws Exception;
//    public int delCartList(int tableId) throws Exception;
//    public int delselect(int cartId) throws Exception;


 //   public int saveSales(int cartId) throws Exception ;

}