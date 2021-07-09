const express = require("express");
const router = express.Router();
const { createToken } = require("../../middlewares/jwt");
const UserModel = require("../../models/User.model");

router.post("/", async (req, res) => {
	try {
		const { username, password } = req.body;

		//Validation
		if (!username) return res.json({ status: false, message: "يجب كتابة اسم المستخدم" });
		if (!password) return res.json({ status: false, message: "يجب كتابة كلمة المرور" });

		//DB Check
		let userSearch = await UserModel.findOne({ username });
		userSearch = userSearch && userSearch.toObject();

		if (!userSearch)
			return res.json({
				status: false,
				message: "اسم المستخدم غير موجود",
			});

		//Password Match
		if (password != userSearch.password) return res.json({ status: false, message: "كلمة المرور غير صحيحة" });

		//delete the password from user object
		delete userSearch.password;

		/********************************************************/

		//Send the jwt token with the success response
		const accessToken = await createToken({ _id: userSearch._id, role: userSearch.role });

		res.cookie("access_token", accessToken, { maxAge: 86400 * 1000 });
		res.cookie("user_data", JSON.stringify(userSearch), {
			maxAge: 86400 * 1000,
		});
		return res.json({
			status: true,
			message: "تم تسجيل الدخول بنجاح",
			user: userSearch,
			accessToken,
		});

		/********************************************************/
	} catch (e) {
		console.log(`Error in /auth/login, error: ${e.message}`, e);
		res.json({
			status: false,
			message: e.message,
		});
	}
});

module.exports = router;
