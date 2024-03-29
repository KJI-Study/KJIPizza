package com.study.mvckjipizza.repository.admin;

import com.study.mvckjipizza.domain.PaymentItems;
import com.study.mvckjipizza.domain.ProductCategory;
import com.study.mvckjipizza.domain.Sales;
import com.study.mvckjipizza.domain.amdin.Product;
import com.study.mvckjipizza.domain.amdin.SelectProduct;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductManagementRepository {
//    public int pdtRegisterMst(Product product) throws Exception;
//
//    public int registerUpdate(Product product) throws Exception;


    public List<ProductCategory> getCategoryList() throws Exception;

    public List<SelectProduct> getProductListSelect(int categoryName) throws Exception;

    public int saveProduct(Product product)throws Exception;

    public int updateProduct(Product product)throws Exception;

    public int deleteProduct(Product product) throws Exception;

    public List<PaymentItems> getSalesItems() throws Exception;

    public Sales getSales() throws Exception;
}
