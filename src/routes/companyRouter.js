const express = require("express");
const {
  createJobPost,
  listCompanyJobs,
  getJobPost,
  listJobApplications,
  getAllCompanies,
  createInsight,
  getInsight,
} = require("../controllers/company.controller");
const { getAllJobs, updateJobPost } = require("../controllers/tnp.controller");
const { userInfo, updateUserInfo } = require("../controllers/user.controller");
const {
  companyValidate,
  commonValidate,
} = require("../middlewares/authmiddleware");
const router = express.Router();

router.post("/findInsight",getInsight);
router.post("/createInsight",createInsight);
router.get("/getCompanyInfo", companyValidate, userInfo);
router.post("/updateCompanyInfo", companyValidate, updateUserInfo);
router.post("/createJob", companyValidate, createJobPost);
router.get("/listCompanyJob", companyValidate, listCompanyJobs);
router.post("/getJobInfo", companyValidate, getJobPost);
router.post("/jobApplicantsList", companyValidate, listJobApplications);

// tnp routes

router.post("/getAllJobs", commonValidate, getAllJobs);
router.post("/updateJobStatus", commonValidate, updateJobPost);
router.get("/getCompany", commonValidate, getAllCompanies);

//college insights routes

module.exports = router;
