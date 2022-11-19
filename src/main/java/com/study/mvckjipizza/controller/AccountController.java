package com.study.mvckjipizza.controller;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AccountController {
    @GetMapping("/admin/login")
    public String login(Model model, @RequestParam @Nullable String email) {
        model.addAttribute("email", email);
//        model.addAttribute("email", email);
        return "admin/login";
    }

    @GetMapping("/admin/join")
    public String join() {
        return "admin/join";
    }
}
