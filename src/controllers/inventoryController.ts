import { Request, Response } from 'express';

export const addItem = (req: Request, res: Response) => {
    // ...existing code...
    res.send('Item added to inventory');
};

export const getItems = (req: Request, res: Response) => {
    // ...existing code...
    res.send('Inventory items');
};
