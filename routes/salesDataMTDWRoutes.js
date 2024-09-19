const express = require("express");
const router = express.Router();
const { upload } = require("../services/fileUpload");
const { 
    uploadSalesDataMTDW, 
    getSalesDashboardDataForEmployeeMTDW, 
    getSalesDataChannelWiseForEmployeeMTDW, 
    getSalesDataSegmentWiseForEmployeeMTDW, 
    getSalesDashboardDataForDealerMTDW,
    getSalesDataChannelWiseForDealerMTDW,
    getSalesDataSegmentWiseForDealerMTDW,
    getAllSubordinatesMTDW,
    getSalesDataChannelWiseBySubordinateCodeMTDW
} = require("../controllers/salesDataMTDWController");
const { dealerAuth, userAuth } = require("../middlewares/authMiddlewares");

router.post("/sales-data-mtdw", upload.single("file"), uploadSalesDataMTDW);

// EMPLOYEE ROUTES 
router.get("/sales-data-mtdw/dashboard/employee", userAuth,  getSalesDashboardDataForEmployeeMTDW);
router.get("/sales-data-mtdw/channel-wise/employee", userAuth, getSalesDataChannelWiseForEmployeeMTDW);
router.get("/sales-data-mtdw/segment-wise/employee", userAuth, getSalesDataSegmentWiseForEmployeeMTDW);
router.get("/sales-data-mtdw/channel-wise/by-subordinate-code/:subordinate_code", getSalesDataChannelWiseBySubordinateCodeMTDW);

// DEALER ROUTES 
router.get("/sales-data-mtdw/dashboard/dealer", dealerAuth,  getSalesDashboardDataForDealerMTDW);
router.get("/sales-data-mtdw/channel-wise/dealer", dealerAuth, getSalesDataChannelWiseForDealerMTDW);
router.get("/sales-data-mtdw/segment-wise/dealer", dealerAuth, getSalesDataSegmentWiseForDealerMTDW);

// Utilities
router.get("/sales-data-mtdw/get-all-subordinates-mtdw", userAuth, getAllSubordinatesMTDW);

module.exports = router;