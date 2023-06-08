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
    try{
        const details = await Users.findById(req.params.id)
        res.json(details)
    }
    catch(error){
        res.send({message:error.message})
    }
}

// const addUser = async (req,res)=>{s
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
        first_name:req.body.first_name,
        last_name:req.body.last_name,
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
       const {id,first_name,last_name,email,gender,profile,mobile,status,location} = req.body;
    //    const updateuser = new Users ({id,firstname,lastname,email,gender,profile,mobile,status,location});
       const update = await Users.findOneAndUpdate({id:req.params.id},
        {id,first_name,last_name,email,gender,profile,mobile,status,location});
       res.send(update)
    }catch(error){
       res.send({error:error.message})
    }
   }


   
const deleteUser = async (req,res)=>{
    const details = await Users.findOneAndDelete({id:req.params.id})
   try{
    res.send(details)
   }
   catch(error){
    res.send(error)
   }
}

module.exports = {userDetails,singleDetail,addUser,updateUser,deleteUser}