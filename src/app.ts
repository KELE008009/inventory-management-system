import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import salesRoutes from './routes/salesRoutes';
import inventoryRoutes from './routes/inventoryRoutes';
import financeRoutes from './routes/financeRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/sales', salesRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/finance', financeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});