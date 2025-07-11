const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");
const requestRouter = express.Router();

requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id; // from userId
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      const allowedStatus = ["ignored", "interested"];
      if (!allowedStatus.includes(status)) {
        return res
          .status(400)
          .json({ message: "Invalid status type: " + status });
      }
      // check user cant send connection req to ourself

      // check the user exist or not in db
      const toUser = await User.findById(toUserId);
      if (!toUser) {
        return res.status(404).json({ message: "User not found" });
      }

      // check if there is an existing connection request
      const existingConnectionRequest = await ConnectionRequest.findOne({
        $or: [
          { fromUserId, toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      });

      if (existingConnectionRequest) {      // check connection request and not send double
        return res
          .status(400)
          .send({ message: "Connection Request already exist" });
      }
      const connectionRequest = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();
      return res.json({ message: "Connection Request send successfully", data });
    } catch (error) {
      console.log("connection request error: " + error.stack);
      
      return res.status(400).json({message:"ERROR while sending request: " + error.message});
    }

    // res.send(`send connection successfully`);
  }
);

requestRouter.post(
  "/request/reviews/:status/:requestId",
  userAuth,
  async (req, res) => {
    try {
      
      const { status, requestId } = req.params; 
      const loggedInUser = req.user;
      // const { status } = req.params;
      // pravin => ajay
      // is ajay loggedIn user
      // status = interested
      // request id should be valid

      const allowedStatus = ["accepted", "rejected"];
      if (!allowedStatus.includes(status)) {
        return res.status(400).json({ message: "Status not allowed" });
      }
      const connectionRequest = await ConnectionRequest.findOne({
        _id: requestId,
        toUserId: loggedInUser._id,
        status: "interested",
      });

      if(!connectionRequest){
        return res.status(404).json({message:"Connection request not found"})
      }

      connectionRequest.status = status
      const data = await connectionRequest.save();
      return res.json({message:"Connection request " + status, data})
    } catch (error) {
      return res.status(400).send("ERROR: " + error.message);
    }
  }
);
module.exports = requestRouter;
