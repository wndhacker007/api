const Cruds = require("../module/crud.modules")
//method:Post
//data bazaga malumotni create qilish

const addmahsulot = async (req, res) => {
     try {
          const { nomi, narxi, soni } = req.body
          const mahsulotcreate = await Cruds.create({
               nomi, narxi, soni
          })
          res.status(200).json({
               sms: "mahsulot create buldi",
               mahsulotcreate
          })


     } catch (err) {
          console.error(err);
     }
}
//method: GET
//barcha mahsulotlarni olish uchun api GetAll

const getallmahsulot = async (req, res) => {
try {
     const maxsulotlar = await Cruds.find()
     res.status(200).json({
          message: "maxsulotlarni oldingiz",
          maxsulotlar:maxsulotlar.reverse()
     })
} catch (err) {
     console.error(err); 
}
}

//yaratilgan malumotlarni export qilish
module.exports={addmahsulot,getallmahsulot}