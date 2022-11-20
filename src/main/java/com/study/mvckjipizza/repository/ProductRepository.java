package com.study.mvckjipizza.repository;

import com.study.mvckjipizza.domain.CollectionsProduct;
import com.study.mvckjipizza.domain.Option;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;
@Mapper
public interface ProductRepository {

    public List<CollectionsProduct> getProductList(Map<String,Object> map) throws Exception;

    public List<Option> getOptionList() throws Exception;

}
