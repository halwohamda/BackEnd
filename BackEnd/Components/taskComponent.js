import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

export const newTasks = async(req,res)=>{
    const {title , description} = req.body;
    const newTask = await prisma.tasks.create({
        data:{
            title,
            description
        }
    })
    res.status(201).json({
        message: 'success Added a newTask'
    })

}
export const getAllTasks = async(req,res)=>{
    const tasks = await prisma.tasks.findMany({})
    res.status(200).json({
        message: "success gated all tasks",
        tasks
    
    })
}