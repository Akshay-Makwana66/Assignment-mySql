const sql = require('../db')
const aws_config = require('../util/aws_config')

const uploadPost = async (req,res)=>{
    let data = req.body;
    const storingUser_id= `select * from posts WHERE user_id=${data.user_id}`
    let checkUserId= await sql(storingUser_id);
    if(checkUserId.length>0){
      return res.send({msg:"A user can upload only one post"})
    };

    let files = req.files;
    if(files){
      data.filename = await aws_config.uploadFile(files[0]);        
     }
    const creatingPost = "INSERT INTO posts (user_id,filename) VALUES ?";
    let values = [
        [data.user_id,`${data.filename}`]
      ];
    let newPost = await sql(creatingPost ,[values]);
    res.send({msg: "1 record inserted",data:newPost})
};

const getPost = async(req,res)=>{
   let gettingListOfPost =  await sql("SELECT * FROM posts");
   res.send({msg:"list of posts",data:gettingListOfPost})
    };

module.exports= {uploadPost,getPost};

