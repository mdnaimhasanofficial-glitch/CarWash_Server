import { Router } from 'express';
import services from './services/index.js';
import bookings from './bookings/index.js';
import users from './users/index.js';

const router = Router();

router.use('/services', services);
router.use('/bookings', bookings);
router.use('/users', users);

export default router;
