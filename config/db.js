const mongoose = require("mongoose")

const connectDB = async () => {
     try {
          const conn = await mongoose.connect(process.env.MONGO_URI, {
               useNewUrlParser: true
          })
          console.log(`connect db ${conn.connection.host}`)
     }
     catch (err) {
          console.log(err)
     }


}
module.exports = connectDB