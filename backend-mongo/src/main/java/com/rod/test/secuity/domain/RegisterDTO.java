package com.rod.test.secuity.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import java.io.Serializable;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RegisterDTO implements Serializable {
    //it's a Data Transfer Object for registration
    String firstName ;
    String lastName ;
    String email;
    String username;
    String password ;
}