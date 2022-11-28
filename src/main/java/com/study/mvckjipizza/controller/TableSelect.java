package com.study.mvckjipizza.controller;

import com.study.mvckjipizza.dto.CartItemsRespDto;
import com.study.mvckjipizza.dto.CartReqDto;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

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
    
    @GetMapping("/order")
    public String orderPage() {
        return "product/orderpage";
    }

}
