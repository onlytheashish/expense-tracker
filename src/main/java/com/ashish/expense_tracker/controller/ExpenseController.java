package com.ashish.expense_tracker.controller;

import com.ashish.expense_tracker.mode1.Expense;
import com.ashish.expense_tracker.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController (ExpenseService expenseService) {
     this.expenseService = expenseService;
    }

    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseService.addExpense(expense);
    }

    @GetMapping
    public List<Expense> getAllExpense() {
        return expenseService.getAllExpenses();
    }

    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable Long id) {
        expenseService.deleteExpense(id);
    }

}
