package com.netcracker.edu.fapi.controller;

import com.netcracker.edu.fapi.models.BookViewModel;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/books")
public class TestController {

    @RequestMapping
    public ResponseEntity<List<BookViewModel>> getAllBooks() {
        return ResponseEntity.ok(getStubBooks());
    }


    private List<BookViewModel> getStubBooks() {
        List<BookViewModel> books = new ArrayList<>();
        BookViewModel bookViewModel = new BookViewModel("123", "steppe wolf");
        books.add(bookViewModel);
        return books;
    }

}
