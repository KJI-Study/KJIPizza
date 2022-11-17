package com.study.mvckjipizza.repository;

import com.study.mvckjipizza.domain.CollectionsProduct;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;
@Mapper
public interface ProductRepository {

    public List<CollectionsProduct> getProductList(Map<String,Object> map) throws Exception;

}
