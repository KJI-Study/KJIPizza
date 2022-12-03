package com.study.mvckjipizza.service;

import com.study.mvckjipizza.domain.Order;
import com.study.mvckjipizza.domain.OrderDtl;
import com.study.mvckjipizza.domain.Sales;
import com.study.mvckjipizza.dto.OptionListRespDto;
import com.study.mvckjipizza.dto.OrderOptionReqDto;
import com.study.mvckjipizza.dto.ProductListRespDto;
import com.study.mvckjipizza.dto.SalesDto;
import com.study.mvckjipizza.excetpion.CustomInternalServerErrorException;
import com.study.mvckjipizza.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Override
    public List<ProductListRespDto> getProductList(String category) throws Exception {

        List<ProductListRespDto> productList = new ArrayList<ProductListRespDto>();
        Map<String, Object> map = new HashMap<String, Object>();

        map.put("category", category);

        productRepository.getProductList(map).forEach(collectionsProduct -> {
            productList.add(collectionsProduct.toDto());
        });

        return productList;
    }

    @Override
    public List<OptionListRespDto> getOptionList() throws Exception {
        List<OptionListRespDto> optionList = new ArrayList<OptionListRespDto>();

        productRepository.getOptionList().forEach(optionProduct -> {
            optionList.add(optionProduct.toDto());
        });
        return optionList;
    }

    @Override
    public void postCartList(List<OrderOptionReqDto> orderOptionReqDto) throws Exception {

        Order order = new Order();
        System.out.println(orderOptionReqDto);
        for(int i = 0; i<orderOptionReqDto.size(); i++) {
           order = orderOptionReqDto.get(i).toOrderEntity();
           productRepository.postTable(order);
           if(i == 0){
               break;
           }
        }
        //OrderDtl 드가는부분
        Order finalOrder = order;
        orderOptionReqDto.forEach(item -> {
            System.out.println(finalOrder);
            try {
                productRepository.postOrderDtl(item.toOrderList(finalOrder.getId()));
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });

        //System.out.println(orderDtls);
        //세번째 order_option
        //if()
       //  productRepository.postOrderOption(orderOptionReqDto.toOrderOption(orderDtls.()));
    }

//    @Override
//    public void saveSales(SalesDto salesDto) throws Exception {
//        Sales sales = salesDto.toEntity();
//
//        if(productRepository.saveSales(sales) == 0) {
//            throw new CustomInternalServerErrorException("결제중 문제 발생");
//        }
//    }
}
