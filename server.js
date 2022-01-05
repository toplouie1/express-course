const express = require("express");
const app = express();

app.get("/", (req, res) => {
	console.log("Here");
	res.json({ message: "Error" });
	res.send("Wow crazy ");
});

app.listen(3000);
