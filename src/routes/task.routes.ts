import { Router } from 'express';

import { getTask, createTask } from '../controllers/task.controller';

const router = Router();

router.get('/', getTask);
router.post('/', createTask);

export default router;
