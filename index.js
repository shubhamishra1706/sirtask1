const express = require('express')
const cors = require('cors')


const {userRoute} = require('./routes/Users')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const  dotenv  = require('dotenv')
app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}))
dotenv.config()
app.use(cors())


mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected with mongodb")
}).catch((err)=>{
    console.log("error in database connection",err)
})



///////creating schema

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number
})



////creating collection

// const Product = new mongoose.model('Product',productSchema)


//////////creating api

// app.post('/posts',async(req,res)=>{
//     const data = await Product.create(req.body);
//      console.log(data)
//    await res.json({data})
// })

// app.post('/post',async(req,res)=>{
//     const {name,description,price} = req.body;
//     const product = new Product({name,description,price})
//     const postproduct = await product.save();
//     res.json(postproduct)
// })

app.use('/',userRoute)


// app.get('/',(req,res)=>{
//     res.send('server is running')
// })


app.listen(5500,()=>{
    console.log("server is running")
})