import { Schema, model } from 'mongoose';

const inventorySchema = new Schema({
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    // ...existing code...
});

export const Inventory = model('Inventory', inventorySchema);
