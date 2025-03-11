import { Schema, model } from 'mongoose';

const financeSchema = new Schema({
    totalIncome: { type: Number, required: true },
    totalExpense: { type: Number, required: true },
    // ...existing code...
});

export const Finance = model('Finance', financeSchema);
