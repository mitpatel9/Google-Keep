const mongoose = require("mongoose");

const Deleteschima = new mongoose.Schema(
  {
    delete: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Delete", Deleteschima);
