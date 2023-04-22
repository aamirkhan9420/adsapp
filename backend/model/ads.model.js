const mongoose=require('mongoose')
const adsSchema=mongoose.Schema({
    
    name:String,
    companyId:Number,
    primaryText:String,
    headline:String,
    description:String,
    imageUrl:String,
  
})
const AdsModel=mongoose.model("ads",adsSchema)
module.exports={AdsModel}