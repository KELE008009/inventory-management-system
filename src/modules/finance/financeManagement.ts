export class FinanceManagement {
    private transactions: Array<{ amount: number; date: Date; description: string }> = [];

    addTransaction(amount: number, description: string): void {
        const transaction = {
            amount,
            date: new Date(),
            description,
        };
        this.transactions.push(transaction);
    }

    getFinancialReport(): { totalIncome: number; totalExpenses: number; balance: number } {
        let totalIncome = 0;
        let totalExpenses = 0;

        this.transactions.forEach(transaction => {
            if (transaction.amount > 0) {
                totalIncome += transaction.amount;
            } else {
                totalExpenses += Math.abs(transaction.amount);
            }
        });

        const balance = totalIncome - totalExpenses;

        return {
            totalIncome,
            totalExpenses,
            balance,
        };
    }
}