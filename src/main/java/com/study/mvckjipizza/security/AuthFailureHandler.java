package com.study.mvckjipizza.security;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        if(exception.getClass() == UsernameNotFoundException.class || exception.getClass() == BadCredentialsException.class) {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.append("<html>");
            stringBuilder.append("<body>");
            stringBuilder.append("<script>");
            stringBuilder.append("alert(\'사용자 정보가 일치하지 않습니다.\');");
            stringBuilder.append("history.back();");
            stringBuilder.append("</script>");
            stringBuilder.append("</body>");
            stringBuilder.append("</html>");
            response.setContentType("text/html; charset=UTF-8");
            response.getWriter().print(stringBuilder.toString());
        }else {
            response.sendRedirect("/admin/login?error");
        }
    }
}
