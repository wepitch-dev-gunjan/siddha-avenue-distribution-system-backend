const express = require("express");
const router = express.Router();
const { upload } = require("../services/fileUpload");
const { 
    uploadSalesDataMTDW, 
    getSalesDashboardDataForEmployeeMTDW, 
    getSalesDataChannelWiseForEmployeeMTDW, 
    getSalesDataSegmentWiseForEmployeeMTDW, 
    getSalesDashboardDataForDealerMTDW
} = require("../controllers/salesDataMTDWController");
const { dealerAuth, userAuth } = require("../middlewares/authMiddlewares");

router.post("/sales-data-mtdw", upload.single("file"), uploadSalesDataMTDW);

// EMPLOYEE ROUTES 
router.get("/sales-data-mtdw/dashboard/employee", userAuth,  getSalesDashboardDataForEmployeeMTDW);
router.get("/sales-data-mtdw/channel-wise/employee", getSalesDataChannelWiseForEmployeeMTDW);
router.get("/sales-data-mtdw/segment-wise/employee", getSalesDataSegmentWiseForEmployeeMTDW);

// DEALER ROUTES 
router.get("/sales-data-mtdw/dashboard/dealer", dealerAuth,  getSalesDashboardDataForDealerMTDW);


module.exports = router;