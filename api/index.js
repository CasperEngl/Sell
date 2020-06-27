import express from 'express'

// import auth from './auth'

const router = express.Router()

const app = express()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)

  req.res = res
  res.req = req

  next()
})

// router.use('/auth', auth)

router.get('/ping', (_, res) => {
  return res.json({
    response: 'Pong!',
  })
})

export default {
  path: '/api',
  handler: router,
}
