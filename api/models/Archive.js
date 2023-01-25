const mongoose = require("mongoose");

const Archiveschima = new mongoose.Schema(
  {
    archive: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Archive", Archiveschima);
