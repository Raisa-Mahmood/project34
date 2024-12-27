const form = document.getElementById("transaction-form");
        const transactionsDiv = document.getElementById("transactions");
        const totalIncomeSpan = document.getElementById("total-income");
        const totalExpenseSpan = document.getElementById("total-expense");
        const balanceSpan = document.getElementById("balance");

        let totalIncome = 0;
        let totalExpense = 0;

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const description = document.getElementById("description").value;
            const amount = parseFloat(document.getElementById("amount").value);
            const type = document.getElementById("type").value;

            if (!description || isNaN(amount) || amount <= 0) {
                alert("Please provide valid inputs.");
                return;
            }

            const transactionDiv = document.createElement("div");
            transactionDiv.classList.add("transaction", type);

            transactionDiv.innerHTML = `
                <span>${description}</span>
                <span>${type === "income" ? "+" : "-"}${amount}</span>
            `;

            transactionsDiv.appendChild(transactionDiv);

            if (type === "income") {
                totalIncome += amount;
            } else {
                totalExpense += amount;
            }

            updateSummary();

            form.reset();
        });

        function updateSummary() {
            const balance = totalIncome - totalExpense;
            totalIncomeSpan.textContent = totalIncome.toFixed(2);
            totalExpenseSpan.textContent = totalExpense.toFixed(2);
            balanceSpan.textContent = balance.toFixed(2);
        }