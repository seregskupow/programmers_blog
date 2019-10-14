const router = require("express").Router();
const verify = require('./verifyToken');
const User = require("../model/User");
const Post = require('../model/Post');

//Post post to db
router.post("/",verify, async (req, res) => {
  const token = req.header('auth-token');
  const id = req.user._id;
  const post = new Post({
    name:req.body.name,
    text:req.body.text
  });
  try{
    const user = await User.findOne({ _id: id });
    const savedPost = await post.save();

    res.json(savedPost);
  
}catch(err){
    res.status(400).send('invalid token')
}
  
});
//Get all posts from db
router.get("/showall", async (req,res)=>{
  try{
    const allPosts = await Post.find();
    res.json(allPosts);
  }catch(err){

  }

})

//find user posts
router.get("/userposts",async (req,res)=>{
  const user = req.query.user;
  try{
    const userPosts = await Post.find({name:user});
    res.json(userPosts);
  }catch(err){
    res.status(400).send("user not found");
  }
})
module.exports = router;
