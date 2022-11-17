package com.study.mvckjipizza.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AccountController {
    @GetMapping("login")
    public String login() {
        return "admin/login";
    }

    @GetMapping("join")
    public String join() {
        return "admin/join";
    }
}
