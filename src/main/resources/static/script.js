const API_URL = "/api/expenses";

let allExpenses = [];

async function addExpense() {
    
    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    const payment_by = document.getElementById("payment_by").value;
    const date = document.getElementById("date").value;

    const expense = {
        description : description,
        amount : Number(amount),
        category : category,
        payment_by : payment_by,
        date : date
    };

    try {

        const response = await fetch(API_URL , {

            method : "POST",

            headers : {
                "content-type" : "application/json"
            },

            body : JSON.stringify(expense)
        });

        if(!response.ok) {
            throw new Error("Failed to add expense");
        }

        const savedExpense = await response.json();

        console.log("Expense saved" , savedExpense);

        alert("Expense added successfully ! ");

        document.getElementById("description").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("category").value = "";
        document.getElementById("payment_by").value = "";
        document.getElementById("date").value = "";

    }

    catch(error) {
        console.error("Error" , error);

        alert("Failed to add expense.")
    }
}

console.log("Expense Tracker frontend loaded");

async function loadExpenses() {

    try {

    const response = await fetch(API_URL);

    console.log("Response status" , response.status);

    if(!response.ok) {
        throw new Error(`Server returned ${response.status}`);
    }

    const expenses = await response.json();

    allExpenses = expenses;

    displayExpenses(expenses);

}

catch(error) {

    console.error("Error" , error);

    alert("Failed to load expenses.");
}

}

function displayExpenses(expenses) {

    const expenseList = document.getElementById("expenseList");

    const totalElement = document.getElementById("total");

    expenseList.innerHTML = "";

    if(expenses.length === 0) {

        expenseList.innerHTML = "<p>No expenses found.</p>";

        totalElement.textContent = "0";

        return ;
    }

    let total = 0;

    expenses.forEach(expense => {

        total += expense.amount;

        const expenseElement = document.createElement("div");

        expenseElement.classList.add("expense");

        expenseElement.innerHTML = `

            <h3> ${expense.description} </h3>
            <p> Amount : ${expense.amount} </p>
            <p> Category : ${expense.category} </p>
            <p> Payment By : ${expense.payment_by} </p>
            <p> Date : ${expense.date} </p>
            <button onclick="deleteExpense(${expense.id})">
                Delete
            </button>

            `;

            expenseList.appendChild(expenseElement);
    });

    totalElement.textContent = total;
}

async function deleteExpense(id) {

    try {

        const response = await fetch(
            `${API_URL}/${id}`,

            {
                method : "DELETE"
            }
        );

        if(!response.ok) {

            throw new Error(`Server returned ${response.status}`);
        }

        alert("Expense deleted successfully ! ");

        loadExpenses();
    }

    catch(error) {

        console.error("DELETE EXPENSE ERROR" , error);

        alert("Failed to delete expense.");
    }
    
}

function filterExpenses() {

    const selectedCategory = document.getElementById("filterCategory").value;

    if(selectedCategory === "All") {

        displayExpenses(allExpenses);

        return ;
    }

    const filteredExpenses = allExpenses.filter(

        expense => {return expense.category === selectedCategory;

        });

        displayExpenses(filteredExpenses);

}

loadExpenses();
