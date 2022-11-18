package com.study.mvckjipizza.repository.admin;

import com.study.mvckjipizza.domain.Admin;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountRepository {
    public Admin findUserEmail(String email) throws Exception;

    public int saveAdmin(Admin admin) throws Exception;

}
