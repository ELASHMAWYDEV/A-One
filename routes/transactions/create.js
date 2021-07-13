const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const EmployeeModel = require("../../models/Employee.model");
const ServiceModel = require("../../models/Service.model");
const TransactionModel = require("../../models/Transaction.model");

router.post("/", async (req, res) => {
  try {
    let {
      servicesIds,
      employeeId,
      extraServiceDescription,
      extraServiceAmount,
    } = req.body;

    //Validation
    if (servicesIds.length == 0 || !Array.isArray(servicesIds))
      return res.json({
        status: false,
        message: "يجب اختيار خدمة واحدة علي الأقل",
      });
    if (!employeeId)
      return res.json({ status: false, message: "يجب اختيار الموظف" });

    //Check if employee exist
    const employee = await EmployeeModel.findOne({ _id: employeeId });
    if (!employee)
      return res.json({
        status: false,
        message: "الموظف الذي اخترته غير مسجل من قبل",
      });

    //Check if all services exist
    // if (servicesIds.filter(async (id) => (await ServiceModel.distinct("_id")).indexOf(id) == -1).length == 0)
    // 	return res.json({ status: false, message: "الخدمات التي اخترتها غير موجودة كلها أو بعض منها" });

    let services = [];

    for (let _id of servicesIds) {
      services.push(
        await ServiceModel.findOne({ _id: mongoose.Types.ObjectId(_id) })
      );
    }

    //Calculate total amount
    let total = parseInt(extraServiceAmount) || 0;
    for (let service of services) {
      total += service.price;
    }

    //Get the day string --> mm-dd-yyyy
    const date = new Date();
    const day = [
      date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1,
      date.getFullYear(),
    ].join("-");

    //Save to DB
    const savedTransaction = await TransactionModel.create({
      services: services,
      employee: employee,
      cashier: {
        _id: req.user._id,
        name: req.user.name,
      },
      extraService: {
        amount: extraServiceAmount || 0,
        description: extraServiceDescription || "",
      },
      total,
      day,
    });

    return res.json({
      status: true,
      message: "تم تسجيل العملية بنجاح",
      data: savedTransaction,
    });
  } catch (e) {
    console.log(`Error in /transactions/create, error: ${e.message}`, e);
    res.json({
      status: false,
      message: e.message,
    });
  }
});

module.exports = router;
