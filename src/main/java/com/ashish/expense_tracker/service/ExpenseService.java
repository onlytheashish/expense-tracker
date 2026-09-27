package com.ashish.expense_tracker.service;

import com.ashish.expense_tracker.mode1.Expense;
import com.ashish.expense_tracker.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public Expense addExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }

}
