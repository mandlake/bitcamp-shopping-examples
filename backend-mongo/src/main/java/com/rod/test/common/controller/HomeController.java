package com.rod.test.common.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequiredArgsConstructor
public class HomeController {

    @GetMapping("/")
    public String home() {
        return new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(new Date()) + " - Home Page";
    }
}
