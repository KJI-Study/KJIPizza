package com.study.mvckjipizza.service.admin;

import com.study.mvckjipizza.domain.PaymentItems;
import com.study.mvckjipizza.domain.SalesItems;
import com.study.mvckjipizza.domain.amdin.Product;
import com.study.mvckjipizza.dto.CategoryResponseDto;
import com.study.mvckjipizza.dto.PaymentItemsRespDto;
import com.study.mvckjipizza.dto.SalesDto;
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
import org.springframework.web.multipart.MultipartFile;


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
    public void registerProduct(ProductRegisterRespDto productRegisterRespDto)throws Exception {

        if(productRegisterRespDto.getFile() == null) {
            Map<String, String> errorMap = new HashMap<String, String>();
            errorMap.put("error", "이미지를 선택하지 않았습니다.");
            throw new CustomValidationException("Img Error", errorMap);
        }


        Resource resource = resourceLoader.getResource("classpath:static/upload/product");
        String targetFilePath  = null;
        String srcFilePath = null;

        MultipartFile file = productRegisterRespDto.getFile();

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
            srcFilePath = resource.getURI().toString().substring(resource.getURI().toString().indexOf("/") + 1, resource.getURI().toString().indexOf("target")) + "/src/main/resources/image/product";
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

        Product product = Product.builder()
                .category_id(productRegisterRespDto.getCategory())
                .pdt_name(productRegisterRespDto.getName())
                .pdt_price(productRegisterRespDto.getPrice())
                .origin_name(originName)
                .save_name(saveName)
                .build();

        productManagementRepository.saveProduct(product);
    }

    @Override
    public void updateRegister(ProductRegisterRespDto productRegisterRespDto) throws Exception {

        System.out.println(productRegisterRespDto);


//        if(productRegisterRespDto.getFile() == null) {
//            Map<String, String> errorMap = new HashMap<String, String>();
//            errorMap.put("error", "이미지를 선택하지 않았습니다.");
//            throw new CustomValidationException("Img Error", errorMap);
//        }

        Resource resource = resourceLoader.getResource("classpath:static/upload/product");
        String targetFilePath  = null;
        String srcFilePath = null;

        System.out.println(productRegisterRespDto.getFile());

        MultipartFile file = productRegisterRespDto.getFile();

        String originName = null;
        String saveName = null;

        if(file != null) {
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
                srcFilePath = resource.getURI().toString().substring(resource.getURI().toString().indexOf("/") + 1, resource.getURI().toString().indexOf("target")) + "/src/main/resources/image/product";
                System.out.println(targetFilePath);
                System.out.println(srcFilePath);

            } catch (IOException e){
                throw new RuntimeException(e);
            }
            originName = file.getOriginalFilename();
            String extension = originName.substring(originName.lastIndexOf("."));
            saveName = UUID.randomUUID().toString().replace("-","") + extension;
            Path targetPath = Paths.get(targetFilePath + "/" + saveName);
            Path srcPath = Paths.get(srcFilePath + "/" + saveName);

            try {
                Files.write(targetPath, file.getBytes());
                Files.write(srcPath, file.getBytes());

            } catch (IOException e) {
                throw new CustomInternalServerErrorException(e.getMessage());
            }
        }


        Product product = Product.builder()
                .id(productRegisterRespDto.getId())
                .category_id(productRegisterRespDto.getCategory())
                .pdt_name(productRegisterRespDto.getName())
                .pdt_price(productRegisterRespDto.getPrice())
                .origin_name(originName)
                .save_name(saveName)
                .build();

        productManagementRepository.updateProduct(product);
    }

    @Override
    public void productDelete(ProductListSelectRespDto productListSelectRespDto) throws Exception {

        Product product = productListSelectRespDto.toEntity();

        productManagementRepository.deleteProduct(product);

    }


    //재률이가한거
    @Override
    public List<ProductListSelectRespDto> getProductListSelect(int categoryName) throws Exception {
        List<ProductListSelectRespDto> list = new ArrayList<ProductListSelectRespDto>();
        productManagementRepository.getProductListSelect(categoryName).forEach(pdtMst -> {
            list.add(pdtMst.toDto());
        });
        return list;
    }

    @Override
    public List<PaymentItemsRespDto> getAllSales() throws Exception {

        List<PaymentItemsRespDto> paymentItemsRespDtos = new ArrayList<PaymentItemsRespDto>();

        List<PaymentItems> paymentItems = productManagementRepository.getSalesItems();

        paymentItems.forEach(cartItem -> {
            paymentItemsRespDtos.add(cartItem.toDto());
        });

        return paymentItemsRespDtos;
    }

    @Override
    public SalesDto getTotalSales() throws Exception {

        return productManagementRepository.getSales().toDto();
    }
}
