const express = require("express")
let { AdsModel } = require("../model/ads.model")

const adsRoute = express.Router()
adsRoute.get("/getallAds", async(req, res) => {
    let data = await AdsModel.find()
    res.send(data)
})
adsRoute.get("/getAds", async(req, res) => {
  const searchQuery=req.query.q
   const pipeline = [
    {
      $match: {
        $or: [
          { name: { $regex: searchQuery, $options: 'i' } },
          { description: { $regex: searchQuery, $options: 'i' } },
          { headline: { $regex: searchQuery, $options: 'i' } },
          { primaryText: { $regex: searchQuery, $options: 'i' } },

        ],
      },
    },
  ];

  const products = await AdsModel.aggregate(pipeline);
  res.send(products) ;
})
module.exports = { adsRoute }
