package com.rod.backendmysql.user.domain;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RoleModel implements Serializable  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id ;

    @Enumerated(EnumType.STRING)
    RoleName roleName ;

    public RoleModel (RoleName roleName) {
        this.roleName = roleName;
    }

    public String getRoleName() {
        return roleName.toString();
    }
}