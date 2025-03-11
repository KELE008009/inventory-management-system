import { Request, Response } from 'express';

export const createSale = (req: Request, res: Response) => {
    // ...existing code...
    res.send('Sale created');
};

export const getSales = (req: Request, res: Response) => {
    // ...existing code...
    res.send('Sales data');
};
