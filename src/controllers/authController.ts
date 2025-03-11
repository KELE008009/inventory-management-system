import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
    // ...existing code...
    res.send('Login successful');
};

export const register = (req: Request, res: Response) => {
    // ...existing code...
    res.send('Registration successful');
};
