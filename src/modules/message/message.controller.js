import { userModel } from "../../models/user.model.js";
import { messageModel } from "../../models/message.model.js";

const addMsg = async (req, res) => {
  let { message, receivedId } = req.body;

  const user = userModel.findOne({ receivedId });
  console.log(typeof(user))
  if (!user) return res.json({ message: " user not found" });
  else {
    await messageModel.insertMany({ message, receivedId });
    res.json({ message: "your message is created" });
  }
};

const getUserMsg = async (req, res) => {
  const { receivedId } = req.body;
  const user = userModel.findById({ receivedId });
  if (!user) return res.json({ message: " user not found" });
  else {
  const  messages = await messageModel.find({ receivedId });
    res.json({ message: "your messages created are:", messages });
  }
};

export { addMsg, getUserMsg };
