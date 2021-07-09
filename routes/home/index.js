const express = require("express");
const router = express.Router();
const EmployeeModel = require("../../models/Employee.model");
const ServiceModel = require("../../models/Service.model");

router.post("/", async (req, res) => {
	try {
		
		const employees = await  EmployeeModel.find({});
		const services = await  ServiceModel.find({});

		return res.json({ status: true, message: "تم استرجاع البيانات بنجاح", data: { employees, services } });
		
	} catch (e) {
		console.log(`Error in /api/home: ${e.message}`, e);
	}
});


module.exports = router;