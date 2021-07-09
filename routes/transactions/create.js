const express = require("express");
const router = express.Router();
const EmployeeModel = require("../../models/Employee.model");
const ServiceModel = require("../../models/Service.model");
const TransactionModel = require("../../models/Transaction.model");

router.post("/", async (req, res) => {
  try {
    const { servicesIds, employeeId } = req.body;

    //Validation
    if (servicesIds.length == 0 || !Array.isArray(servicesIds)) return res.json({ status: false, message: "يجب اختيار خدمة واحدة علي الأقل" });
    if (!employeeId) return res.json({ status: false, message: "يجب اختيار الموظف" });
    
    //Check if employee exist
    if (!await EmployeeModel.findOne({ _id: employeeId })) return res.json({ status: false, message: "الموظف الذي اخترته غير مسجل من قبل" })
    
    //Check if all services exist
    const services = await ServiceModel.find({ _id: { $all: servicesIds } });
    if (services.length == 0) return res.json({status: false, message: "الموظف الذي اخترته غير مسجل من قبل"})
    
    //Calculate total amount
    let total = 0;
    for (let service of services) {
      total += service.price;
    }


    //Get the day string --> mm-dd-yyyy
    const date = new Date();
    const day = [
      date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
      date.getFullYear(),
    ].join('-');


    //Save to DB
    const savedTransaction = await TransactionModel.create({
      services: servicesIds,
      employee: employeeId,
      cashier: req.user._id,
      total,
      day
    });


    return res.json({ status: true, message: "تم تسجيل العملية بنجاح", data: savedTransaction });


  } catch (e) {
    console.log(`Error in /transactions/create, error: ${e.message}`, e);
		res.json({
			status: false,
			message: e.message,
		});
  }
});


module.exports = router;