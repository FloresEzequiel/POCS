package com.ezeq.repository;

import com.ezeq.models.Electronic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository("electronicDao")
@Transactional
public interface ElectronicDao extends JpaRepository<Electronic,Integer> {

    @Query("from Electronic where electname = :electname")
    Electronic selectByName(@Param("electname")String electname);
}
