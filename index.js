import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render("index.ejs");
})

app.post("/submit", function (req, res) {
    const firstname = req.body["firstName"];
    const lastname = req.body["lastName"];
    // console.log(numberOfLetters);
    res.render("index.ejs", { FirstName: firstname, LastName: lastname });
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})