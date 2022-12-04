package com.study.mvckjipizza.service;

import com.study.mvckjipizza.domain.Order;
import com.study.mvckjipizza.domain.OrderDtl;
import com.study.mvckjipizza.domain.OrderOption;
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
        List<OrderDtl> orderDtl = new ArrayList<OrderDtl>();


        List<OrderOption> orderOption = new ArrayList<OrderOption>();
        System.out.println(orderOptionReqDto);
        for(int i = 0; i<orderOptionReqDto.size(); i++) {
            if(i == 0){
                order = orderOptionReqDto.get(i).toOrderEntity();
                productRepository.postTable(order);
            }
           orderDtl = orderOptionReqDto.get(i).toOrderList(order.getId());
           productRepository.postOrderDtl(orderDtl);

           int result = order.getId();

           System.out.println(orderDtl);

            if(orderOptionReqDto.get(i).getProductOptionList().size() > 0){
                productRepository.postOrderOption(orderOptionReqDto.get(i).toOrderOption(result));
//                orderOption = orderOptionReqDto.get(i).toOrderOption(orderDtl.get(i).getId());
//                productRepository.postOrderOption(orderOption);
            }
        }

        //OrderDtl 드가는부분
     //   Order finalOrder = order;

//        orderOptionReqDto.forEach(item -> {
//
//            try {
//                productRepository.postOrderDtl(item.toOrderList(finalOrder.getId()));
//                for(int i = 0; i<item.toOrderList(finalOrder.getId()).size(); i++) {
//                    if(item.getProductOptionList().size() > 0) {
//                        OrderDtl orderDtl = item.toOrderList(finalOrder.getId()).get(i);
//                        productRepository.postOrderOption(item.toOrderOption(orderDtl.getId()));
//                    }
//                }
//            } catch (Exception e) {
//                throw new RuntimeException(e);
//            }
//        });
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
