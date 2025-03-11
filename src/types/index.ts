export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
}

export interface Sale {
    id: number;
    productId: number;
    quantity: number;
    totalPrice: number;
    saleDate: Date;
}

export interface Transaction {
    id: number;
    amount: number;
    transactionDate: Date;
    description: string;
}

export interface Inventory {
    item: string;
    quantity: number;
}

export interface Finance {
    totalIncome: number;
    totalExpense: number;
}