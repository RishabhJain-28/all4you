const mongoose = require("mongoose");

const inviteCodeSchema = new mongoose.Schema({
  code: String,
  validTill: Date,
  for: Number,
  from: {
    name: String,
    phoneNo: Number,
  },
});

const InviteCode = mongoose.model("InviteCode", inviteCodeSchema);

exports.InviteCode = InviteCode;
