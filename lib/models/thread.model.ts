import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: {
    // An ObjectId is a special type typically used for unique identifiers.
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  parentId: {
    type: String,
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
});
// mongoose.model(): To use our schema definition, we need to convert our threadSchema into a Model we can work with.
const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;
