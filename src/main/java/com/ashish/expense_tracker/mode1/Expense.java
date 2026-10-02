package com.ashish.expense_tracker.mode1;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String description;

    private double amount;

    private String category;

    private String payment_by;

    private String date;

    public Expense(){

    }

    public Expense(
            Long id ,
            String description ,
            double amount ,
            String category ,
            String payment_by ,
            String date )
        {
            this.id = id;
            this.description = description;
            this.amount = amount;
            this.category = category;
            this.payment_by = payment_by;
            this.date = date;

        }


    }
