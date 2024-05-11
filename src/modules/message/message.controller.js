import { userModel } from "../../models/user.model.js";
import { messageModel } from "../../models/message.model.js";
import { sendEmail } from "../../emails/nodemailer.js";

const addMsg = async (req, res) => {
  let { message, receivedId } = req.body;

  const user = userModel.findOne({ receivedId });
  console.log(typeof user);
  if (!user) return res.json({ message: " user not found" });
  else {
    await messageModel.insertMany({ message, receivedId });
    res.json({ message: "your message is created" });
  }
};

const getUserMsg =  async(req, res) => {
const messages = await messageModel.find({ receivedId: req.userId });
sendEmail()
res.json({ message: "your messages created are:", messages });
};

export { addMsg, getUserMsg };
