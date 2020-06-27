import express from 'express'
import localAuthFactory from 'express-local-auth'

const router = express.Router()

const app = express()

const services = {
  emailService: myEmailService,
  userStore: myUserStore,
  passwordResetTokenStore: myPasswordResetTokenStore,
  verifyEmailTokenStore: myVerifyEmailTokenStore,
  logger,
}

const options = {
  failedLoginsBeforeLockout: 5,
  verifyEmail: true,
}

const localAuth = localAuthFactory(app, services, options)

router.post('/auth/register', localAuth.register(), function(req, res) {
  return res.status(200)
})

router.post('/auth/login', localAuth.login(), (req, res) => {
  return res.status(200)
})

router.post('/auth/logout', localAuth.logout(), (req, res) => {
  return res.status(200)
})

router.post('/auth/change-password', localAuth.changePassword(), function(req, res) {
  return res.status(200)
})

router.get('/auth/user', (req, res) => {
  return res.json({ user: req.session.authUser })
})

export default router
