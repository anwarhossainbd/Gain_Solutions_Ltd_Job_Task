const express =require ("express");
const { createchart,getAllChartdata } = require("../controllers/chartsController");


const router =express.Router();

router.route("/charts").get(getAllChartdata);
router.route("/charts/new").post(createchart)


module.exports = router