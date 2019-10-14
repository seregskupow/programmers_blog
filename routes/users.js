const router = require("express").Router();
const User = require("../model/User");

//Show all users
router.get("/showallusers",async (req,res)=>{
    try{
        const allUsers = await User.find();
        res.json(allUsers);
    }catch(err){
        res.status(400).send("some error occured");
    }
})

//Find user
router.get('/finduser', async (req,res)=>{
    const user = req.query.user;
    try{
        const foundUser = await User.find({name:user});
    }catch(err){
        res.status(400).send("user not found");
    }
})
module.exports = router;