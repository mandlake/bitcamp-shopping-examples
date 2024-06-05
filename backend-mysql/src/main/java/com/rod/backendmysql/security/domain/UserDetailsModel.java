package com.rod.backendmysql.security.domain;

import java.util.ArrayList;
import java.util.Collection;

import com.rod.backendmysql.user.domain.UserModel;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class UserDetailsModel implements UserDetails{
    private final UserModel user;

    // 해당 유저의 권한을 리턴
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> collect = new ArrayList<>();
        collect.add(new GrantedAuthority() {
            @Override
            public String getAuthority() {
                ///return user.getRole();
                return "";
            }
        });
        return collect;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    // 계정 만료
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    // 계정 잠김
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    // 비밀번호 유효기간 종료
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    // 계정 활성화
    @Override
    public boolean isEnabled() {
        // 1년동안 로그인을 안하면 휴면 계정으로 변환조건 설정
        // 현재 시간 - 마지막 로그인 시간으로 계산 => 1년 초과하면 false 로 return.
        return true;
    }

}