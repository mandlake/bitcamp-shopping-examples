package com.rod.test.user.controller;

import com.rod.test.user.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import reactor.core.publisher.Mono;

import org.springframework.web.bind.annotation.*;
import com.rod.test.common.domain.Messenger;
import com.rod.test.user.domain.UserDTO;

@Log4j2
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/users")
public class UserController {
    private final UserServiceImpl service;

    @PostMapping("/login")
    public Mono<Messenger> login(@RequestBody UserDTO param) {
        log.info("::: login controller parameter ",param.toString());
        log.info(param.toString());
        log.info(1);
        // Messenger messenger = service.login(param);
        Messenger m = Messenger.builder().message("SUCCESS").build();
        Mono<Messenger> helloWorld = Mono.just(m);
        return helloWorld;
    }

}