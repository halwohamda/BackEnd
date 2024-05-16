import express from 'express';
const router = express.Router();
import { newTasks,getAllTasks } from '../Components/taskComponent.js';


//post
router.post('/new' ,newTasks)

//get 
router.get('/',getAllTasks)


export default router;