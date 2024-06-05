package com.rod.test.secuity.config;

import com.rod.test.secuity.filter.CustomRequestFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity // 스프링 시큐리티 필터가 스프링 필터체인에 등록이 됨
public class SecurityConfig {
     /*
        개발자가 기획에 따라 커스터마이징 해야 함
        private final CustomRequestFilter jwtAuthenticationFilter ;
        private final UserDetailsServiceImpl customerUserDetailsService ;
     */

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder managerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        AuthenticationManager manager = managerBuilder.build();
        http.authenticationManager(manager);

        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorizeRequest ->
                        authorizeRequest
                                .requestMatchers(
                                        AntPathRequestMatcher.antMatcher("/admin/**")
                                ).authenticated()
                                .requestMatchers(
                                        AntPathRequestMatcher.antMatcher("/**"),
                                        AntPathRequestMatcher.antMatcher("/error"),
                                        AntPathRequestMatcher.antMatcher("/api/login/**"),
                                        AntPathRequestMatcher.antMatcher("/api/v1/auth/**"),
                                        AntPathRequestMatcher.antMatcher("/swagger-ui/**"),
                                        AntPathRequestMatcher.antMatcher("/swagger-resources/**"),
                                        AntPathRequestMatcher.antMatcher("/v3/api-docs/**")
                                ).permitAll()

                )
                /*
                    .addFilterAt(
                    this.abstractAuthenticationProcessingFilter(manager),
                    UsernamePasswordAuthenticationFilter.class)
                */
                .headers(
                        headersConfigurer ->
                                headersConfigurer
                                        .frameOptions(
                                                HeadersConfigurer.FrameOptionsConfig::sameOrigin
                                        )
                                        .contentSecurityPolicy( policyConfig ->
                                                policyConfig.policyDirectives(
                                                        "script-src 'self'; " + "img-src 'self'; " +
                                                                "font-src 'self' data:; " + "default-src 'self'; " +
                                                                "frame-src 'self'"
                                                )
                                        )
                );
        return http.build();
    }
    public AbstractAuthenticationProcessingFilter abstractAuthenticationProcessingFilter(final AuthenticationManager manager) {
         /*
            CustomRequestFilter filter = new CustomRequestFilter(
            "/api/login",
            manager
            );
         */
        CustomRequestFilter filter = null;
        return null;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}