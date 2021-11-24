const conversationmodel = require('../models/Conversation')
 

//new Conversation
const newconversation = async (req, res) => {
const newConv = new conversationmodel({
    members:[req.body.senderId,req.body.receiverId,]
})

try {
    const savedConversation = await newConv.save();
    res.status(200).json(savedConversation)
} catch (error) {
    res.status(500).json(err);
}

}


//get conv of user

const getconversation = async (req,res)=> {
try {
    const conversation = await conversationmodel.find({

        members:{ $in:[req.params.userId]}
    })
    res.status(200).json(conversation)
} catch (error) {
    
}

}




module.exports = {newconversation,getconversation }