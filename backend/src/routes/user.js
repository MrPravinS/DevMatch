const express = require("express")
const { userAuth } = require("../middlewares/auth");
const ConnectionRequestModel = require("../models/connectionRequest");

const userRouter = express.Router()

const USER_SAFE_DATA = "firstName lastName age gender photoUrl about"
userRouter.get("/user/request/recieved", userAuth, async(req,res) => {
    try {
        const loggedInUser =req.user;
        const connectionRequest = await ConnectionRequestModel.find({
            toUserId:loggedInUser._id,
            status:"interested"
        }).populate("fromUserId", USER_SAFE_DATA)
        
        return res.json({
            message:"Connection requests fetched",
            data:connectionRequest
        })
    } catch (error) {
        return res.status(500).json({
            message:"Failed to get connection request ",
            error
        })
    }
})


userRouter.get("user/connections", userAuth, async(req,res) => {
    try {

        const loggedInUser = req.user
        const connectionReq = await ConnectionRequestModel.find({
            $or:[
                {toUserId:loggedInUser._id, status:"accepted"},
                {fromUserId:loggedInUser._id, status:"accepted"}
            ]
        }).populate("fromUserId", USER_SAFE_DATA).populate("toUserId", USER_SAFE_DATA);


        const data = connectionReq.map(row => {
            if(row.fromUserId._id.toString() === loggedInUser._id.toString()){
             return row.toUserId;
            }
            return fromUserId;
        })
        return res.json({data})

        
    } catch (error) {
        return res.status(400).json({
            message:"Failed to get connection request ",  error
        })
    }
})

module.exports = {
    userRouter
}