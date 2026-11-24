import { Router } from 'express';

const router = Router();

router.get('/',(req,res)=>{
    res.send({message: "Users retrieved successfully!"})
})

// TODO: users API
// GET    /api/users           → সব user পাওয়া
// GET    /api/users/:id       → একটা user
// POST   /api/users           → নতুন user
// PUT    /api/users/:id       → update
// DELETE /api/users/:id       → delete

export default router;
