const{model,Schema}=require('mongoose')
let postSchema=new Schema({
    post:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2022/11/27/13/27/couple-7619797_640.jpg"

    },
    posted_by:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
module.exports = model('post',postSchema)