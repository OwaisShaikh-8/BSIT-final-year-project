import express from "express";
import { login, registerCustomer, registerVendor } from "../controller/user.controller.js";
const router = express.Router();

router.post('/customersignin',registerCustomer)
router.post('/vendorsignin',registerVendor)
router.post('/login',login)

export default router;