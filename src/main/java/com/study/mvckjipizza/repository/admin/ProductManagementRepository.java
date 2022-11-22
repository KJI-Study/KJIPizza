package com.study.mvckjipizza.repository.admin;

import com.study.mvckjipizza.domain.ProductCategory;
import com.study.mvckjipizza.domain.amdin.Product;
import com.study.mvckjipizza.domain.amdin.SelectProduct;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductManagementRepository {
    public int pdtRegisterMst(Product product) throws Exception;

    public int registerUpdate(Product product) throws Exception;

    //public int registerImgFiles(Product product) throws Exception;

    public List<ProductCategory> getCategoryList() throws Exception;
    //재률이가한거
    public List<SelectProduct> getProductListSelect(String categoryName) throws Exception;

}
