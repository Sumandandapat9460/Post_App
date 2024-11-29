const postSchema = require('../schema/schema')
exports.createPost=async(req,res)=>{
    let payload = {
        post:req.file.path,
        posted_by:req.body.posted_by,
        description:req.body.description
    }
    await postSchema.create(payload)
    res.status(201).json({success:true,message:'Successfully inserted',payload})
}