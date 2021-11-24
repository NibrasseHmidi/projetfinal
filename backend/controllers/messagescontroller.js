const messagemodel = require('../models/Message')

//add
const newmessage = async (req, res) => {
    const newMsg = new messagemodel(req.body)
    try {
        const savedMessage = await newMsg.save();
        res.status(200).json(savedMessage)
    } catch (error) {
        res.status(500).json(error)
    }
}
//get
const getmessage = async (req, res) => {
try {
    const messages = await messagemodel.find({
        conversationId:req.params.conversationId
    })
    res.status(200).json(messages)
} catch (error) {
     res.status(500).json(error)
}

}




module.exports = {newmessage,getmessage}