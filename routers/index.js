const express = require('express')
const courseController = require('../controllers/coursecontroller')
const router = express.Router()
const usersRouter = require('./user')
const courseRouter = require('./course')
const UserController = require('../controllers/usercontroller copy')

router.get('/register', UserController.registerForm)
router.post('/register', UserController.registerHandler)
router.get('/',(req, res) =>{
    res.send("home")
})
router.use('/user', jobsRouter)
router.use('/admin', hiringRouter)
router.use('/course', hiringRouter)



module.exports = router