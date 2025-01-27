import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";
import { Router } from 'express';
const saltRounds = 10;

const userRouter = Router()
const prisma = new PrismaClient()

userRouter.get('/users', async (req, res) => {
  const users = await prisma.user.findMany({});
  res.json(users)
})

export default userRouter