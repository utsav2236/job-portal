import express from "express";
import isAuthanticated from "../middlewares/isAuthanticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthanticated, postJob);
router.route("/get").get(isAuthanticated, getAllJobs);
router.route("/getadminjobs").get(isAuthanticated, getAdminJobs);
router.route("/get/:id").get(isAuthanticated, getJobById);

export default router;