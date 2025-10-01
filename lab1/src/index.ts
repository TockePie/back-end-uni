import express, { Request, Response } from 'express'

const app = express()

const port = process.env.PORT || 3000

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Welcome to the Express + TypeScript Server!' })
})

app.get('/healthcheck', (_req: Request, res: Response) => {
  const now = new Date().toISOString()

  res.status(200).json({ date: now, status: 'ok' })
})

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
})
