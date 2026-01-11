import mongoose from "mongoose";
//Schema for User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});
export default mongoose.model("User", userSchema);
