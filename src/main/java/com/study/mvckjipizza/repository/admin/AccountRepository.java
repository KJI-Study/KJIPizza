package com.study.mvckjipizza.repository.admin;

import com.study.mvckjipizza.domain.amdin.Admin;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountRepository {
    public Admin findUserByEmail(String email) throws Exception;

    public int saveAdmin(Admin admin) throws Exception;

}
