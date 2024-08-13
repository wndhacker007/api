const { Schema, model } = require("mongoose")
const Mahsulot = new Schema({
     nomi: {
          type: String,
          required: true,
          minlenght: 3,
     },
     narxi: {
          type: Number,
          required: true,
          minlenght: 3,
     }
     ,
     soni: {
          type: Number,
          required: true,
          minlenght: 3,
     }

})

module.exports = model("crud", Mahsulot)