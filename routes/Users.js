const express = require('express');
const userRoute = express.Router()
const {userDetails,singleDetail,addUser,updateUser,deleteUser} = require('../Controller.js/Users')

userRoute.get('/userget',userDetails)
userRoute.get('/singleDetail/:id',singleDetail)
userRoute.post('/userpost',addUser)
userRoute.put('/:id',updateUser)
userRoute.delete('/:id',deleteUser)

module.exports = {userRoute}