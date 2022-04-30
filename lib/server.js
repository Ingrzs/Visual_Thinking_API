const express = require("express");
const studentcontroller = require("./controllers/studentcontroller");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Think API welcome!"});
});


app.get("/v1/students/", (request, response) => {
    const AllStudents = studentcontroller.allstudentscontroller();
    response.json(AllStudents);
});




app.listen(port, () => {
    console.log(`Visual Think API in localhost:${port}`);
});