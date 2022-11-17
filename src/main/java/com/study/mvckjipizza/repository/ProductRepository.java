package com.study.mvckjipizza.repository;

import com.study.mvckjipizza.domain.CollectionsProduct;

import java.util.List;
import java.util.Map;

public interface ProductRepository {

    public List<CollectionsProduct> getProductList(Map<String,Object> map) throws Exception;

}
