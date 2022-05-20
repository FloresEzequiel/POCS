package com.infosys.irs.repository;

import com.infosys.irs.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <UserEntity, String> {
}
