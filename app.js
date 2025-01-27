import Express from 'express';
import logger from './middlewares/logger.js';
import verifyToken from './middlewares/verifyToken.js';
import authRouter from './router/auth.js';
import userRouter from './router/users.js';

const app = Express()
app.use(Express.json())

app.get('/', (req, res) => {
  res.send("App online!")
})

app.use(logger)
app.use(authRouter)

app.use(verifyToken)
app.use(userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`app online na porta ${PORT}`)
});