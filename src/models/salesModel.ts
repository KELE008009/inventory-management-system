import { Schema, model } from 'mongoose';

const salesSchema = new Schema({
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    // ...existing code...
});

export const Sale = model('Sale', salesSchema);
