const router = require("express").Router();
const verify = require('./verifyToken');
const User = require("../model/User");

router.get("/",verify, async (req, res) => {
  const token = req.header('auth-token');
  const id = req.user._id;
  try{
    const user = await User.findOne({ _id: id });
    res.json({
      posts: { title: "my first post", description: "random sdf dsafsasdfasfd",id:id,
    user:user.email}
    });
  
}catch(err){
    res.status(400).send('invalid token')
}
  
});

module.exports = router;
