import express from "express";
import isAuthanticated from "../middlewares/isAuthanticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.contoller.js";

const router = express.Router();

router.route("/apply/:id").get(isAuthanticated, applyJob);
router.route("/get").get(isAuthanticated, getAppliedJobs);
router.route("/:id/applicants").get(isAuthanticated, getApplicants);
router.route("/status/:id/update").post(isAuthanticated, updateStatus);

export default router;