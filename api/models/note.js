const mongoose = require("mongoose");

const noteschima = new mongoose.Schema(
  {
    notes: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Note", noteschima);
