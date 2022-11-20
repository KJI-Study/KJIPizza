package com.study.mvckjipizza.domain.amdin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Admin {
    private int id;
    private String name;
    private String email;
    private String password;
    private LocalDateTime create_date;
    private LocalDateTime update_date;



}
