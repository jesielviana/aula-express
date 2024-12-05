import Express from 'express';
import logger from './middlewares/logger.js';
import userRouter from './router/users.js';

const app = Express()
app.use(Express.json())

app.get('/', (req, res) => {
  res.send("App online!")
})

app.use(logger)
app.use(userRouter)

app.listen(3000, () => {
  console.log('app online na porta 3000')
});