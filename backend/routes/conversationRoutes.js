const express = require("express");
const conversationrouter = express.Router();
const { newconversation,getconversation } = require("../controllers/conversationscontroller");


//new post 
conversationrouter.post("/newconv",newconversation  );

//get post 
conversationrouter.get("/:userId",getconversation  );
module.exports = conversationrouter;