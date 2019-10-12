const router = require("express").Router();
const verify = require('./verifyToken');
const User = require("../model/User");
const Post = require('../model/Post');

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

module.exports = router;
