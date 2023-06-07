const mongoose = require('mongoose')

const UserSchema = new  mongoose.Schema({
    id:String,
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    profile_photo:String,
    mobile:String,
    status:String,
    location:String
})

module.exports = mongoose.model('Users',UserSchema)