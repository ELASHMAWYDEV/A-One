const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;

//Init
require("./init");

//Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//API
app.use("/api", require("./routes"));

//For the react app
if (process.env.NODE_ENV == "production") {
	app.use(express.static(path.join(__dirname, "client", "build")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client", "build", "index.html"));
	});
}
/*********************************************************/

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
