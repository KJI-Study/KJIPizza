package com.study.mvckjipizza.dto;

import com.study.mvckjipizza.domain.Cart;
import com.study.mvckjipizza.domain.CartItems;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CartItemsRespDto {
    private int tableId;
    private int cartId;
    private String pdtName;
    private int pdtPrice;
    private int cartegoryId;
    private String origin_name;
    private String save_name;
    private List<Map<String, Object>> cartOptions;

    public CartItems toEntity() {
        return CartItems.builder()
                .cart_id(cartId)
                .build();
    }
}
