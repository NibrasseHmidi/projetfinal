const express = require("express");
const messagerouter = express.Router();
const { newmessage,getmessage } = require("../controllers/messagescontroller");

//add
messagerouter.post("/newmsg",newmessage );
//get 

messagerouter.get("/:conversationId",getmessage );
module.exports = messagerouter;