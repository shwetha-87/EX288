package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@SpringBootApplication
@RestController
public class EmployeeApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmployeeApplication.class, args);
    }

    @GetMapping("/employee/{id}")
    public Map<String, Object> getEmployee(@PathVariable int id) {

        return Map.of(
                "employeeId", id,
                "lastName", "Leverling",
                "firstName", "Janet",
                "title", "Sales Representative"
        );
    }
}
