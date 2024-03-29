package com.study.mvckjipizza.service;

import com.study.mvckjipizza.domain.Order;
import com.study.mvckjipizza.domain.OrderDtl;
import com.study.mvckjipizza.domain.OrderOption;
import com.study.mvckjipizza.domain.PaymentItems;
import com.study.mvckjipizza.dto.OptionListRespDto;
import com.study.mvckjipizza.dto.OrderOptionReqDto;
import com.study.mvckjipizza.dto.PaymentItemsRespDto;
import com.study.mvckjipizza.dto.ProductListRespDto;
import com.study.mvckjipizza.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

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
        for (int i = 0; i < orderOptionReqDto.size(); i++) {
            if (i == 0) {
                order = orderOptionReqDto.get(i).toOrderEntity();
                productRepository.postTable(order);
            }
            orderDtl = orderOptionReqDto.get(i).toOrderList(order.getId());
            productRepository.postOrderDtl(orderDtl);
            AtomicInteger result = new AtomicInteger();
            orderDtl.forEach(item -> {
                result.set(item.getId());
                System.out.println(result.get());
            });

            System.out.println(result.get());
            System.out.println(order);

            if (orderOptionReqDto.get(i).getProductOptionList().size() > 0) {
                productRepository.postOrderOption(orderOptionReqDto.get(i).toOrderOption(result.get()));

            }
        }
    }

    @Override
    public OrderOptionReqDto getOrderId(int tableNumber) throws Exception {

        System.out.println(productRepository.getOrderNumber(tableNumber).toDto());

        return productRepository.getOrderNumber(tableNumber).toDto();
    }

    @Override
    public List<PaymentItemsRespDto> getPayItems(int orderMstId) throws Exception {
        List<PaymentItemsRespDto> paymentItemsRespDtos = new ArrayList<PaymentItemsRespDto>();

        List<PaymentItems> paymentItems = productRepository.getPayItems(orderMstId);

        paymentItems.forEach(cartItem -> {
            paymentItemsRespDtos.add(cartItem.toDto());
        });

        return paymentItemsRespDtos;
    }


}