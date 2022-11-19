package com.study.mvckjipizza.dto.admin;

import com.study.mvckjipizza.domain.Admin;
import com.study.mvckjipizza.dto.validation.ValidationGroups;
import lombok.Data;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
public class JoinReqDto {
    @NotBlank(message = "이름을 입력하세요", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 1, max = 4, message = "이름은 4글자까지 입력 가능합니다", groups = ValidationGroups.SizeGroup.class)
    @Pattern(regexp = "^[가-힇]{2,5}$", message = "한글만 입력하세요", groups = ValidationGroups.PatternCheckGroup.class)
    private String name;
    @NotBlank(message = "이메일을 입력하세요", groups = ValidationGroups.NotBlankGroup.class)
    @Email
    private String email;
    @NotBlank(message = "비밀번호를 입력하세요", groups = ValidationGroups.NotBlankGroup.class)
    @Size(min = 8, max = 16, message = "비밀번호는 8 ~ 16자 입력 가능합니다", groups = ValidationGroups.SizeGroup.class)
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[~!@#$%^&*_])[a-zA-Z\\d-~!@#$%^&*_]*$", message = "비밀번호는 특수기호, 영문, 숫자를 모두 포함해야합니다", groups = ValidationGroups.PatternCheckGroup.class)
    private String password;

    public Admin toEntity() {
        return Admin.builder()
                .name(name)
                .password(new BCryptPasswordEncoder().encode(password))
                .email(email)
                .build();
    }
}