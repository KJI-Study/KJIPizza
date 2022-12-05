package com.study.mvckjipizza.service;

import com.study.mvckjipizza.domain.OrderDtl;
import com.study.mvckjipizza.dto.*;

import java.util.List;

public interface ProductService {

    public List<ProductListRespDto> getProductList(String category) throws Exception;
    public List<OptionListRespDto> getOptionList() throws Exception;

    public void postCartList (List<OrderOptionReqDto> orderOptionReqDto) throws Exception;

    public OrderOptionReqDto getOrderId(int tableNumber) throws Exception;

   public List<PaymentItemsRespDto> getPayItems(int orderMstId) throws Exception;

}
