package com.study.mvckjipizza.service.admin;

import com.study.mvckjipizza.domain.amdin.Product;
import com.study.mvckjipizza.dto.CategoryResponseDto;
import com.study.mvckjipizza.dto.admin.ProductListSelectRespDto;
import com.study.mvckjipizza.dto.admin.ProductRegisterRespDto;
import com.study.mvckjipizza.excetpion.CustomInternalServerErrorException;
import com.study.mvckjipizza.excetpion.CustomValidationException;
import com.study.mvckjipizza.repository.admin.ProductManagementRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProductManagementServiceImpl implements ProductManagementService {

    private final ResourceLoader resourceLoader;
    private final ProductManagementRepository productManagementRepository;

    public List<CategoryResponseDto> getCategoryList() throws Exception {
        List<CategoryResponseDto> categoryResponseDtos = new ArrayList<CategoryResponseDto>();
        productManagementRepository.getCategoryList().forEach(category -> {
            categoryResponseDtos.add(category.toDto());
        });

        return categoryResponseDtos;
    }

    @Override
    public void registerProduct(ProductRegisterRespDto productRegisterRespDto )throws Exception {

        if(productRegisterRespDto.getFiles() == null) {
            Map<String, String> errorMap = new HashMap<String, String>();
            errorMap.put("error", "이미지를 선택하지 않았습니다.");
            throw new CustomValidationException("Img Error", errorMap);
        }

        List<Product> products = new ArrayList<Product>();

        productRegisterRespDto.getFiles().forEach(file -> {
            Resource resource = resourceLoader.getResource("classpath:static/upload/product");
            String targetFilePath  = null;
            String srcFilePath = null;

            System.out.println(productRegisterRespDto.getFiles());
            try{
                //해당경로에 이폴더가 존재하냐
                if(!resource.exists()) {
                    String targetTempPath = resourceLoader.getResource("classpath:static").getURI().toString();
                    String srcTempPath = resourceLoader.getResource("classpath:static").getURI().toString();
                    targetTempPath = targetTempPath.substring(targetTempPath.indexOf("/") + 1);
                    srcTempPath = srcTempPath.substring(srcTempPath.indexOf("/") + 1, srcTempPath.indexOf("target")) + "/src/main/resources/static";

                    System.out.println(targetTempPath);
                    System.out.println(srcTempPath);
                    File f = new File(targetTempPath + "/upload/product");
                    f.mkdirs();
                    f = new File(srcTempPath + "/upload/product");
                    f.mkdirs();
                }

                targetFilePath = resource.getURI().toString().substring(resource.getURI().toString().indexOf("/") + 1);
                srcFilePath = resource.getURI().toString().substring(resource.getURI().toString().indexOf("/") + 1, resource.getURI().toString().indexOf("target")) + "/src/main/resources/static/upload/product";
                System.out.println(targetFilePath);
                System.out.println(srcFilePath);

            } catch (IOException e){
                throw new RuntimeException(e);
            }

            String originName = file.getOriginalFilename();
            String extension = originName.substring(originName.lastIndexOf("."));
            String saveName = UUID.randomUUID().toString().replace("-","") + extension;
            Path targetPath = Paths.get(targetFilePath + "/" + saveName);
            Path srcPath = Paths.get(srcFilePath + "/" + saveName);

            try {
                Files.write(targetPath, file.getBytes());
                Files.write(srcPath, file.getBytes());

            } catch (IOException e) {
                throw new CustomInternalServerErrorException(e.getMessage());
            }

            products.add(Product.builder()
                    .category_id(productRegisterRespDto.getCategory())
                    .pdt_name(productRegisterRespDto.getName())
                    .origin_name(originName)
                    .build());
        });
        productManagementRepository.saveProduct(products);
    }


    //재률이가한거
    @Override
    public List<ProductListSelectRespDto> getProductListSelect(String categoryName) throws Exception {
        List<ProductListSelectRespDto> list = new ArrayList<ProductListSelectRespDto>();
        productManagementRepository.getProductListSelect(categoryName).forEach(pdtMst -> {
            list.add(pdtMst.toDto());
        });
        return list;
    }
}
