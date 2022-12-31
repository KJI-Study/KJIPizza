package com.study.mvckjipizza.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class ProductManagementController {

    @GetMapping("/register")
    public String loadRegister(){

        return "/admin/register";
    }

    @GetMapping("/sales")
    public String loadLsales() {
        return "/admin/sales";
    }
}
