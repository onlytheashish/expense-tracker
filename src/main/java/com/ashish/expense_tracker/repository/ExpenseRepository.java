package com.ashish.expense_tracker.repository;

import com.ashish.expense_tracker.mode1.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExpenseRepository extends JpaRepository <Expense, Long>{


}
