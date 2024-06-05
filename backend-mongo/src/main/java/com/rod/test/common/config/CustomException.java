package com.rod.test.common.config;

import java.io.Serial;

public class CustomException extends RuntimeException {
    @Serial
    private static final long serialVersionUID =  -5970845585469454688L;

    public CustomException(String message) {
        System.out.println("CustomException: " + message);
    }
}
