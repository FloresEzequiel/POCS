package com.revature.repository;

import com.revature.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

//spring data jpa is an abstraction of a persistence framework (hibernate)
//our model and the primary key type
@Repository("userDao")
@Transactional
public interface UserDap extends JpaRepository<User, Integer> {
    //JPQL to do complex queries the OG HQL

    @Query("from User where username = :username")
    User retrieveUserByUserName(@Param("username") String username);

}
