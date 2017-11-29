const express = require("express");
const cors = require("cors");
const app = express();
const student = require("./data/student");
app.use(cors());

app.get("/", (req, res) => {
    res.json(student);
});

app.get("/:id", (req, res) => {
    for (var i = 0; i < student.students.length; i++) {
        if (student.students[i].id == req.params.id) {
            return res.json(student.students[i]);
        }
    }
    if(!student.students[i]) {
        res.status(404);
        res.json({error: {message: "No record found!"}
        });
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("TS-3 Version-3 on localhost:3000");
});
