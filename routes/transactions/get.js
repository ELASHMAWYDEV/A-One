const express = require("express");
const router = express.Router();
const EmployeeModel = require("../../models/Employee.model");
const TransactionModel = require("../../models/Transaction.model");

router.post("/", async (req, res) => {
	try {
		const { employeeId, day } = req.body;

		//Validation
		if (!day || isNaN(Date.parse(day)))
			return res.json({ status: false, message: "يجب تحديد اليوم الذي تريد احصائياته" });

		//Check if employee exist
		if (employeeId && !(await EmployeeModel.findOne({ _id: employeeId })))
			return res.json({ status: false, message: "الموظف الذي اخترته غير مسجل من قبل" });

		//Get all transactions for the submitted day
		const transactions = await TransactionModel.find({ ...(employeeId && { "employee._id": employeeId }), day });

		if (transactions.length == 0) return res.json({ status: false, message: "لا يوجد أي عمليات لهذا اليوم" });

		const employees = await EmployeeModel.find({});

		return res.json({ status: true, message: "تم استرجاع البيانات بنجاح", data: { transactions, employees } });
	} catch (e) {
		console.log(`Error in /transactions/get, error: ${e.message}`, e);
		res.json({
			status: false,
			message: e.message,
		});
	}
});

module.exports = router;
