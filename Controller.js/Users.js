const Users = require('../modal/Users')

const userDetails = async (req,res)=>{
    const details = await Users.find();
    try{
        res.send(details)
    }
    catch(error){
        res.send({error})
    }
 
}

const singleDetail = async (req,res)=>{
    const details = await users.findById(req.params.id)
    if(error){
        res.send({error:error.message})
    }
    else{
        res.send(details)
    }
}

// const addUser = async (req,res)=>{
//  try{
//     const {id,firstname,lastname,email,gender,profile,mobile,status,location} = req.body;
//     const data = new Users({id,firstname,lastname,email,gender,profile,mobile,status,location});
//     const saveUser = await data.create();
//     res.json({saveUser})
//  }catch(error){
//     res.send({error:error.message})
//  }
// }




const addUser = async (req,res)=>{
    try{
        
       const user = new Users({
        id:req.body.id,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        gender:req.body.gender,
        profile:req.body.profile,
        mobile:req.body.mobile,
        status:req.body.status,
        location:req.body.location})
     
       const saveUser = await user.save();
       res.json({saveUser})


       console.log(user)
    }catch(error){
       res.send({error:error.message})
    }
   }









const updateUser = async (req,res)=>{
    try{
       const {id,firstname,lastname,email,gender,profile,mobile,status,location} = req.body;
       const updateuser = new users ({id,firstname,lastname,email,gender,profile,mobile,status,location});
       const update = await data.findByIdAndUpdate({_id:req.params.id},updateuser);
       res.send(update)
    }catch(error){
       res.send({error:error.message})
    }
   }


   
const deleteUser = async (req,res)=>{
    const details = await users.findByIdAndDelete(req.params.id)
    if(error){
        res.send({error:error.message})
    }
    else{
        res.send(details)
    }
}

module.exports = {userDetails,singleDetail,addUser,updateUser,deleteUser}