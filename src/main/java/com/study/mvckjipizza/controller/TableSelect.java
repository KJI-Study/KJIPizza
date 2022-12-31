package com.study.mvckjipizza.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Controller
public class TableSelect {

    @GetMapping("/tableselect")
    public String aa(){
        return "table-select";
    }


    @GetMapping("/table/{number}")
    public String productmain(Model model , @PathVariable int number )
    {
        model.addAttribute("text", number);


        return "product/product";
    }
    
    @GetMapping("/order/{number}")
    public String orderPage(Model model , @PathVariable int number) {

        model.addAttribute("text", number);

        return "product/orderpage";
    }

}
