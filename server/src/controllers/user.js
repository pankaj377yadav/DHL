const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerNewUser = async (req, res) => {
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log(hashPassword)
    req.body.password= hashPassword
    const userExist = await User.exists({phoneNumber:req.body.phoneNumber})
    if(userExist){
        res.json({msg: "Phone Number already exists"})
    }else{
        const data = await User.create(req.body)
        if(data){
         res.json({msg: "User registered successfully"})
        }
    }
    }

const getUserById =  async (req, res) => {
    const data = await User.findById(req.params.id)
    res.json({data})
    };

const edituserById = async(req, res)=>{
    await User.findByIdAndUpdate(req.params.id, req.body)
};




module.exports= {registerNewUser,getUserById,edituserById}