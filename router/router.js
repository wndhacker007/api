const { Router } = require("express");
const router = Router();

const { addmahsulot, getallmahsulot } = require("../controllers/crud.control");

// Маршрут для получения всех продуктов
router.get("/getall", getallmahsulot);
 
// Маршрут для добавления нового продукта
router.post("/add", addmahsulot);

module.exports = router;
