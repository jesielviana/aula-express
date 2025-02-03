import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
const saltRounds = 10;

const userRouter = Router()
const prisma = new PrismaClient()

userRouter.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({});
    res.json(users)
  } catch (err) {
    res.status(400).send('Erro ao buscar usuários')
  }
})

export default userRouter