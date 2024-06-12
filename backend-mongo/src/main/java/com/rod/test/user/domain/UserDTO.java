package com.rod.test.user.domain;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.stereotype.Component;
import java.util.List;

@Data @Component
public class UserDTO {
    @ApiModelProperty(position = 0) private long userId;
    @ApiModelProperty(position = 1) private String username;
    @ApiModelProperty(position = 2) private String password;
    @ApiModelProperty(position = 3) private String name;
    @ApiModelProperty(position = 4) private String email;
    @ApiModelProperty(position = 5) private String regDate;
    @ApiModelProperty(position = 6) private String token;
    @ApiModelProperty(position = 7) private List<RoleModel> roles;
}