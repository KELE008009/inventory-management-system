import { Router } from 'express';
import { addItem, getItems } from '../controllers/inventoryController';

const router = Router();

router.post('/add', addItem);
router.get('/', getItems);

export default router;
